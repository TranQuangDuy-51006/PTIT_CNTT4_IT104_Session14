import React, { Component } from "react";

type product = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

export default class Ex5 extends Component<{}, product> {
  constructor(props: {}) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      price: 0,
      quantity: 0,
    };
  }
  handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">Ma san pham</label>
            <br />
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChangeInput}
            />
          </div>
          <div>
            <label htmlFor="">Ten san pham</label>
            <br />
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="">Gia</label>
            <br />
            <input
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChangeInput}
            />
          </div>

          <div>
            <label htmlFor="">So luong</label>
            <br />
            <input
              type="text"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChangeInput}
            />
          </div>
          <button type="submit">Dang ky</button>
        </form>
      </div>
    );
  }
}
