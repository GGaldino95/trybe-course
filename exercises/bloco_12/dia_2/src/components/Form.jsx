import React from 'react';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';

class Form extends React.Component {
  render() {
    return (
      <form>
        <PersonalInfo />
        <ProfessionalInfo />
      </form>
    )
  }
}

export default Form;