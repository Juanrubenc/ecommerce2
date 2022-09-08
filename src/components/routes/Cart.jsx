import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCartInfo from '../Cart/ProductCartInfo'
import getConfig from '../../utils/getConfig'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    useEffect(() => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig)
            .then(res => setCartProducts(res.data.data.cart.products))
            .catch(err => setCartProducts())
    }, [])


    const cartTotal = cartProducts?.reduce((acc, cv) => {
        return acc + (cv.price) * (cv.productsInCart.quantity)
    }, 0)


    const handleCheckOut = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
        const obj = {
            street: "Lazaro Cardenas 450",
            colony: "country",
            zipCode: 8300,
            city: "Monterrey",
            references: "Some references"
        }
        axios.post(URL, obj, getConfig())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <section className='cart'>
            <h2 className='cart__title'>Cart</h2>
            {
                cartProducts?.map(product =>
                    <ProductCartInfo
                        key={product.id}
                        product={product}
                    />
                )
            }
            <hr className='cart__hr' />
            <footer className='cart__footer'>
                <span className='cart__total-global-label'>Total:</span>
                <p className='cart__total-global-value'>{cartTotal}</p>
                <button onClick={handleCheckOut} className='cart__btn'>Checkout</button>
            </footer>
        </section>
    )
}

export default Cart