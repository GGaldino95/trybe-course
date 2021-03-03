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
  render() {
    const { currentState, handleChanges, handleBlur } = this.props;
    const { address, city } = currentState;
    
    return (
      <fieldset>
        <legend>Personal Info</legend> <br />
        <Name onChange={ handleChanges } />
        <Email onChange={ handleChanges }/>
        <Cpf onChange={ handleChanges } />
        <Address onChange={ handleChanges } value={ address } />
        <City onChange={ handleChanges } onBlur={ handleBlur } value={ city } />
        <State onChange={ handleChanges } states={ statesData } />
        <Type onChange={ handleChanges } />
      </fieldset>
    );
  };
}

export default PersonalInfo;