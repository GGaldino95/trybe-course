import React from 'react';

class Address extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="address-input">
        Address:
        <input
          type="text"
          id="address-input"
          name="address"
          value={value} // It will remove any special character inside the field, checked by onChange().
          onChange={onChange}
          maxLength="200"
          required
        />
        <br />
      </label>
    )
  }
}

export default Address;