import React, { type ChangeEvent, type FormEvent } from 'react';
import PropTypes from 'prop-types';

type PropTypes = {
  login: (user: { email: string; password: string }) => void;

}

type StateTypes = {
  email: string;
  password: string;
}

class LoginInput extends React.Component<PropTypes, StateTypes> {
  constructor(props:PropTypes) {
    super(props);
  
    this.state = {
      email: '',
      password: '',
    };
  
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  
  onEmailChangeHandler(event:ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }
  
  onPasswordChangeHandler(event:ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    });
  }
  
  onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='login-input'>
        <input type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChangeHandler} />
        <input type="password" placeholder='Password' value={this.state.password} onChange={this.onPasswordChangeHandler} />
        <button type={"submit"}>Masuk</button>
      </form>
    );
  }
}
  
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
  
export default LoginInput;