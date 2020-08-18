import React from 'react';
import { About } from './About';
import { Login } from './Login';
import { HomeScreen } from './HomeScreen';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from './Navbar';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={HomeScreen} />
          <Redirect component={HomeScreen} />
        </Switch>
        </div>
      </div>
    </Router>
  );
};
