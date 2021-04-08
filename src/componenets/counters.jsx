import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1, title: "XX" },
      { id: 2, value: 1, title: "YY" },
      { id: 3, value: 1, title: "AA" },
      { id: 4, value: 1, title: "BB" },
    ],
  };

  handleDelete = (counterId) => {
    // console.log("delete handling has been called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-success btn-sm m-5"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
