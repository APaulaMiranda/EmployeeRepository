import React from "react";
import Employee from "./Employee";

function Employees({ list }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {list.map(element => (
                    <Employee key={element.id} employee={element} />
                ))}
            </tbody>
        </table>
    );
}

export default Employees;