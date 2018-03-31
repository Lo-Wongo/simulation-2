import React, { Component } from "react";
import './Property.css';

export default class Property extends Component {
  render() {
    const { id, address, city, description, desired_rent, image, loan, monthly_mortgage, name, recommended_rent, state, zip, deleteProperty } = this.props;
    return (
      <div id="Property__container">
        <p>Image: { image }</p>
        <p>Name: { name } </p>
        <p>Description: { description }</p>
        <p>Loan: { loan }</p>
        <p>Monthly Mortgage: { monthly_mortgage }</p>
        <p>Recommended Rent: { recommended_rent }</p>
        <p>Desired Rent: { desired_rent }</p>
        <br />
        <br />
        <p>Address: { address }</p>
        <p>City: { city }</p>
        <p>State: { state }</p>
        <p>Zip: { zip }</p>
        <br />
        <br />
        <br />
        <button onClick={ () => deleteProperty( id ) }>Delete</button>
      </div>
    )
  }
}