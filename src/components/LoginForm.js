import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleNameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePwChange = e => {
    this.setState({ password: e.target.value });
  };

  // checkFilled = () => {
  //   return this.state.username.length > 0 && this.state.password.length > 0;
  // };

  render() {
    // const checker = this.checkFilled() ? this.handleSubmit : this.handleSubmit;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handlePwChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
