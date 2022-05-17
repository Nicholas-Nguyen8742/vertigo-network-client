import './styles/App.scss';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import PilotPortal from './pages/PilotPortal/PilotPortal';
import ClientPortal from './pages/ClientPortal/ClientPortal';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/portal/signup" exact component={SignUp} />
        <Route path="/portal" exact component={Login} />
        <Route path="/portal/pilot" exact component={PilotPortal} />
        <Route path="/portal/client" exact component={ClientPortal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
