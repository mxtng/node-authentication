import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  const ComposedComponent = ({ isAuthenticated, history }) => {
    useEffect(() => {
      if (!isAuthenticated) {
        history.push('/login');
      }
      // eslint-disable-next-line
    }, [isAuthenticated]);

    return <WrappedComponent />;
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authenticated,
  });

  return connect(mapStateToProps)(ComposedComponent);
};
