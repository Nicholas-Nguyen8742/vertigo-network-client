import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
// import Portal from './pages/Portal/Portal';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ProfileReviewsPage from './pages/ProfileReviewsPage/ProfileReviewsPage';
import MissionsPage from './pages/MissionsPage/MissionsPage';
import MissionsAllPage from './pages/MissionsAllPage/MissionsAllPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LoginPage} />
        {/* <Route path="/portal/:id" exact component={PilotPortal} /> */}

        <Route path="/dashboard/:id" exact component={DashboardPage} />
        <Route path="/dashboard/:id/profile" exact component={ProfilePage} />
        <Route path="/dashboard/:id/profile/reviews" exact component={ProfileReviewsPage} />
        <Route path="/dashboard/:id/missions" exact component={MissionsPage} />
        <Route path="/dashboard/:id/missions/all" exact component={MissionsAllPage} />
      </Switch>
    </BrowserRouter>
  );
}

