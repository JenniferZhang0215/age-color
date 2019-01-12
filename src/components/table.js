import React, { Component } from "react";
import "../App.css";
import getColor from "./color";

class Table extends Component {
  render() {
    //object destructuring
    const { employees } = this.props;
    const ageColor = {
      backgroundColor: "yellow",
      color: getColor(employees.map(item => item.age))
    };

    return (
      <div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(item => (
              <tr key={employees.indexOf(item)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td style={ageColor.color}>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
