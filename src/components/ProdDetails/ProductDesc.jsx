import React, { useState } from 'react'
import SimilarProducts from './SimilarProducts'



const ProductDesc = ({ productInfo }) => {

    const [counter, setCounter] = useState(1)
    const handlePlus = () => setCounter(counter + 1)
    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <section className='product-detail'>
                <img className='details__img' src={productInfo?.productImgs[1]} alt="Product Image from details" />
                <div className='product-description'>
                    <h2 className='product-desc-name'>{productInfo?.title}</h2>
                    <p className='product-desc-info'>{productInfo?.description}</p>
                    <div className='product-info__quantity-product'>
                    <div className='quantity'>
                        <button className='product-info__quantity-form-button' onClick={handleMinus}>-</button>
                        <div className='product-info__quantity-form-counter'>{counter}</div>
                        <button className='product-info__quantity-form-button' onClick={handlePlus}>+</button>
                    </div>
                        <div><span><b>Price </b></span><span> </span><span className='desc-price'>{productInfo?.price}</span></div>
                    </div>
                    <button className='product-info__btn-cart'>Add to cart </button>
                </div>
            </section>
        </div>
    )
}

export default ProductDesc