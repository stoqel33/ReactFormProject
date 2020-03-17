import React from 'react';
import './App.css';
import Form from '../Form/Form';

class App extends React.Component {
  state = {
    userName: '',
    userPassword: '',
    userEmail: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <Form
        name={this.state.userName}
        password={this.state.userPassword}
        email={this.state.userEmail}
        change={this.handleInputChange}
      />
    );
  }
}

export default App;
