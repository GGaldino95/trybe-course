import React from 'react';
import CurriculumSummary from './subcomponents/CurriculumSummary';
import JobDescription from './subcomponents/JobDescription';
import JobPosition from './subcomponents/JobPosition';


class ProfessionalInfo extends React.Component {
  render() {
    const { handleChanges, handleMouseEnter } = this.props;
    return (
      <fieldset>
        <legend>Professional Info</legend> <br />
        <CurriculumSummary onChange={ handleChanges }/>
        <JobPosition onChange={ handleChanges } onMouseEnter={ handleMouseEnter } />
        <JobDescription onChange={ handleChanges } />
      </fieldset>
    )
  }
}

export default ProfessionalInfo;