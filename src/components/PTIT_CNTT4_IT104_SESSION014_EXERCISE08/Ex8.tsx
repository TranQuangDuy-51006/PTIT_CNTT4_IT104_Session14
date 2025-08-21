import React, { Component } from "react";

type Account = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type State = {
  email: string;
  password: string;
};

export default class Ex8 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (!email || !password) {
      alert(" Email và Mật khẩu không được để trống");
      return;
    }
    const accounts: Account[] = JSON.parse(
      localStorage.getItem("accounts") || "[]"
    );
    const emailCheck = accounts.find((acc) => acc.email === email);
    const passCheck = accounts.find((acc) => acc.password === password);
    if (emailCheck && passCheck) {
      alert("Đăng nhập thành công");
      return;
    }
    alert("Mật khẩu hoặc tài khoản sai");
  };

  render() {
    return (
      <div>
        <h2>Đăng nhập</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeInput}
          />
          <br />
          <label htmlFor="">Mật khẩu</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangeInput}
          />

          <br />
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
