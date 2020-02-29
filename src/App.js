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


class App extends Component {

  state = {
    search: "",
    users: users
  }

  filterUsers = event => {
    var value = event.target.value;
    let filteredUsers = users.filter(user => user.name.toLocaleLowerCase()
      .includes(value.toLocaleLowerCase()));

    this.setState({
      search: value,
      users: filteredUsers
    });
  }

  orderUsers = event => {
    var value = event.target.value;
    let filteredUsers = users.sort(user => user.team.toLocaleLowerCase()
      .includes(value.toLocaleLowerCase()));

    this.setState({
      search: value,
      users: filteredUsers
    });
  }

  render() {
    return (
      <div className="App">
        <form className="main form my-3 p-3 bg-white rounded box-shadow container">
          <input
            className="form-control"
            name="search"
            onChange={this.filterUsers}
            type="text"
            placeholder="Search Employee..."
          />
        </form>
        <Employees list={this.state.users} />
      </div>
    );
  }
}

export default App;
