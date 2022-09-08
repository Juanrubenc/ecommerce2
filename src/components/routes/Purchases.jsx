import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchasesCard from '../Purchases/PurchasesCard'
import "../Purchases/style/purchase.css"

const Purchases = () => {
  
  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])

  console.log(purchases)

  return (
    <div className='purchase'>
      <div className="purchase__title">
      <h1>Purchase History</h1>
      </div>
        {
          purchases?.map(purchase => 
            <PurchasesCard 
              key={purchase.id}
              purchase={purchase}
            />
          )
        }
    </div>
  )
}

export default Purchases