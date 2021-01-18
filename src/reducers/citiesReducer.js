// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//     city: setCity
//   });
const defaultProps = {
    name: null,
    temp: null,
    temp_max: null,
    temp_min: null,
    desc: null,
    icon: null,
    main: null
}
// function setCity
export default (state = defaultProps, action) => {
    
    switch(action.type) {
        case "SET_CITY":
            // debugger
            return {
                ...state,
                name: action.payload.name,
                temp: action.payload.main.temp,
                temp_max: action.payload.main.temp_max,
                temp_min: action.payload.main.temp_min,
                desc: action.payload.weather[0].description,
                icon: action.payload.weather[0].icon,
                main: action.payload.weather[0].main
            }
        default:
            return state
    }
}

// export default setCity;