import React, { Component } from 'react'
import SearchWeather from './SearchWeather'

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>City Weather!</h1>
        <h3>Type your city below to get the weather!</h3>
        <SearchWeather />
      </div>
    )
  }
}

export default Home