import ProductItem from "../ProductItem";
import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AppearanceContext } from "../../context";
import { BrowserRouter } from "react-router-dom";
import { modalTypes } from "../../redux/types/modalTypes";
import '@testing-library/jest-dom/extend-expect';
import { SKUTypes } from "../../redux/types/SKUTypes";


afterEach(cleanup);

const product = {
    name: "Costyum",
    price: 1000,
    imgUrl:
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    SKU: 12143,
    color: "black",
}
const type = 'buy'
const context = 'cardView'

let mockStore = configureStore()
let store;

beforeEach(() => {
    store = mockStore({
        cart: { cart: [] }, favorites: { favorites: [] }, SKU: { SKU: '' }, modal: { modal: '' }, products: { products: [] }
    })
})


test('snapshot ProductItem component', () => {
    const component = renderer.create(
        <Provider store={store}>
            <BrowserRouter >
                <AppearanceContext.Provider value={context}>
                    <ProductItem product={product} type={type} />
                </AppearanceContext.Provider>
            </BrowserRouter>
        </Provider>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders ProductItem component and click buy', () => {
    render(
        <Provider store={store}>
            <BrowserRouter >
                <AppearanceContext.Provider value={context}>
                    <ProductItem product={product} type={type} />
                </AppearanceContext.Provider>
            </BrowserRouter>
        </Provider>
    );

    const button = screen.getByText('Buy')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    const actions = store.getActions()

    expect(actions).toEqual([
        { type: modalTypes.SHOW_MODAL, payload: { modal: type } },
        { type: SKUTypes.SET_ART_NUM, payload: { SKU: product.SKU } }
    ])
});