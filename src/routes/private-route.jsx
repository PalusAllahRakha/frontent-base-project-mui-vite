import React from 'react';
import { Navigate, Outlet, Route } from 'react-router-dom';
import MainLayout from '../components/layout/index.jsx';
import SearchTerms from '../pages/search-terms/index.jsx';
import Dashboard from '../pages/work-sheet/index.jsx';
import { isAuthenticated } from '../utils/auth';


const PrivateWrapper = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const PrivateRoutes = [
  <Route key="private" element={<PrivateWrapper />}>
    <Route element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/search-terms" element={<SearchTerms />} />
    </Route>
  </Route>
];
export default PrivateRoutes;
