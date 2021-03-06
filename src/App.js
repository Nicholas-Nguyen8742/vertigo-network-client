import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// import HomePage from './pages/HomePage/HomePage';
// import Portal from './pages/Portal/Portal';

// Auth Routes
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';

// Pilot Route Pages
import DashboardPage from './pages/DashboardPage/DashboardPage';
// Pilot Profile Page Route
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProfilePageEditPortfolioPage from './pages/ProfilePageEditPortfolioPage/ProfilePageEditPortfolioPage';
import ProfilePageAddPortfolioPage from './pages/ProfilePageAddPortfolioPage/ProfilePageAddPortfolioPage';

import ProfileReviewsPage from './pages/ProfileReviewsPage/ProfileReviewsPage';
import ProfilePastMissionsPage from './pages/ProfilePastMissionsPage/ProfilePastMissionsPage';
import MissionsPage from './pages/MissionsPage/MissionsPage';
import MissionsAllPage from './pages/MissionsAllPage/MissionsAllPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route path="/" exact component={HomePage} /> */}
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LoginPage} />
        {/* <Route path="/portal/:id" exact component={PilotPortal} /> */}

        {/* Pilot Dashboard Route */}
        <Route path="/dashboard/:id" exact component={DashboardPage} />
        <Route path="/dashboard/:id/portfolio" exact component={ProfilePage} />
        <Route path="/dashboard/:id/portfolio/add" exact component={ProfilePageAddPortfolioPage} />
        <Route path="/dashboard/:id/portfolio/:portfolioID/edit" exact component={ProfilePageEditPortfolioPage} />
        <Route path="/dashboard/:id/portfolio/reviews" exact component={ProfileReviewsPage} />
        <Route path="/dashboard/:id/portfolio/past-missions" exact component={ProfilePastMissionsPage} />
        <Route path="/dashboard/:id/missions" exact component={MissionsPage} />
        <Route path="/dashboard/:id/missions/all" exact component={MissionsAllPage} />
      </Switch>
    </BrowserRouter>
  );
}

