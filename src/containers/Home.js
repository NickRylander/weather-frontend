import React, { Component } from 'react'
import Favorites from './Favorites'
import NewCity from './NewCity'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getFavorite, fetchWeather } from '../actions/fetchInfo'
// import { fetchWeather } from '../actions/fetchInfo';

export class Home extends Component {

  componentDidMount(){
    this.props.getFavorite()
  }

  handleClick = () => {
    // event.preventDefault();
    // debugger
        this.props.fetchWeather(this.props.city.name);
        // this.props.history.push('/forecast');
  };
  
  render() {
    // debugger
    return (
      <div>
        <h1>City Weather!</h1>
        <h3>Type your city below to get the weather!</h3>
        <NewCity />
        <h3>Your Favorite City!</h3>
        <Link to='/favorite' onClick={this.handleClick}>{this.props.city.name}</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    city: state
  }
}

export default connect(mapStateToProps, { getFavorite, fetchWeather })(Home);