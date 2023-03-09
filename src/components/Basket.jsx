import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, products }) => {
  return basket.map((item)=><div>

  <BasketItem item={item} product ={products.find((p)=>p.id===item.id)} />
  </div>) ;
};

export default Basket;
