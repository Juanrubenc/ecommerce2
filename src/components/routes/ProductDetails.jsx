import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductDesc from '../ProdDetails/ProductDesc'
import SimilarProducts from '../ProdDetails/SimilarProducts'

const ProductDetails = () => {
  const [productInfo, setProductInfo] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProductInfo(res.data.data.product))
    .catch(err => console.log(err))
  }, [])


  return (
    <div>
      <ProductDesc 
      productInfo={productInfo}
      />
      <SimilarProducts
        productInfo={productInfo}
      />
    </div>
  )
}

export default ProductDetails