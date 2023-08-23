import { Provider } from "react-redux";
import Modal from "../Modal";
import { modalProps } from "../Modal/modalProps";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore();
let store;

beforeEach(() => {
    store = mockStore({
        cart: { cart: [] }, favorites: { favorites: [] }, SKU: { SKU: '' }, modal: { modal: '' }, products: { products: []} })
})

afterEach(cleanup);

test('should buy modal exist', () => {
    render(
        <Provider store={store}>
            <Modal data={modalProps.find(modal => modal.type === 'buy')} />
        </Provider>
    );
    expect(screen.getByText('Add')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
});

test('should delete modal exist', () => {
    render(
        <Provider store={store}>
            <Modal data={modalProps.find(modal => modal.type === 'delete')} />
        </Provider>
    );
    expect(screen.getByText('Delete')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
});
