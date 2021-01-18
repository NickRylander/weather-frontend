import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home';
import Forecast from './containers/Forecast'
import Favorites from './containers/Favorites'

// import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
      {/* <NavBar /> */}
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/forecast" component={ Forecast } />
            <Route exact path="/favorites" component={ Favorites } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
