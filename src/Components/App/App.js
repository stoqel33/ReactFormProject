import React from 'react';
import './App.css';
import Form from '../Form/Form';

class App extends React.Component {
  state = {
    userName: '',
    userPassword: '',
    userEmail: '',
    userAccept: false,
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('dziala');

  }

  handleInputChange = (e) => {
    if (e.target.type === 'checkbox') {
      this.setState({
        [e.target.name]: e.target.checked
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

  }

  render() {
    return (
      <Form
        name={this.state.userName}
        password={this.state.userPassword}
        email={this.state.userEmail}
        accept={this.state.userAccept}
        change={this.handleInputChange}
        submit={this.handleSubmitForm}
      />
    );
  }
}

export default App;
