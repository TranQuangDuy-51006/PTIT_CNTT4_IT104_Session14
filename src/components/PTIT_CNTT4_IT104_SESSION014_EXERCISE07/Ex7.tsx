import React, { Component } from "react";

type Account = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type State = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export default class Ex7 extends Component<{}, State> {
  nameInput: React.RefObject<HTMLInputElement | null>;

  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
    };
    this.nameInput = React.createRef<HTMLInputElement>();
  }

  handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, password, phone } = this.state;

    if (!name || !email || !password) {
      alert("Tên sinh viên, Email và Mật khẩu không được để trống");
      return;
    }
    const accounts: Account[] = JSON.parse(
      localStorage.getItem("accounts") || "[]"
    );
    const emailCheck = accounts.find((acc) => acc.email === email);
    if (emailCheck) {
      alert("Email đã tồn tại, vui lòng chọn email khác");
      return;
    }

    accounts.push({ name, email, password, phone });
    localStorage.setItem("accounts", JSON.stringify(accounts));

    this.setState({
      name: "",
      email: "",
      password: "",
      phone: "",
    });

    if (this.nameInput.current) {
      this.nameInput.current.focus();
    }
    alert("Đăng ký thầnh công");
  };

  render() {
    return (
      <div>
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Tên sinh viên</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeInput}
            ref={this.nameInput}
          />
          <br />
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
          <label htmlFor="">Số điện thoại</label>
          <br />
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChangeInput}
          />
          <br />
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
