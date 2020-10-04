import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { userLogout } from '../../actions';
import './Navbar.css';

const Navbar = ({ isAuthenticated, userLogout }) => {
  const onLogoutClick = () => {
    userLogout(() => <Redirect to='/' />);
  };

  return (
    <div className='nav d-flex justify-content-between'>
      <Link to='/' className='nav-item'>
        Home
      </Link>
      <div>
        <Link to='/dashboard' className='nav-item'>
          Dashboard
        </Link>
        {isAuthenticated ? (
          <button onClick={onLogoutClick} className='nav-item'>
            Logout
          </button>
        ) : (
          <Fragment>
            <Link to='/register' className='nav-item'>
              Register
            </Link>
            <Link to='/login' className='nav-item'>
              Login
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.authenticated,
});

export default connect(mapStateToProps, { userLogout })(Navbar);
