import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/missions">Missions</Link></li>
      <li><Link to="/impact">Social Impact</Link></li>
    </ul>
  </nav>
);

export default Navigation;
