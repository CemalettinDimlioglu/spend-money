import React from 'react'


     const Product = ({product, basket, setBasket}) => {
     const addBasket = ()=>{
      setBasket([...basket, product])
     }
  return (
    <div className='product' >
    <h6>{product.title}</h6>
    <div className="price">${product.price}</div>
    <div className="action">
     <button>Sat</button>
     <span className='amount' >0</span>
     <button onClick={addBasket} >Satın Al</button>
    </div>
    </div>
  )
}

export default Product