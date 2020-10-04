import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducer from '../reducers';
import thunk from 'redux-thunk';

import Navbar from './navbar/Navbar';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';

// redux store setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  { auth: { authenticated: localStorage.getItem('token') } },
  composeEnhancers(applyMiddleware(thunk))
);

const App = () => {
  return (
    <div className='container'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Route path='/' exact component={Root} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
