import React from 'react';
import { Route } from 'react-router-dom';

import AuthLayout from '../components/layout/authLayout.jsx';
import Login from '../pages/auth/login/index.jsx';
import Register from '../pages/auth/register/index.jsx';

const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Route>
);

export default AuthRoutes;
