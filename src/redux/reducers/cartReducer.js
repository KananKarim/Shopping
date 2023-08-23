import { getDataFromLS } from "../../Utils"
import { cartTypes } from "../types/cartTypes"

const initialState = {
    cart: getDataFromLS('cart'),
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartTypes.SET_CART:
            return { ...state, cart: action.payload }

        default:
            return state;
    }
}