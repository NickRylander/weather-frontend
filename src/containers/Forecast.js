import React, { Component } from 'react';
import { fetchWeather } from '../actions/fetchInfo'
import { addFavorite } from '../actions/fetchInfo';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Forecast extends Component {


  renderWeather() {
    if(this.props.city.name == null){
      return "loading"
    }else{
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
        <input 
        onClick={
          () => {this.props.addFavorite(this.props.city.name)
          this.props.history.push('/favorite')}
        }
        type="submit"
        value="Save City"/>
        <Link to='/'>Home</Link> 
      </div>
      )
    }
  }

  render() {
    return (
      <>
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