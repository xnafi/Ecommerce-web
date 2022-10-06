import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCart } from '../../utilities/fakedb'
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

    useEffect(() => {
        const storedProducts = getStoredCart();
        let cartProducts = []
        for (const id in storedProducts) {
            const addedProduct = products.find(pro => pro.id === id)
            if (addedProduct) {
                const quantity = storedProducts[id]
                addedProduct.quantity = quantity
                cartProducts.push(addedProduct)
            }
        }
        setCart(cartProducts)
    }, [products])

    const BuyNow = (products) => {
        let newCart = [];
        const exits = cart.find(product => product.id === products.id)
        if (!exits) {
            products.quantity = 1;
            newCart = [...cart, products];
        } else {
            const rest = cart.filter(product => product.id !== products.id);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits];
        }
        setCart(newCart);
        addToDb(products.id);
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
