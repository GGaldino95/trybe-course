import React from 'react';

class City extends React.Component {
  render() {
    const { value, onChange, onBlur } = this.props;

    return (
      <label htmlFor="city-input">
        City:
        <input
          type="text"
          id="city-input"
          name="city"
          value={value} // It will empty the field if it starts with a number, checked by onBlur().
          onChange={onChange}
          onBlur={onBlur}
          maxLength="28"
          required
        />
        <br />
      </label>
    )
  }
}

export default City;