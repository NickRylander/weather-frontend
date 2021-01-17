import React, { Component } from 'react';
// import NewCity from './NewCity'
import { fetchWeather } from '../actions/fetchInfo';
import { connect } from 'react-redux'

class Forecast extends Component {
  // constructor(props){
  //   super(props)
  //   debugger
  // }
  componentDidMount(){
    this.props.fetchWeather('Seattle')
  }

  render() {
    return (
      <div>
        <p>Forecast:</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  debugger
  return {
    city: state
  }
}

export default connect(mapStateToProps, {fetchWeather})(Forecast);
// export default Forecast;