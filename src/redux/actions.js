import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./type"

export const addfav = (character) => {
    return { 
        type: ADD_FAV, 
        payload: character
    }
}

export const removefav = (id) => {
    return { 
        type: REMOVE_FAV,
         payload: id
        }
}


export const filterCards = (gender) => {
    return { 
        type: FILTER,
         payload: gender
        }
}

export const orderCards = (orden) => {
    return { 
        type: ORDER,
         payload: orden
        }
}


