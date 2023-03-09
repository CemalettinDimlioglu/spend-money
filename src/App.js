
import { useEffect, useState } from 'react';
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Product from './components/Product';
import products from "./products.json"

function App() {
  const [money, setMoney]= useState(1500);
  const [basket, setBasket]=useState([]);
  const [total, setTotal]=useState(0);
  useEffect(() => {
    setTotal(
      basket.reduce((acc,item)=>{
      return ( 
        acc +
        item.amount*products.find((product)=>product.id ===item.id).price)
    },0));
  }, [basket]);
  const resetBasket =()=>{
    setBasket([])
  }
  return (
    <div className="App">
      <Header money={money} total={total} />
      {products.map((product) => (
        <Product
          key={product.id}
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        />
      ))}
      <Basket products={products} basket={basket} />
      <button onClick={resetBasket}>Sıfırla</button>
    </div>
  );
}

export default App;
