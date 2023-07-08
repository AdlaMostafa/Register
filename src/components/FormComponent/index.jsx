import React from 'react';
import ButtonComponent from '../ButtonComponent';
import View from '../../Images/eye.png'
import Hide from '../../Images/Hide.png'

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      phone: '',
      password: '',
      showPassword: false, // Track if the password is visible or hidden
    };
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
  }

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { password, userName, email, phone } = this.state;

    // Check if all fields are completed
    if (!password || !userName || !email || !phone) {
      this.setState({ error: 'Please complete all fields' });
      return;
    }
    // Clear error state if validation passes
    this.setState({ error: '' });
  };

  render() {
    const { userName, email, phone, password, error } = this.state;

    return (
      <form action='' onSubmit={this.handleFormSubmit}>
        <div className='NameDev'>
          <label htmlFor='name'>Your Name</label>
          <input
            required
            type='text'
            id='name'
            placeholder='Write your name'
            value={userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div className='EmailDev'>
          <label htmlFor='email'>Your Email</label>
          <input
            required
            type='email'
            id='email'
            placeholder='Write your email'
            value={email}
            onChange={this.handleEmailChange}
          />
        </div>

        <div className='PhoneDev'>
          <label htmlFor='phone'>Your Phone Number</label>
          <input
            required
            type='number'
            id='phone'
            placeholder='Write your phone number'
            value={phone}
            onChange={this.handlePhoneChange}
          />
        </div>
        <div className='PassWordDev'>
          <label htmlFor='password'>Your Password</label>
          <input
            required
            type={this.state.showPassword ? 'text' : 'password'}
            id='password'
            placeholder='Write your password'
            value={password}
            onChange={this.handlePasswordChange}
          />
          <img
              src={this.state.showPassword ? Hide : View}
              alt={this.state.showPassword ? 'Hide' : 'View'}
              className='password-toggle'
              onClick={this.togglePasswordVisibility}
            />
        </div>
        
        <div className='SubButt'>
          <ButtonComponent text='Login' type='submit' /> {/* Use ButtonComponent */}
        </div>
        {error && <p className='Error' style={{ color: 'red', marginLeft: '-2px' }}>{error}</p>}
      </form>
    );
  }
}

export default FormComponent;
