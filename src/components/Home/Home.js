import React from "react";
import Delivery from "./Delivery";
import Landing from "./Landing";
import Services from "./Services";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <Landing />
      <Services />
      <Delivery />
      <Products />
    </>
  );
};

export default Home;
