import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home';

// import './App.css';

class App extends Component {

  constructor() {
    super();

    // this.state = {
    // id: 0,
    //  pets: []
    // }
  }

  // addPet = pet => {
  //   pet.id = this.state.id + 1;

  //   this.setState({
  //   pets: [...this.state.pets, pet],
  //   id: this.state.id + 1
  //   });
  // }

  render() {
    return (
      <Router>
      {/* <NavBar /> */}
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/five-day" component={WeatherFive} />
            <Route exact path="/today/:id" render={ props => <WeatherDay {...props} cities={ this.state.cities } />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
