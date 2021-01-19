import React, { Component } from 'react'
import Favorites from './Favorites'
import NewCity from './NewCity'
import { Link } from 'react-router-dom'

export class Home extends Component {

  render() {
    return (
      <div>
        <h1>City Weather!</h1>
        <h3>Type your city below to get the weather!</h3>
        <NewCity />
        <h3>Your Favorite City!</h3>
        <Link to='/favorites'><Favorites /></Link>
      </div>
    )
  }
}

export default Home;