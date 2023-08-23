import { SKUTypes } from "../types/SKUTypes";

export function setSKUAction(SKU) {
    return {
        type: SKUTypes.SET_ART_NUM,
        payload: { SKU }
    }
}

