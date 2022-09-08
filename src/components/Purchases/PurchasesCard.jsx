import React from 'react'
import ProductPurchase from './ProductPurchase'
import "./style/purchase.css"

const PurchasesCard = ({purchase}) => {

  console.log(purchase)

  return (
    <article className='purchase-card'>
      <h3 className='card-purchase__date'>{purchase.createdAt}</h3>
      <hr />
      <div className='card-purchase__body'>
        <ul className='purchase-ul'>
          {
            purchase.cart.products.map(product => (
              <ProductPurchase
                key={product.id}
                product={product}/>
            ))
          }
        </ul>
      </div>
      </article>
  )
}

export default PurchasesCard