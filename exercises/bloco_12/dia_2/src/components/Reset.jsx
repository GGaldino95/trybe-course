import React from 'react';

class Reset extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <input type="reset" onClick={ onClick } />
    );
  }
}

export default Reset;