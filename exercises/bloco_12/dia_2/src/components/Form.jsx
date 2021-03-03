import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';

class Form extends React.Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    sessionStorage.setItem('hasAlerted', 'no');

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      summary: '',
      position: '',
      description: ''
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
    this.setState(value.match(/\d/) ? { [name]: '' } : { [name]: value });
  }

  handleMouseEnter() {
    if (sessionStorage.getItem('hasAlerted') === 'no') {
      alert('Fill in this information carefully.');
      sessionStorage.setItem('hasAlerted', 'yes');
    }
  }

  render() {
    const { name, email, cpf, address, city, state, type, summary, position, description } = this.state
    const personalData = { name, email, cpf, address, city, state, type };
    const professionalData = { summary, position, description };

    return (
      <form>
        <PersonalInfo
          currentState={ personalData }
          handleChanges={ this.handleChanges }
          handleBlur={ this.handleBlur }
        />
        <ProfessionalInfo
          currentState={ professionalData }
          handleChanges={ this.handleChanges }
          handleMouseEnter={ this.handleMouseEnter }
        />
      </form>
    )
  }
}

export default Form;