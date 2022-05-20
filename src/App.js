import './styles/App.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
// import Portal from './pages/Portal/Portal';
import SignUp from './pages/SignUp/SignUp';
import PilotPortal from './pages/PilotPortal/PilotPortal';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portal" exact component={PilotPortal} />
        <Route path="/portal/signup" exact component={SignUp} />
        {/* <Route path="/portal/:id" exact component={PilotPortal} /> */}

        <Route path="/dashboard" exact component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
