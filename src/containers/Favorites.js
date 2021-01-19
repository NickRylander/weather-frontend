import React, { Component } from 'react';

class Favorites extends Component {

    state;

    componentDidMount() {
        fetch('http://localhost:3000/cities')
            .then(resp => resp.json())
            .then(cities => {
                cities.map((city) => {
                    this.setState([
                        {favorite: city.city_name}
                    ])
                })
            })
        }

    renderFavs = () =>{
        if(this.state === null){
            return "loading"
        }else{
            return(
                <div>
                    <p>{this.state[0].favorite}</p>
                </div>
            )
        }
    }

    render() {
        // debugger
        return (
            <>
                {this.renderFavs()}
            </>
        );
    }
}

export default Favorites;