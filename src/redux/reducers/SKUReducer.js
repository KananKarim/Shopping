import { SKUTypes } from "../types/SKUTypes"

const initialState = {
    SKU: null,
}

export const SKUReducer = (state = initialState, action) => {
    switch (action.type) {
        case SKUTypes.SET_ART_NUM:
            return { ...state, SKU: action.payload.SKU }

        default:
            return state;
    }
}