import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import axios from 'axios';

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/v1/signup/', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
        this.setState({ email: '', password: '', first_name: '', last_name: '' })

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>Sign Up</h2>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='first_name'
                        type='text'
                        value={this.state.first_name}
                        handleChange={this.handleChange}
                        label='First Name'
                        required
                    />
                    <FormInput
                        name='last_name'
                        type='text'
                        value={this.state.last_name}
                        handleChange={this.handleChange}
                        label='Last Name'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;