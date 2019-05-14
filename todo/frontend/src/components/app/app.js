import React, { Component } from 'react';
import './app.css';

import Register from '../register';
import Header from '../header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Register />
      </div>
    )
  }
}
