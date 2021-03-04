import React from 'react';
import './App.css';
import Form from './components/Form';
import Submit from './components/Submit';
import Reset from './components/Reset';
import FilledInformation from './components/FilledInformation';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  type: '',
  summary: '',
  position: '',
  description: '',
  submittedInfo: false
};

class App extends React.Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.generateInfo = this.generateInfo.bind(this);

    this.state = INITIAL_STATE
  }

  handleChanges({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address' && value.match(/\W/)) value = value.replaceAll(/\W/g, '');

    this.setState({ [name]: value });
  };

  handleBlur({ target }) {
    let { name, value } = target;
    this.setState(value.match(/\d/) ? { [name]: '' } : { [name]: value });
  };

  generateInfo(event) {
    event.preventDefault();
    this.setState({ submittedInfo: true });
  }

  resetInfo = () => {
    this.setState(INITIAL_STATE);
  }

  render() {
    const { submittedInfo } = this.state;

    return (
      <main id="main-content">
        <Form
          initialState={ this.state }
          handleChanges={ this.handleChanges }
          handleBlur={ this.handleBlur }
        />
        <Submit
          onClick={ this.generateInfo }
        />
        <Reset
          onClick={ this.resetInfo }
        />
        { submittedInfo && <FilledInformation currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;
