import React, { Component } from "react";

interface user {
  fullName: string;
}

export default class TestCode extends Component<{}, user> {
  constructor(props: {}) {
    super(props);
    this.state = {
      fullName: "OM",
    };
  }
  render() {
    return (
      <>
        <div>{this.state.fullName}</div>
        <form action=""></form>
      </>
    );
  }
}
