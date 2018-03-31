import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from '../../ducks/reducer';

class Register extends Component {
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
    const { history, register } = this.props;

    return (
      <div>
        <span>Username:</span>
        <input value={ username } onChange={ (e) => this.handleChange('username', e.target.value) } />
        <br />
        <span>Password:</span>
        <input value={ password } type="password" onChange={ (e) => this.handleChange('password', e.target.value) } />
        <br />
        <br />
        <button onClick={ () => register( { username, password }, history ) }>Register</button>
        <Link to="/Login">
          <button>Login</button>
        </Link>
      </div>
    )
  }
}

export default connect( state => state, { register } )( Register );