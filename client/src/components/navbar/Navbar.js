import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav d-flex justify-content-between'>
      <Link to='/' className='nav-item'>
        Home
      </Link>
      <div>
        <Link to='/dashboard' className='nav-item'>
          Dashboard
        </Link>
        <Link to='/register' className='nav-item'>
          Register
        </Link>
        <Link to='/login' className='nav-item'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
