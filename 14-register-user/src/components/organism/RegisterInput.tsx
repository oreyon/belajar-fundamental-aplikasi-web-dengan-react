    import React, { type ChangeEvent, type FormEvent } from 'react';
    import PropTypes from 'prop-types';
     

    type PropTypes = {
      register: (user: { name: string; email: string; password: string }) => void;
    }

    type StateTypes = {
      name: string;
      email: string;
      password: string;
    }

    class RegisterInput extends React.Component<PropTypes, StateTypes> {
      constructor(props:PropTypes) {
        super(props)
     
        this.state = {
          name: '',
          email: '',
          password: '',
        }
     
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
      }
     
      onNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState(() => {
          return {
            name: event.target.value,
          };
        });
      }
     
      onEmailChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState(() => {
          return {
            email: event.target.value
          };
        });
      }
     
      onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState(() => {
          return {
            password: event.target.value
          };
        })
      }
     
      onSubmitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
     
        this.props.register({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        });
      }
     
      render() {
        return (
          <form onSubmit={this.onSubmitHandler} className='register-input'>
            <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChange} />
            <input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
            <input type="password" placeholder="Password" autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} />
            <button>Register</button>
          </form>
        )
      }
    }
     
    RegisterInput.propTypes = {
      register: PropTypes.func.isRequired,
    };
     
    export default RegisterInput;