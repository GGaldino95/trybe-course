import React from 'react';

class Cpf extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="cpf-input">
        CPF:
        <input
          type="text"
          id="cpf-input"
          name="cpf"
          onChange={ onChange }
          maxLength="11"
          required
        />
        <br />
      </label>
    )
  }
}

export default Cpf;