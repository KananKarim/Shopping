import { cleanup } from "@testing-library/react";
import { setCart } from "../../redux/actions";
import { cartReducer } from "../../redux/reducers/cartReducer";

afterEach(cleanup);

const product = {
    name: "Costyum",
      price: 1000,
      imgUrl:
        "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      SKU: 12143,
      color: "black",
}

test("should add product to cart", () => {
    const initialState = { cart: [product] };
    const dispatch = jest.fn()
    const action = setCart('buy', product.SKU, [product], []);

    action(dispatch)
    
    const newState = cartReducer(initialState, dispatch.mock.calls[0][0]);

    expect(newState.cart).toEqual([product]);
});

test("should delete product from cart", () => {
    const initialState = { cart: [] };
    const dispatch = jest.fn()
    const action = setCart('delete', product.SKU, [product], []);

    action(dispatch)
    
    const newState = cartReducer(initialState, dispatch.mock.calls[0][0]);

    expect(newState.cart).toEqual([]);
});
