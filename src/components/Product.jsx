import React from "react";

const Product = ({ product, basket, setBasket }) => {
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([...basket, { id: product.id, amount: 1 }]);
    }
  };
  return (
    <div className="product">
      <h6>{product.title}</h6>
      <div className="price">${product.price}</div>
      <div className="action">
        <button>Sat</button>
        <span className="amount">0</span>
        <button onClick={addBasket}>Satın Al</button>
      </div>
    </div>
  );
};

export default Product;
