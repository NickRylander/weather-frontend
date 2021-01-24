import React, { Component } from 'react';
import { addFavorite, fetchWeather } from '../actions/fetchInfo'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import '../styling/App.css'
import Headers from './Headers'
import Loading from './Loading'

class Forecast extends Component {

  renderWeather() {
    if(this.props.city.icon == null){
      return <Loading />
    }else{

      const img = `http://openweathermap.org/img/wn/${this.props.city.icon}@2x.png`

      return(
        <div className="forecast">
          <h3 style={{textShadow: "2px 2px #1565c0"}}>{this.props.city.name}</h3>

          <img src={img}></img>

          {/* <p>{this.props.city.main}</p> */}

          <h4><u>Temperature</u></h4>
            <p>{Math.round((this.props.city.temp-273.15)* 9/5 + 32)}℉</p>

          <h4><u>High</u></h4>
            <p>{Math.round((this.props.city.temp_max-273.15)* 9/5 + 32)}℉</p>

          <h4><u>Low</u></h4>
            <p>{Math.round((this.props.city.temp_min-273.15)* 9/5 + 32)}℉</p>

          <h4><u>Description</u></h4>
            <p>{this.props.city.desc}</p>

          <input 
          onClick={
            () => {this.props.addFavorite(this.props.city.name)
            this.props.history.push('/favorite')}
          }
          type="submit"
          className="btn red lighten-1"
          value="Save City"/>
          <br/><br/>
        </div>
      )
    }
  }

  render() {
    return (
      <>
      <Headers text="Forecast"/> 
      {this.renderWeather()}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state
  }
}

export default connect(mapStateToProps, {fetchWeather, addFavorite})(withRouter(Forecast));