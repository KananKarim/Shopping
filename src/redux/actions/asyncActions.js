import { setErrorAction, setLoadingAction, addProductsAction } from "./";

export function fetchData(url) {
    return async (dispatch) => {
        try {
            dispatch(setLoadingAction(true))
            const data = await fetch(url).then((res) => res.json())
            dispatch(addProductsAction(data))
            dispatch(setLoadingAction(false))
        } catch (error) {
            dispatch(setLoadingAction(false))
            dispatch(setErrorAction(error))
        }
    }
}