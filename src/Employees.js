import React from "react";
import Employee from "./Employee";

function Employees({ list }) {
    return (
        <div className="container">
            {list.map(element => (
                <Employee employee={element} />
            ))}
        </div>
    );
}

export default Employees;