import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
// import Portal from './pages/Portal/Portal';
import SignUp from './pages/SignUp/SignUp';
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
        <Route path="/portal" exact component={LoginPage} />
        <Route path="/portal/signup" exact component={SignUp} />
        {/* <Route path="/portal/:id" exact component={PilotPortal} /> */}

        <Route path="/dashboard" exact component={DashboardPage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/profile/reviews" exact component={ProfileReviewsPage} />
        <Route path="/missions" exact component={MissionsPage} />
        <Route path="/missions/all" exact component={MissionsAllPage} />
      </Switch>
    </BrowserRouter>
  );
}

