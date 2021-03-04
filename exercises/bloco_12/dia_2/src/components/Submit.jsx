import React from 'react';

class Submit extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button onClick={ onClick }>Submit</button>
    );
  }
}

export default Submit;