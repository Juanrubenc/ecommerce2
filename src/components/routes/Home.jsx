import React from 'react'
import { useSelector } from 'react-redux'
import ProductsCard from '../home/ProductsCard'
import './styles/home.css'

const Home = () => {


  const products = useSelector(state => state.products)


  return (
    <div className='home'>
        <div className='home__container-card'>
        {
          products?.map(product => 
            <ProductsCard
              key={product.id}
              product={product}
            />
          )
        }
        </div>
      </div>
  )
}

export default Home