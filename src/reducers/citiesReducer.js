import { combineReducers } from "redux";

const rootReducer = combineReducers({
    city: setCity
  });

function setCity(state = [], action) {
    switch(action.type) {
        case "SET_CITY":
            return [...state, action.city]
        default:
            return state
    }
}

export default rootReducer;