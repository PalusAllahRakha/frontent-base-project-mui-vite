import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import NotFound from './components/notFound/index.jsx';
import AuthRoutes from './routes/auth-route.jsx';
import PrivateRoutes from './routes/private-route.jsx';
import theme from './utils/theme/index.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {AuthRoutes}
          {PrivateRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
