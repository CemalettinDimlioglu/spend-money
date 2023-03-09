import React from 'react'

const BasketItem = ({product, item}) => {
  return (
    <div>
     {product.title}*{item.amount}
    </div>
  )
}

export default BasketItem