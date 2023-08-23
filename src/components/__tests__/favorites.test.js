import { cleanup } from "@testing-library/react";
import { setFavorite } from "../../redux/actions";
import { setFavoritesAction } from "../../redux/actions";
import { favoritesReducer } from "../../redux/reducers/favoritesReducer";

afterEach(cleanup);

const product = {
    name: "Costyum",
    price: 1000,
    imgUrl:
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    SKU: 12143,
    color: "black",
}

test("should add product to favourites, just action", () => {
    const initialState = { favorites: [] }
    const action = setFavoritesAction([product])
    const newState = favoritesReducer(initialState, action)

    expect(newState.favorites).toEqual([product])
});

test("should add product to favourites", () => {
    const initialState = { favorites: [] }
    const dispatch = jest.fn()
    const action = setFavorite([], product)

    action(dispatch)
    
    const newState = favoritesReducer(initialState, dispatch.mock.calls[0][0])

    expect(newState.favorites).toEqual([product])
});

test("should delete product from favourites", () => {
    const initialState = { favorites: [product] }
    const action = setFavorite([product], product)
    const newState = favoritesReducer(initialState, action)

    expect(newState.favorites).toEqual([product])
});