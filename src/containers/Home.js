import React, { Component } from 'react'
import NewCity from './NewCity'
import Forecast from './Forecast'

export class Home extends Component {

  render() {
    return (
      <div>
        <h1>City Weather!</h1>
        <h3>Type your city below to get the weather!</h3>
        <NewCity />
        <Forecast />
      </div>
    )
  }
}

export default Home;