import React, { Component } from 'react';
import { fetchWeather } from '../actions/fetchInfo';
import { connect } from 'react-redux'

class Forecast extends Component {

  renderWeather() {
    if(this.props.city.name == null){
      // debugger
      return "loading"
    }else{
      // debugger
      const img = `http://openweathermap.org/img/wn/${this.props.city.icon}@2x.png`
      return(
        <div>
        <p>Forecast: </p>
        <img src={img}></img>
        <p>{this.props.city.name}</p>
        <p>{this.props.city.temp}</p>
        <p>{this.props.city.temp_max}</p>
        <p>{this.props.city.temp_min}</p>
        <p>{this.props.city.desc}</p>
        <p>{this.props.city.main}</p>
      </div>
      )
    }
  }

  render() {
    // debugger
    return (
      <>
      {this.renderWeather()}
      </>
    );
  }
}

const mapStateToProps = state => {
  // debugger
  return {
    city: state
  }
}

export default connect(mapStateToProps, {fetchWeather})(Forecast);