import React from 'react';

class State extends React.Component {
  render() {
    const { states, onChange } = this.props;

    return (
      <label htmlFor="state-input">
        State:
        <select
          id="state-input"
          name="state"
          onChange={ onChange }
          required
        >
          <option style={{ display: 'none' }} />
          {
            states.map((currentState) => {
              return (
                <option
                  key={ currentState.initials }
                  value={ currentState.initials }
                >
                  { currentState.state }
                </option>
              );
            })
          }
        </select>
        <br />
      </label>
    )
  }
}

export default State;