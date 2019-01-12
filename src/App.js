import React, { Component } from "react";
import Table from "./components/table";

class App extends Component {
  state = {
    employees: [
      { id: 1, name: "Jennifer", age: 19 },
      { id: 2, name: "Harvey", age: 25 },
      { id: 3, name: "Chris", age: 35 },
      { id: 4, name: "Olivia", age: 28 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Table employees={this.state.employees} />
      </React.Fragment>
    );
  }
}

export default App;
