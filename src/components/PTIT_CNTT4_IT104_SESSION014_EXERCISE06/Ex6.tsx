import React, { Component } from "react";

type State = {
  choice: string;
  submitChoice: string;
};

export default class Ex6 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      choice: "",
      submitChoice: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ choice: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ submitChoice: this.state.choice });
  };

  render() {
    return (
      <div>
        <p>Gioi tinh: {this.state.submitChoice}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="radio"
            name="s"
            value="Nam"
            onChange={this.handleChange}
          />
          <label>Nam</label>
          <br />
          <input
            type="radio"
            name="s"
            value="Nu"
            onChange={this.handleChange}
          />
          <label>Nu</label>
          <br />
          <input
            type="radio"
            name="s"
            value="Khac"
            onChange={this.handleChange}
          />
          <label>Khac</label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
