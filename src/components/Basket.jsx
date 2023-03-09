import React from "react";

const Basket = ({ basket }) => {
  return basket.map((item)=><div>{item.id}</div>) ;
};

export default Basket;
