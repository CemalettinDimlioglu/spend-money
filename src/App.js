
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import products from "./products.json"

function App() {
  const [money, setMoney]= useState(1000);
  const [basket, setBasket]=useState([]);
  useEffect(() => {
    console.log(basket);
  }, [basket])
  
  return (
    <div className="App">
      <Header money={money} />
       {products.map((product)=>(<Product 
       key={product.id} 
       basket={basket} 
       setBasket={setBasket} 
       product={product} />
       ))}

    </div>
  );
}

export default App;
