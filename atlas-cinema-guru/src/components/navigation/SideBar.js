import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';

const SideBar = () => {
  const [selected, setSelected] = useState('home');
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.get('http://localhost:8000/api/activity', {
        headers: { Authorization: `Bearer ${accessToken}` }
      })
      .then(response => {
        setActivities(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch activities:", error);
      });
    } else {
      console.error("No access token found");
    }
  }, []);

  return (
    <nav className={`sidebar ${small ? 'small' : ''}`}>
      <ul className="navigation">
        <li onClick={() => setPage('home')} className={selected === 'home' ? 'selected' : ''}>
          <i className="icon">🏠</i> Home
        </li>
        <li onClick={() => setPage('favorites')} className={selected === 'favorites' ? 'selected' : ''}>
          <i className="icon">⭐</i> Favorites
        </li>
        <li onClick={() => setPage('watchlater')} className={selected === 'watchlater' ? 'selected' : ''}>
          <i className="icon">🕒</i> Watch Later
        </li>
      </ul>
      {showActivities && (
        <ul className="activities">
          {activities.slice(0, 10).map(activity => (
            <Activity key={activity.id} activity={activity} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
