import React, { Component } from 'react';
// import NewCity from './NewCity'
import { connect } from 'react-redux'

class Forecast extends Component {
  constructor(props){
    super(props)
    debugger
  }
  
  render() {
    return (
      <div>
        <p>Forecast:</p>
      </div>
    );
  }
}

export default connect()(Forecast);
// export default Forecast;