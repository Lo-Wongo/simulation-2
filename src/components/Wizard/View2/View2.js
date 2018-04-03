import React, { Component } from "react";

import './View2.css'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

class Step2 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    
    this.state={ 
      address: wizard.address || '',
      city: wizard.city || '',
      state: wizard.state || '',
      zip: wizard.zip || ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { address, city, state, zip } = this.state;
    const { updateWizard } = this.props;

    return (
      <div className="step_two">
        <p>Step 2 here</p>

        <span>Address:</span>
        <input value={ address } onChange={ (e) => this.handleChange('address', e.target.value) } />

        <br />

        <span>City:</span>
        <input value={ city } onChange={ (e) => this.handleChange('city', e.target.value) } />

        <br />

        <span>State:</span>
        <input value={ state } onChange={ (e) => this.handleChange('state', e.target.value) } />

        <br />

        <span>Zip:</span>
        <input value={ zip } onChange={ (e) => this.handleChange('zip', e.target.value) } />

        <br />

        <Link to="/wizard/view1" onClick={ () => updateWizard({ address, city, state, zip })}>
          Previous Step
        </Link>

        <Link to="/wizard/view3" onClick={ () => updateWizard({ address, city, state, zip })}>
          Next Step
        </Link>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step2 );