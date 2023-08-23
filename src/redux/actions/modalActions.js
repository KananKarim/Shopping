import { modalTypes } from "../types/modalTypes";

export function setModalTypeAction(modal) {
    return {
        type: modalTypes.SHOW_MODAL,
        payload: { modal }
    }
}

