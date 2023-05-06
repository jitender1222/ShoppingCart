import React, { useEffect } from "react";
import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { state, paginate } = CartState();
  useEffect(() => {
    paginate(1); // set the initial page to 1
  }, [paginate]);

  console.log("pageNumbers", state?.pageNumbers);

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {state?.currentPageProducts?.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
      <div className="pagination">
        {state?.pageNumbers?.map((number) => (
          <button
            key={number}
            className={state.currentPage === number ? "active" : null}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
