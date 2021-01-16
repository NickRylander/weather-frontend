export const fetchWeather = name => {
    return(dispatch) => {
        return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${name}`, {
	        method: "GET",
	        headers: {
		        "x-rapidapi-key": "75ff178cedmsh512df5781ea2bbap18f364jsnbe044da2036e",
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