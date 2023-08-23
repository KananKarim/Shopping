import { cartTypes } from "../types/cartTypes";

export function setCart(modalType, SKU, products, cart) {
    return dispatch => {
        const currentProduct = products.find(product => product.SKU === SKU)
        let newCart = []
    
        if (modalType === 'buy') {
            newCart = [...cart, currentProduct]
        } else if (modalType === 'delete') {
            const currentProductIndex = cart.lastIndexOf(cart.find(product => product.SKU === SKU))
            newCart = [...cart.slice(0, currentProductIndex), ...cart.slice(currentProductIndex + 1)]
        }
    
        localStorage.setItem('cart', JSON.stringify(newCart))
        dispatch(setCartAction(newCart))
    }
}

export function makePurchase(customerInfo) {
    return dispatch => {
        console.log(customerInfo);
        console.log(JSON.parse(localStorage.getItem('cart')))
        localStorage.setItem('cart', JSON.stringify([]))
        dispatch(setCartAction([]))
        alert('Thanks')
    }
}

function setCartAction(payload) {
    return {
        type: cartTypes.SET_CART,
        payload
    }
}