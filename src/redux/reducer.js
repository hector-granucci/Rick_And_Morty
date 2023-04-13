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
            allCharacters:[...state.allCharacters, action.payload]
        }
        case REMOVE_FAV: 
        let remove = state.myFavorites.filter(char => char.id !== action.payload)
        return {
            ...state,
            myFavorites: remove
        }
        case FILTER:
            const filter= state.allCharacters.filter(character => character.gender === action.payload)
        return {
            ...state,
            myFavorites: 
            action.payload === "allCharacters"
            ? [...state.allCharacters]
            :filter
        }
        case ORDER:
            const allCharactersCopy =[...state.allCharacters]
                return {
                    ...state,
                    myFavorites: 
                    action.payload === "A"
                    ? allCharactersCopy.sort((a, b) => a.id - b.id)
                    : allCharactersCopy.sort((a, b) => b.id - a.id)
                }

            

        default: return {...state}
    }
}

export default reducer;