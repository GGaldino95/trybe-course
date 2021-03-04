import React from 'react';

class JobDescription extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="description-input">
        Job Description: <br />
        <textarea
          id="description-input"
          name="description"
          onChange={ onChange }
          maxLength="500"
          required
        />
      </label>
    )
  }
}

export default JobDescription;