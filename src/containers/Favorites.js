import React, { Component } from 'react';
import Forecast from './Forecast'
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchInfo';
import '../styling/App.css'

class Favorites extends Component {

    renderFavs = () => {
            return(
                <div className="favorite">
                    <h1 style={{textAlign: "center"}}>Your Favorite City</h1>
                    <Forecast />
                </div>
            )
        }

    render() {

        return (
            <>
                {this.renderFavs()}
            </>
        );
    }
}

export default connect(null, { fetchWeather })(Favorites);