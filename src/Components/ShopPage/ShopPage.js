import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import SingleProduct from './SingleProduct'

export default function ShopPage() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    const BuyNow = (products) => {
        const addToCart = [...cart, products]
        setCart(addToCart)
    }
    return (
        <div className='grid grid-cols-4 gap-4 px-10 top-16 absolute z-10'>
            <div className='col-span-3 grid grid-cols-3 gap-8 my-10'>
                {
                    products.map(product => <SingleProduct key={product.id} product={product} BuyNow={BuyNow}></SingleProduct>)
                }
            </div>
            <div className='bg-red-400 fixed right-0 w-80 h-full'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    )
}
