import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    count: 2,
    imageUrl: "http://picsum.photos/200",
    tags: [],
    names: ["Mohit", "John", "Harry"],
    sports: ["Cricket", "Hockey", "Baseball"],
    name: "Mohit",
  };

  handle = () => {
    this.setState({ value: this.state.value + 1 });
    // console.log(product);
    // this.setState({ count: this.state.count + 1 });
  };

  renderTag() {
    if (this.state.tags.length === 0) return <p>There are no tags!!!</p>;
    return (
      <ol>
        {this.state.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ol>
    );
  }

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3 style={this.styles}>{this.props.id}</h3>
        <span className={this.getBadgeClasses()}>{this.countFormat()}</span>
        <button onClick={this.handle} className="btn btn-secondary">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  countFormat() {
    return this.state.count === 0 ? <h1>zero</h1> : this.state.count;
  }
}

export default Counter;
