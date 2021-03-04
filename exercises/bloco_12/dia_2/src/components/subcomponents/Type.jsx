import React from 'react';

class Type extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <section>
        <label htmlFor="house-radio">
          <input
            type="radio"
            id="house-radio"
            name="type"
            value="house"
            onChange={ onChange }
            required
          />
            House
        </label>
        <label htmlFor="apartment-radio">
          <input
            type="radio"
            id="apartment-radio"
            name="type"
            value="apartment"
            onChange={ onChange }
            required
          />
            Apartment
        </label>
      </section>
    )
  }
}

export default Type;