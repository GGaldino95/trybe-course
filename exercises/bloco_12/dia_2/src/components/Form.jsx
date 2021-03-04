import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';

class Form extends React.Component {
  constructor() {
    super();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    sessionStorage.setItem('hasAlerted', 'no');
  };

  handleMouseEnter() {
    if (sessionStorage.getItem('hasAlerted') === 'no') {
      alert('Fill in this information carefully.');
      sessionStorage.setItem('hasAlerted', 'yes');
    };
  };

  render() {
    const { name, email, cpf, address, city, state, type, summary, position, description } = this.props.initialState;
    const { handleChanges, handleBlur } = this.props 
    const personalData = { name, email, cpf, address, city, state, type };
    const professionalData = { summary, position, description };

    return (
      <form>
        <PersonalInfo
          currentState={ personalData }
          handleChanges={ handleChanges }
          handleBlur={ handleBlur }
        />
        <ProfessionalInfo
          currentState={ professionalData }
          handleChanges={ handleChanges }
          handleMouseEnter={ this.handleMouseEnter }
        />
      </form>
    );
  };
};

export default Form;