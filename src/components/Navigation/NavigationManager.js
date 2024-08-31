import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HomePage from '../HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';
// import { useTheme } from '@emotion/react';

const NavigationManager = () => {
//   const theme = useTheme()   
  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} /> {/* Default route */}
      </Routes>
      <BottomNavigation
          showLabels
          sx={{ width: '100%', position: 'fixed', bottom: 0 }}
          value={value} onChange={handleChange}
        >
        <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            component={Link}
            to="/home"
        />
      </BottomNavigation>
      </div>
    </Router>
  );
};

export default NavigationManager;