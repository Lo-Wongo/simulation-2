import React, { Component } from "react";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      amount: ''
    };
  }

  handleChange( val ) {
    this.setState({ amount: val });
  }

  render() {
    const { filterProperties, getProperties } = this.props;
    const { amount } = this.state;
    return (
      <div>
        <span>List all properties with "desired rent" greator than: $ </span>
        <input onChange={ (e) => this.handleChange( e.target.value ) } />
        <button onClick={ () => filterProperties( amount ) } > Filter </button>
        <button onClick={ getProperties } > Reset </button>
      </div>
    )
  }
}