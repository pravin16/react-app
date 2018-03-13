import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import App from './App';
import Login from './Login';

const Menu = () => (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/something">no match</Link>
          </li>
        </ul>
        <hr />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );

  const NoMatch = ({ location }) => (
    <div>
      <h3>
        404 Page Not Found <code>{location.pathname}</code>
      </h3>
    </div>
  );

export default Menu;
  