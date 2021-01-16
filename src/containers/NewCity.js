import React, { Component } from 'react';
import { addCity } from '../reducers/citiesReducer';
import { connect } from 'react-redux';

class NewCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
  
    handleChange = event => {
		this.setState({
			name: event.target.value
        });
        console.log(this.state)
    };
    
    handleSubmit = event => {
		event.preventDefault();
		this.props.addCity(this.state);
	};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>City Name: </label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                <input type="submit" />
            </form>
        );
    }
}

export default connect(null, { addCity })(NewCity);
