import React from 'react';

class Name extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="name-input">
        Name:
        <input
          type="text"
          id="name-input"
          name="name"
          onChange={ onChange }
          maxLength="40"
          required
        />
        <br />
      </label>
    )
  }
}

export default Name;