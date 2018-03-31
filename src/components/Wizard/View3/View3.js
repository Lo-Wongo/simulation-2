import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

class Step3 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      image: wizard.image || ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { image } = this.state;
    const { updateWizard } = this.props;

    return (
      <div>
        <p>Step 3 here</p>

        <span>Image URL:</span>
        <input value={ image } onChange={ (e) => this.handleChange('image', e.target.value) } />

        <br />

        <Link to="/wizard/view2" onClick={ () => updateWizard({ image })}>
          Previous Step
        </Link>

        <Link to="/wizard/view4" onClick={ () => updateWizard({ image })}>
          Next Step
        </Link>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step3 );