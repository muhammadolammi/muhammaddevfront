import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTokenRefresh } from '../helperfunc/dashboardfuncs';

const Dashboard: React.FC = () => {
  useTokenRefresh();

  return (
    <div>
      <h1>Dashboard</h1>
      <Routes>
        {/* Dashboard subroutes */}
        {/* <Route path="/dashboard/subroute1" element={<Subroute1 />} />
        <Route path="/dashboard/subroute2" element={<Subroute2 />} /> */}
        {/* Add more subroutes as needed */}
      </Routes>
    </div>
  );
};

export default Dashboard;
