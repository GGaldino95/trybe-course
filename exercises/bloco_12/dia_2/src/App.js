import React from 'react';
import './App.css';
import Form from './components/Form';
import Submit from './components/Submit';
import FilledInformation from './components/FilledInformation';

class App extends React.Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.generateInfo = this.generateInfo.bind(this);

    this.state = {
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

  render() {
    const { submittedInfo } = this.state;

    return (
      <main id="main-content">
        <Form
          initialState={this.state}
          handleChanges={this.handleChanges}
          handleBlur={this.handleBlur}
        />
        <Submit
          onClick={this.generateInfo}
        />
        { submittedInfo && <FilledInformation currentState={ this.state } /> }
      </main>
    );
  }
}

export default App;
