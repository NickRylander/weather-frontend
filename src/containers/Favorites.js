import React, { Component } from 'react';
import Forecast from './Forecast'
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchInfo';

class Favorites extends Component {

    renderFavs = () => {
            return(
                <div>
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