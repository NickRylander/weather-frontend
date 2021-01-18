import { combineReducers } from "redux";

const rootReducer = combineReducers({
    city: setCity
  });

function setCity(state = {}, action) {
    switch(action.type) {
        case "SET_CITY":
            // debugger
            return {
                ...state,
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

export default rootReducer;