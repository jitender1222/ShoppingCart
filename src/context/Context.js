import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import faker from "faker";
import { cartReducer, filterReducer } from "./Reducer";
const Cart = createContext();

const Context = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const products = [...Array(50)].map((_, index) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    pageNumber: Math.floor(index / recordsPerPage) + 1,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    currentPageProducts: products.slice(0, recordsPerPage),
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelievery: false,
    byRating: 0,
    searchQuery: "",
  });

  useEffect(() => {
    const totalPages = Math.ceil(state.products.length / recordsPerPage);
    const pages = [...Array(totalPages).keys()].map((num) => num + 1);
    console.log("pages:", pages);
    dispatch({ type: "GENERATE_PAGE_NUMBERS", payload: pages });
  }, [state.products.length, recordsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    dispatch({
      type: "SET_CURRENT_PAGE_PRODUCTS",
      payload: currentProducts,
    });
  };
  return (
    <Cart.Provider
      value={{ state, dispatch, filterState, filterDispatch, paginate }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
