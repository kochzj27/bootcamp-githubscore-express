import React, { Component } from 'react';
import Search from '../Search/Search';
import Result from '../Result/Result';
import './Container.css';
import axios from 'axios';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: [{ user: 'kochzj27', score: 7 }, { user: 'cugent', score: 18 }],
      users: [],
      settings: [
        { min: 0, max: 19, msg: 'Needs Work!', color: 'red' },
        { min: 20, max: 49, msg: 'A decent start...', color: 'orange' },
        { min: 50, max: 99, msg: 'Could be better', color: 'black' },
        { min: 100, max: 199, msg: 'Great Job!', color: 'green' },
        { min: 200, max: null, msg: 'Github Elite!', color: 'blue' },
      ]
    }
  }

  componentDidMount() {
    axios.get('/users')
      .then((res) => {
        this.setState({
          users: res.data.payload,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  searchUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then((response) => {
        let score = 0;
        score += parseInt(response.data.followers);
        score += parseInt(response.data.public_repos);
        //make post api call, pass username and score
        axios.post('/users', { username: `${user}`, score: score })
          .then((res) => {
            axios.get('/users')
              .then((res) => {
                this.setState({
                  users: res.data.payload,
                })
              })
              .catch((err) => {
                console.log(err);
              })
          })
          .catch((err) => {
            console.log(err);
            console.log("error pushing new record");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <Search search={this.searchUser} />
        <Result users={this.state.users} settings={this.state.settings} />
      </div>
    );
  }

}

export default Container;