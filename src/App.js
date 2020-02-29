import React, { Component } from "react";
import './App.css';
import Employees from './Employees';

let users = [{
  "name": "John Doe",
  "id": 0,
  "team": "Transformation",
  "country": "Andorra"
},
{
  "name": "Jane Bla",
  "id": 1,
  "team": "Finance",
  "country": "Monaco"
},
{
  "name": "Pikachu",
  "id": 2,
  "team": "Fire Gym",
  "country": "Kanto"
}];


function App() {
  return (
    <div className="App">
      <Employees list={users} />
    </div>
  );
}

export default App;
