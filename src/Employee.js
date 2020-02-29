import React from "react";

function Employee({ employee }) {
    return (

        <tr>
            <td>
                {employee.name}
            </td>
            <td>
                {employee.team}
            </td>
            <td>
                {employee.country}
            </td>
        </tr>
    );
}

export default Employee;