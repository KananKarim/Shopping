import { favoritesTypes } from "../types/favoritesTypes";

export function setFavorite(favorites, product) {
    if (favorites.find(favorite => favorite.SKU === product.SKU)) {
        const newFavorites = favorites.filter(item => item.SKU !== product.SKU)

        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        return dispatch => dispatch(setFavoritesAction(newFavorites))
    } else {
        const newFavorites = [...favorites, product]

        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        return dispatch => dispatch(setFavoritesAction(newFavorites))
    }
}

export function setFavoritesAction(payload) {
    return {
        type: favoritesTypes.SET_FAVORITES,
        payload
    }
}