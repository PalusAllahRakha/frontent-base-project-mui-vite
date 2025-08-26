import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { NotFoundWrapper, Header } from './style';
import NotFoundImage from '../../assets/images/404-page.png';
import logo from '../../assets/images/logo.svg';
import { isAuthenticated } from '../../utils/auth';

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackToDashboard = () => {
    if (isAuthenticated()) {
      navigate('/');
    } else {
      navigate('/login');
    }
  };
  const buttonText = isAuthenticated() ? 'Back To Dashboard' : 'Back To Login';
  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <NotFoundWrapper>
        <img src={NotFoundImage} alt="not found" />
        <Button variant="outlined" onClick={handleBackToDashboard}>{buttonText}</Button>
      </NotFoundWrapper>
    </>
  );
};

export default NotFound;
