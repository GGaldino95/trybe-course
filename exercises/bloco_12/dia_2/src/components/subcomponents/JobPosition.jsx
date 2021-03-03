import React from 'react';

class JobPosition extends React.Component {
  render() {
    const { onChange, onMouseEnter } = this.props;

    return (
      <label htmlFor="position-input">
        Job Position:
        <input
          type="text"
          id="position-input"
          name="position"
          onChange={ onChange }
          onMouseEnter={ onMouseEnter }
          maxLength="40"
          required
        />
      </label>
    )
  }
}

export default JobPosition;