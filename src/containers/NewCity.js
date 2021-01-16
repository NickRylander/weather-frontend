import React, { Component } from 'react';
// import rootReducer from '../reducers/citiesReducer';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchInfo';

class NewCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    // componentDidMount(){
    //     this.props.fetchWeather()
    //   }
  
    handleChange = event => {
		this.setState({
			name: event.target.value
        });
        // console.log(this.state)
    };
    
    handleSubmit = event => {
		event.preventDefault();
		this.props.fetchWeather(this.state.name);
	};

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>City Name: </label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                    <input type="submit" />
                </form>
                {/* <p>{this.state.name}</p> */}
            </div>
        );
    }
}

export default connect(null, { fetchWeather })(NewCity);
