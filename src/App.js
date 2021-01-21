import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home';
import Forecast from './containers/Forecast'
import Favorites from './containers/Favorites'
import Navbar from './containers/Navbar'
import Logo from './containers/Logo'

// import './App.css';

class App extends Component {

  render() {
    return (
      <>
      <Router>
      <Logo />
      <br/>
      <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/forecast" component={ Forecast } />
            <Route exact path="/favorite" component={ Favorites } />
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
