import React from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './Employees';

function App() {

  let users = [{
    "name": "John Doe"
  },
  {
    "name": "Jane Doe"
  }]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Employee Directory
        </a>
      </header>
      <Employees list={users} />
    </div>
  );
}

export default App;
