import React, { useState } from 'react';
import './Search.css';

const Search = (props) => {
  const [user, updateUser] = useState('');

  function handleInput(e) {
    updateUser(e.target.value);
  }

  return (
    <div className="search">
      <h1>GitHub Score</h1>
      <div>
        <label htmlFor='search-box'>GitHub Username:</label>&nbsp;
        <input type='text' placeholder="github_username" id='search-box' onChange={(e) => handleInput(e)} />
      </div>
      <br />
      <button id='calculate' onClick={() => props.search(user)}>Calculate my GitHub Score</button>
    </div >
  );

}

export default Search;