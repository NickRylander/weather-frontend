export default (state = [], action) => {
    switch(action.type){
        // case "SET_PETS":
        //     return [...action.payload]
        case "ADD_CITY":
            return [...state, action.payload]
        case "REMOVE_CITY":
            let newCities = state.filter(pet => city.id !== action.payload)
            return [...newCities]
        // case "EDIT_PET":
        //     // do something
        default:
            return state
    }
}