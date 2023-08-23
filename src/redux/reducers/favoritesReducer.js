import { getDataFromLS } from "../../Utils"
import { favoritesTypes } from "../types/favoritesTypes"

const initialState = {
    favorites: getDataFromLS('favorites'),
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case favoritesTypes.SET_FAVORITES:
            return { ...state, favorites: action.payload }

        default:
            return state;
    }
}