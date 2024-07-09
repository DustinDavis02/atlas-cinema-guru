import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard-container">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <div className="dashboard-content">
        <SideBar />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
