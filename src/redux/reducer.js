import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './type';



const initialState = {
    myFavorites:[],
    allCharacters:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV: 
        return {
            ...state,
            myFavorites:[...state.allCharacters, action.payload],
            allCharacters:[...state.myFavorites]
        }
        case REMOVE_FAV: 
        let remove = state.myFavorites.filter(char => char.id !== action.payload)
        return {
            ...state,
            myFavorites: remove
        }
        case FILTER:
            let filter= state.allCharacters.filter(char => char.gender !== action.payload)
        return {
            ...state,
            myFavorites: filter
        }
        case ORDER:
            let order= state.allCharacters.short((a, b) => {
                if(action.payload === "A") return a.id - b.id
                if(action.payload === "D") return b.id - a.id
                return {
                    ...state,
                    myFavorites: order

                }

            })

        default: return {...state}
    }
}

export default reducer;