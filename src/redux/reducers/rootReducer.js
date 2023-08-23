import { combineReducers } from 'redux';
import { cartReducer as cart } from './cartReducer'
import { favoritesReducer as favorites } from './favoritesReducer'
import { modalReducer as modal } from './modalReducer'
import { SKUReducer as SKU } from './SKUReducer'
import { productsReducer as products } from './productsReducer'
import { loadingReducer as loading } from './loadingReducer'
import { errorReducer as error } from './errorReducer'

export const rootReducer = combineReducers({
    cart,
    favorites,
    modal,
    SKU,
    products,
    loading,
    error
})