import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MissionList from './components/MissionList';
import MissionPage from './components/MissionPage';
import SocialImpact from './components/SocialImpact';

const AppRoutes: React.FC = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<MissionList />} />
      <Route path="/missions" element={<MissionList />} />
      <Route path="/missions/:id" element={<MissionPage />} />
      <Route path="/impact" element={<SocialImpact />} />
    </Routes>
  </Router>
);

export default AppRoutes;
