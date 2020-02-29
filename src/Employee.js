import React from "react";

function Employee({ employee }) {
    return (

        <div className="row">
            <div className="col-3">
                {employee.name}
            </div>
        </div>
    );
}

export default Employee;