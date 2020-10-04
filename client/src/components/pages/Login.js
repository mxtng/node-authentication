import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChangeHandle = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmitClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='d-flex justify-content-center'>
        <div className='col-lg-6 col-md-8 col-sm-10'>
          <h3>Sign In</h3>
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
            <button>Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
