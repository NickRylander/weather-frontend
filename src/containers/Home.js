import React, { Component } from 'react'
import Favorites from './Favorites'
import NewCity from './NewCity'

export class Home extends Component {

  render() {
    return (
      <div>
        <h1>City Weather!</h1>
        <h3>Type your city below to get the weather!</h3>
        <NewCity />
        <h3>Your Favorite City!</h3>
        <Favorites />
      </div>
    )
  }
}

export default Home;