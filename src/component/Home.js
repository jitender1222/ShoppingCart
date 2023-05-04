import React from "react";
import { CartState } from "../context/Context";
// import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const { state } = CartState();
  // console.log("state", state);
  return (
    <div className="home">
      {/* <Filters /> */}
      <div className="productContainer">
        {state?.products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
