import React, { Component } from 'react';

class Favorites extends Component {

    state = []

    componentDidMount() {
        fetch('http://localhost:3000/cities')
            .then(resp => resp.json())
            .then(cities => {
                cities.map((city) => {
                    this.setState([
                        {city_name: city.city_name}
                    ])
                })
            })
        }

    renderFavs() {
        if(this.state === []){
            return "loading"
        }else{
            return(
                <p>{this.state[0].city_name}</p>
            )
        }
    }

    render() {
        debugger
        return (
            <div>
                {this.renderFavs()}
            </div>
        );
    }
}

export default Favorites;