import React from 'react';
import protectedRoute from '../../protectedRoute';

const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default protectedRoute(Dashboard);
