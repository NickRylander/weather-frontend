import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/fetchInfo';

class NewCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }
  
    handleChange = event => {
		this.setState({
			city: event.target.value
        });
    };
    
    handleSubmit = event => {
		event.preventDefault();
        this.props.fetchWeather(this.state.city);
        this.props.history.push('/forecast');
	};

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>City Name: </label>
                    <input type="text" name="city" onChange={this.handleChange} value={this.state.city} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default connect(null, { fetchWeather })(withRouter(NewCity));
