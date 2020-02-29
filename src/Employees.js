import React, { Component } from "react";
import Employee from "./Employee";

class Employees extends Component {

    state = {
        employees: this.props.list
    }

    filterUsers = event => {
        let value = event.target.value;
        let filteredUsers = this.props.list.filter(
            user => user.name.toLocaleLowerCase()
                .includes(value.toLocaleLowerCase()));
        this.setState({
            employees: filteredUsers
        });
    }

    orderByCountry = () => {
        let sortedUsers = this.props.list.sort((user1, user2) => {
            var keyA = user1.country;
            var keyB = user2.country;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        this.setState({ employees: sortedUsers })
    }
    render() {
        return (
            <div>
                <form className="main form my-3 p-3 bg-white rounded box-shadow container">
                    <input
                        className="form-control"
                        name="search"
                        onChange={this.filterUsers}
                        type="text"
                        placeholder="Search Employee..."
                    />
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Team</th>
                            <th onClick={this.orderByCountry}>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(element => (
                            <Employee key={element.id} employee={element} />
                        ))}
                    </tbody>
                </table>
            </div>
        );

    }
}

export default Employees;