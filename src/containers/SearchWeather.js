// Form for searching weather

import React, { Component } from 'react';
// import { connect } from 'react-redux';

class SearchWeather extends Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    handleSubmit = event => {
		event.preventDefault();
		this.props.addTodo(this.state);
	};

	handleChange = event => {
		this.setState({
			name: event.target.value
		});
	};

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>City Name: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.name} />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = dispatch => ({
// 	addCity: formData => dispatch({ type: 'ADD_CITY', payload: formData })
// });

// export default connect(null, mapDispatchToProps)(SearchWeather);

export default SearchWeather;