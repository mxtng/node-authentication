import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Route path='/' exact component={Root} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </BrowserRouter>
    </div>
  );
};

export default App;
