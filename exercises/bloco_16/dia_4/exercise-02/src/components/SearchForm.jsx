import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { thunkCharacter } from '../actions/characterActions';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  
    this.state = {
      inputText: '',
      characterSearched: '',
    };
  };

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
      characterSearched: '',
    })
  };

  submitName(e) {
    e.preventDefault();
    const { inputText } = this.state;
    const { importedThunk } = this.props;
  
    this.setState({
      inputText: '',
      characterSearched: inputText,
    });
  
    importedThunk(inputText);
  };

  render() {
    const { inputText } = this.state;
  
    return (
      <div>
        <form onSubmit={this.submitName}>
          <h1>Type a character below:</h1>
          <input onChange={this.handleChange} 
          placeholder="Enter Character"
          value={inputText}
          />
          <div className="buttonSection">
            <button className="submitButton" type="submit" >Search!</button>
          </div>
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  importedThunk: (name) => dispatch(thunkCharacter(name))
});

SearchForm.propTypes = {
  importedThunk: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SearchForm);
