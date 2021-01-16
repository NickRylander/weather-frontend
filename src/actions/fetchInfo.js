export const fetchWeather = name => {
    return(dispatch) => {
        return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${name}`, {
	        method: "GET",
	        headers: {
		        "x-rapidapi-key": WEATHER_KEY,
		        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	        }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(name => {
        //     dispatch({type: "SET_CITY", payload: name})
        // })
        .catch(err => {
            console.error(err);
        })
    }
}