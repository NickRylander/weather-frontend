const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = name => {
    return(dispatch) => {
        return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${name}`, {
	        method: "GET",
	        headers: {
		        "x-rapidapi-key": API_KEY,
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	        }
        })
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            dispatch({type: "SET_CITY", payload: data})
        })
        .catch(err => {
            console.error(err);
        })
    }
}