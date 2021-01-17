import { combineReducers } from "redux";

const rootReducer = combineReducers({
    city: setCity
  });

function setCity(state = [], action) {
    switch(action.type) {
        case "SET_CITY":
            // debugger
            return [...state, action.payload]
        default:
            return state
    }
}

export default rootReducer;