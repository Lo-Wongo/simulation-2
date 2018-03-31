import React, { Component } from "react";

import { Link } from "react-router-dom";

import { login } from '../../ducks/reducer';
import { connect } from "react-redux";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { username, password } = this.state;
    const { history, login } = this.props;

    return (
      <div>
        <span>Username:</span>
        <input value={ username } onChange={ (e) => this.handleChange('username', e.target.value) } />
        <br />
        <span>Password:</span>
        <input value={ password } type="password" onChange={ (e) => this.handleChange('password', e.target.value) } />
        <br />
        <br />
        <button onClick={ () => login( { username, password }, history ) }>Login</button>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    )
  }
}

export default connect( state => state, { login } )( Login );