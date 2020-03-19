import React from 'react';
import Form from '../Form/Form';

class App extends React.Component {
  state = {
    userName: '',
    userPassword: '',
    userEmail: '',
    userAccept: false,
    send: false,

    errors: {
      name: false,
      pass: false,
      email: false,
      accept: false,
    },
  }

  handleSubmitForm = (e) => {
    e.preventDefault();

    const validationCheck = this.validationForm();

    if (validationCheck.validation) {
      console.log('dziala');

      this.setState({
        userName: '',
        userPassword: '',
        userEmail: '',
        userAccept: false,
        send: true,

        errors: {
          name: false,
          pass: false,
          email: false,
          accept: false,
        },
      })
      console.log('wyslano');

    } else {
      this.setState({
        errors: {
          name: !validationCheck.name,
          pass: !validationCheck.pass,
          email: !validationCheck.email,
          accept: !validationCheck.accept,
        },
      })
    }
  }

  validationForm = () => {
    let name = false;
    let pass = false;
    let email = false;
    let accept = false;
    let validation = false;
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (this.state.userName.length > 6 &&
      this.state.userName.indexOf(' ') === -1) {
      name = true;
    };
    if (reg.test(this.state.userEmail)) {
      email = true;
    };
    if (this.state.userPassword.length > 6) {
      pass = true;
    };
    if (this.state.userAccept) {
      accept = true;
    };
    if (name && pass && email && accept) {
      validation = true;
    };

    return ({
      name,
      pass,
      email,
      accept,
      validation
    })

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

  componentDidUpdate() {
    if (this.state.send === true) {
      setTimeout(() => this.setState({
        send: false
      }), 3000)
    }
  }

  render() {
    return (
      <Form
        name={this.state.userName}
        password={this.state.userPassword}
        email={this.state.userEmail}
        accept={this.state.userAccept}
        send={this.state.send}
        change={this.handleInputChange}
        submit={this.handleSubmitForm}
        errors={this.state.errors}
      />
    );
  }
}

export default App;
