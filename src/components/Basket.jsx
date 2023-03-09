import React from "react";
import BasketItem from "./BasketItem";

 const Basket = ({ basket, products,total }) => {
   return (
     <div>
       {basket.map((item) => (
         <BasketItem
           item={item}
           product={products.find((p) => p.id === item.id)}
         />
       ))}
       <div>Total= $ {total}</div>
     </div>
   );
 };
 export default Basket;