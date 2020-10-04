import React, { Component } from 'react';

class Register extends Component {
  state = {
    email: '',
    password: '',
    password2: '',
  };

  onChangeHandle = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmitClick = (e) => {
    e.preventDefault();
    const { password, password2 } = this.state;

    if (password !== password2) {
      return console.log('Passwords do not match.');
    }

    console.log(this.state);
  };

  render() {
    const { email, password, password2 } = this.state;
    return (
      <div className='d-flex justify-content-center'>
        <div className='col-lg-6 col-md-8 col-sm-10'>
          <h3>Sign Up</h3>
          <form onSubmit={this.onSubmitClick}>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='text'
                value={email}
                onChange={this.onChangeHandle}
                required
              />
            </div>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={this.onChangeHandle}
                required
              />
            </div>
            <div className='field'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                id='password2'
                type='password'
                value={password2}
                onChange={this.onChangeHandle}
                required
              />
            </div>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
