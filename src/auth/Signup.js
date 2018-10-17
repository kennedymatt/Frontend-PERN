import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import FormErrors from './FormErrors';

const Title = styled.h4`
font-family: 'Raleway', sans-serif;
`;

class Signup extends Component{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            formErrors: { username: '', password: '' },
            usernameValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        //POST - fetch
        fetch("http://localhost:3000/jediApp/user", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken(data.sessionToken))
        event.preventDefault();
    }

    validateSignUp = (event) => {
        this.setState({
            errorMessage: 'Fields must not be empty'
        })
        event.preventDefault();
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'username':
            usernameValid = value.length >= 6;
            fieldValidationErrors.username = usernameValid ? '' : ' is too short';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        usernameValid: usernameValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
      }

    render() {
        return(
            <div>
                <Title>Signup</Title>
                <div className='panel panel-default'>
                    <FormErrors formErrors={this.state.formErrors} />
                        </div>
                            <Form onSubmit={this.handleSubmit} autoComplete="off" >
                                <FormGroup>
                                    <Input name="username" type="text" placeholder="enter username" onChange={this.handleChange} onChange={(event) => this.handleUserInput(event)} />
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" name="password" placeholder="enter password" onChange={this.handleChange} onChange={(event) => this.handleUserInput(event)} />
                                 </FormGroup >
                                        <Button type="submit" outline color="secondary">Submit</Button>
                            </Form>
            </div>
        )
    }
}

export default Signup;