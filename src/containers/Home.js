import React, { Component } from 'react'
import NewCity from './NewCity'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getFavorite, fetchWeather } from '../actions/fetchInfo'
import '../styling/App.css'

export class Home extends Component {

  componentDidMount(){
    this.props.getFavorite()
  }

  handleClick = () => {
    this.props.fetchWeather(this.props.city.name);
  };
  
  render() {
    return (
      <div className="home">
        <h1>City Weather!</h1>
        <h4>Type your city below to get the weather!</h4>
        <NewCity />
        <h4>Your Favorite City!</h4>
        <Link to='/favorite' className="btn red lighten-1" onClick={this.handleClick}>{this.props.city.name}</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    city: state
  }
}

export default connect(mapStateToProps, { getFavorite, fetchWeather })(Home);