import React, { Component } from "react";
import {v4 as uuid} from "uuid";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: "" };
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
      active: true,
      id: uuid()
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({todo:""});
  };

  render() {
    return (
      <div>
        <p>New Todo</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New Todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button>ADD TODO</button>
        </form>
      </div>
    );
  }
}

export default NewTodo;
