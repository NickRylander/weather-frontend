import React, { Component } from 'react';
// import NewCity from './NewCity'
import { fetchWeather } from '../actions/fetchInfo';
import { connect } from 'react-redux'

class Forecast extends Component {


  render() {
    // console.log(this.props.city)
    return (
      <div>
        
        <p>Forecast: </p>
        <p>{this.props.city.temp}</p>
        <p>{this.props.city.temp_max}</p>
        <p>{this.props.city.temp_min}</p>
        <p>{this.props.city.desc}</p>
        <p>{this.props.city.icon}</p>
        <p>{this.props.city.main}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    city: state.city
  }
}

export default connect(mapStateToProps, {fetchWeather})(Forecast);
// export default Forecast;