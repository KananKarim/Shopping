import { addProductsAction } from "../../redux/actions";
import { productsReducer } from "../../redux/reducers/productsReducer";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test("should store products", async () => {
  const productsArr = [
    {
      name: "Jacket",
      price: 123,
      imgUrl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
      SKU: 45452,
      color: "black",
    },
    {
      name: "Costyum",
      price: 1000,
      imgUrl:
        "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      SKU: 12143,
      color: "black",
    },
  ];
  const initialState = { products: [] };

  const action = addProductsAction(productsArr);
  const newState = productsReducer(initialState, action);

  expect(newState.products).toEqual(productsArr);
});
