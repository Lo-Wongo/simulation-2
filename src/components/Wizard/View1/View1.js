import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

class Step1 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      name: wizard.name || '',
      description: wizard.description || ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { name, description } = this.state;
    const { updateWizard } = this.props;

    return (
      <div>
        <p>Step 1 here</p>

        <span>Property Name:</span>
        <input value={ name } onChange={ (e) => this.handleChange('name', e.target.value) } />

        <br />

        <span>Property Description:</span>
        <input value={ description } onChange={ (e) => this.handleChange('description', e.target.value) } />

        <br />

        <Link to="/wizard/view2" onClick={ () => updateWizard({ name, description })}>
          Next Step
        </Link>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step1 );