import React from 'react';
import Name from './subcomponents/Name';
import Email from './subcomponents/Email';
import Cpf from './subcomponents/Cpf';
import Address from './subcomponents/Address';
import City from './subcomponents/City';
import State from './subcomponents/State';
import Type from './subcomponents/Type';
import statesData from '../states';

class PersonalInfo extends React.Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: ''
    };
  };

  handleChanges({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address' && value.match(/\W/)) value = value.replaceAll(/\W/g, '');

    this.setState({ [name]: value });
  };

  handleBlur({ target }) {
    let { name, value } = target;
    this.setState(value.match(/^\d/) ? { [name]: '' } : { [name]: value });
  }

  render() {
    const { address, city } = this.state;
    
    return (
      <fieldset>
        <legend>Personal Info</legend> <br />
        <Name onChange={ this.handleChanges } />
        <Email onChange={ this.handleChanges }/>
        <Cpf onChange={ this.handleChanges } />
        <Address onChange={ this.handleChanges } value={ address } />
        <City onChange={ this.handleChanges } onBlur={ this.handleBlur } value={ city } />
        <State onChange={ this.handleChanges } states={ statesData } />
        <Type onChange={ this.handleChanges } />
      </fieldset>
    );
  };
}

export default PersonalInfo;