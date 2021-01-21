import React, { Component } from 'react';
import Forecast from './Forecast'
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchInfo';
import '../styling/App.css'
import Headers from './Headers'

class Favorites extends Component {

    renderFavs = () => {
            return(
                <div className="favorite">
                    <Forecast />
                </div>
            )
        }

    render() {

        return (
            <>
                <Headers text="Your Favorite City"/>
                {this.renderFavs()}
            </>
        );
    }
}

export default connect(null, { fetchWeather })(Favorites);