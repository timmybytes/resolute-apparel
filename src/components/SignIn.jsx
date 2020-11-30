import React from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { signInWithGoogle } from '../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            aria-label={'email'}
            aria-required='true'
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            aria-label={'password'}
            aria-required='true'
            value={this.state.email}
            label='password'
            onChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
