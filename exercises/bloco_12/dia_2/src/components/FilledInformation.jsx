import React from 'react';

class FilledInformation extends React.Component {
  render() {
    const {
        name, email, cpf, address, city, state,
        type, summary, position, description
    } = this.props.currentState;

    return (
      <div>
        <h2>Sent Info</h2>
        <h3>Personal</h3>
        <div> Name: { name }</div>
        <div> Email: { email }</div>
        <div> CPF: { cpf }</div>
        <div> Address: { address }</div>
        <div> City: { city }</div>
        <div> Country State: { state }</div>
        <div> Residence Type: { type }</div>
        <h3>Professional</h3>
        <div> Curriculum Summary: { summary }</div>
        <div> Job Position: { position }</div>
        <div> Job Description: { description }</div>
      </div>
    );
  }
}

export default FilledInformation;