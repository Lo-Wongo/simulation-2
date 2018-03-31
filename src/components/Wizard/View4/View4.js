import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

class Step4 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      loan_amount: wizard.loan_amount || '',
      monthly_mortgage: wizard.monthly_mortgage || ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { loan_amount, monthly_mortgage } = this.state;
    const { updateWizard } = this.props;

    return (
      <div>
        <p>Step 4 here</p>

        <span>Loan Amount:</span>
        <input value={ loan_amount } onChange={ (e) => this.handleChange('loan_amount', e.target.value) } />

        <br />

        <span>Monthly Mortgage:</span>
        <input value={ monthly_mortgage } onChange={ (e) => this.handleChange('monthly_mortgage', e.target.value) } />

        <br />

        <Link to="/wizard/view3" onClick={ () => updateWizard({ loan_amount, monthly_mortgage })}>
          Previous Step
        </Link>

        <Link to="/wizard/view5" onClick={ () => updateWizard({ loan_amount, monthly_mortgage })}>
          Next Step
        </Link>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step4 );