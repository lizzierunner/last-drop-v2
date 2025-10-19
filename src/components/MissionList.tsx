import React from 'react';
import { Link } from 'react-router-dom';

const missions = [
  'The Runner’s Code',
  'Dry Heat',
  'Echo Wells',
  'Black Gold',
  'Mirage Protocol',
  'Pipeline Ghosts',
  'The Last Drop',
];

const MissionList: React.FC = () => (
  <div className="mission-list">
    <h2>Season One: The Wasteland Circuit</h2>
    <ul>
      {missions.map((mission, idx) => (
        <li key={mission}>
          <Link to={`/missions/${idx + 1}`}>{mission}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MissionList;
