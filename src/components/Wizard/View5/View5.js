import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard, resetWizard, createProperty } from "../../../ducks/reducer";

class Step5 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      recommended_rent: wizard.recommended_rent || parseInt(wizard.monthly_mortgage, 10) * 1.25,
      desired_rent: wizard.desired_rent || ''
    }

    this.handleChange = this.handleChange.bind( this );
    this.finishWizard = this.finishWizard.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }
  
  finishWizard() {
    const { history, wizard, createProperty, resetWizard } = this.props;
    const { recommended_rent, desired_rent } = this.state;
    let wizardProps = Object.assign({}, wizard);
    wizardProps.recommended_rent = recommended_rent;
    wizardProps.desired_rent = desired_rent;

    resetWizard();
    createProperty( wizardProps, history );
  }

  render() {
    const { recommended_rent, desired_rent } = this.state;
    const { updateWizard } = this.props;

    return (
      <div>
        <p>Step 5 here</p>

        <span>Recommended Rent: { recommended_rent }</span>

        <br />

        <span>Desired Rent:</span>
        <input value={ desired_rent } onChange={ (e) => this.handleChange('desired_rent', e.target.value) } />

        <br />

        <Link to="/wizard/view" onClick={ () => updateWizard({ desired_rent, recommended_rent })}>
          Previous Step
        </Link>

        <button onClick={ this.finishWizard }>Complete</button>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard, createProperty, resetWizard } )( Step5 );