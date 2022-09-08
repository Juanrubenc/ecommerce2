import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from '../home/ProductsCard'

const SimilarProducts = ({productInfo}) => {

  const [filterproducts, setFilterProducts] = useState()

  const products = useSelector(state => state.products)

  useEffect(() => {
    if(productInfo){
      const filter = products?.filter(e => e.category.name === productInfo.category)
      setFilterProducts(filter)
    }
  }, [productInfo])

  console.log(filterproducts)

  return (
    <div className='similar-products'>
      {
        filterproducts?.map(product =>{
          if(product.title !== productInfo.title){
            return (
              <ProductsCard
              key={product.id}
              product={product}/>
            )
          }
        })
      }
    </div>
  )
}

export default SimilarProducts