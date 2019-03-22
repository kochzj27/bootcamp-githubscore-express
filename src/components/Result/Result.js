import React from 'react';
import './Result.css';

const Result = (props) => {

  var users = props.users;
  let settings = props.settings;

  let display = users.map((user, idx) => {
    let msgObj = settings.filter(function (item) {
      return (user.score > item.min && user.score < item.max) || (user.score > item.min && item.max === null);
    });
    return (<div className='score-box' key={idx}>
      <h3>{user.username} - {user.score}</h3>
      <p style={{ color: `${msgObj[0].color}` }}> {msgObj[0].msg}</p>
    </div>
    )
  })


  return (
    <div className="result">
      {props.score !== -1 ?
        <div>
          <h1>Scores:</h1>
          <div id='displaydiv'>
            {display[0] ? display : <h6>NONE</h6>}
          </div>
        </div>
        :
        <div>
          <h1>User does not exist, pick a different GitHub username.</h1>
        </div>
      }
    </div >
  );
}


export default Result;