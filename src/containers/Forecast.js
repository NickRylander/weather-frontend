import React, { Component } from 'react';
import { addFavorite, fetchWeather } from '../actions/fetchInfo'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import '../styling/App.css'

class Forecast extends Component {

  renderWeather() {
    if(this.props.city.icon == null){
      return "LOADING"
    }else{

      const img = `http://openweathermap.org/img/wn/${this.props.city.icon}@2x.png`

      return(
        <div className="forecast">
          <h2>{this.props.city.name}</h2>

          <img src={img}></img>

          <p>{this.props.city.main}</p>

          <h3><u>Temperature</u></h3>
            <p>{Math.round((this.props.city.temp-273.15)* 9/5 + 32)}</p>

          <h3><u>High</u></h3>
            <p>{Math.round((this.props.city.temp_max-273.15)* 9/5 + 32)}</p>

          <h3><u>Low</u></h3>
            <p>{Math.round((this.props.city.temp_min-273.15)* 9/5 + 32)}</p>

          <h3><u>Description</u></h3>
            <p>{this.props.city.desc}</p>

          <input 
          onClick={
            () => {this.props.addFavorite(this.props.city.name)
            this.props.history.push('/favorite')}
          }
          type="submit"
          value="Save City"/>
          <br/><br/>
          <Link to='/'>Home</Link> 
        </div>
      )
    }
  }

  render() {
    return (
      <>
      <h1 style={{textAlign: "center"}}>Forecast</h1>
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