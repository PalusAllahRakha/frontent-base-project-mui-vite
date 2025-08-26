import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <p>auth</p>
      <div className="auth-container">{children}</div>
    </div>
  );
};

export default AuthLayout;
