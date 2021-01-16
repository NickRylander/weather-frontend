export default (state = [], action) => {
    switch(action.type){
        case "SET_CITY":
            return [...action.payload]
        case "ADD_CITY":
            return [...state, action.payload]
        case "REMOVE_CITY":
            let newCities = state.filter(city => city.id !== action.payload)
            return [...newCities]
        default:
            return state
    }
}