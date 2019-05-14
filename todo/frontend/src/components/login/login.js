import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/api/login/', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  onChangeUsername = (event) => {
    this.setState({username: event.target.value});
  }

  onChangePassword = () => {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <form className="login" onSubmit={this.onSubmit}>
        <legend>Login</legend>
        <div className="form-group">
          <label htmlFor="exampleInputUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.onChangeUsername}
          >
          </input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChangePassword}
          >
          </input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}