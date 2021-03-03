import React from 'react';

class Email extends React.Component {
  render() {
    const { value, onChange } = this.props;
    
    return (
      <label htmlFor="email-input">
        Email:
        <input
          type="text"
          id="email-input"
          name="email"
          value={value}
          onChange={onChange}
          maxLength="50"
          required
        />
        <br />
      </label>
    )
  }
}

export default Email;