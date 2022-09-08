import axios from 'axios'
import React from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product, getAllProductsCart}) => {



  const handleDeleteProduct = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
    axios.delete(URL, getConfig())
      .then(() => getAllProductsCart())
      .catch(err => console.log(err))
  }
  

  return (
<article className='cart__item'>
      <header className='cart__item-header'>
        <img className='cart__img' src="" alt="" />
        <h4 className='cart__brand'>{product.brand}</h4>
        <h3 className='cart__name'>{product.title}</h3>
        <h4>Price: {product.price}</h4>
      </header>
      <i onClick={handleDeleteProduct} className="fa-regular fa-trash-can"></i><br />
      <span className='cart__quantity'>{product.productsInCart.quantity}</span>
    </article>
  )
}

export default ProductCartInfo