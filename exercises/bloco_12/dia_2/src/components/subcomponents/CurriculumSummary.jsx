import React from 'react';

class CurriculumSummary extends React.Component {
  render() {
      const { onChange } = this.props;

    return (
        <label htmlFor="summary-input">
        Curriculum Summary: <br />
        <textarea
          id="summary-input"
          name="summary"
          onChange={ onChange }
          maxLength="1000"
          required
        />
      </label>
    )
  }
}

export default CurriculumSummary;