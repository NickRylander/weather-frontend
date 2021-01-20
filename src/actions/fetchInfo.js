const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = (name) => {
    return(dispatch) => {
        return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${name}`, {
	        method: "GET",
	        headers: {
		        "x-rapidapi-key": API_KEY,
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	        }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({type: "SET_CITY", payload: data})
        })
        .catch(err => {
            console.error(err);
        })
    }
}

export const addFavorite = name => {
    return() => {
        return fetch('http://localhost:3000/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({city:{
                city_name: name
            }})
        })
    }
}

export const getFavorite = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/cities')
          .then(resp => resp.json())
          .then(data => {
            dispatch({type: "SET_NAME", payload: [data[data.length-1]][0].city_name})
          })
      }
    }