import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cities: addCity
  });

function addCity(state = [], action) {
    switch(action.type) {
        case "SET_CITY":
            return [...state, action.name]
        default:
            return state
    }
}

export default rootReducer;