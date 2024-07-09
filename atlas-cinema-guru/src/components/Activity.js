import React from 'react';
import './components.css';

const Activity = ({ activity }) => {
  return (
    <li className="activity">
      <p>{activity.username} {activity.activityType} {activity.title}</p>
    </li>
  );
};

export default Activity;