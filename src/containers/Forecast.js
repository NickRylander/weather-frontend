import React, { Component } from 'react';
// import { connect } from 'react-redux'

class Forecast extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        {this.state}
      </div>
    );
  }
}

// export default connect()(Forecast);
export default Forecast;