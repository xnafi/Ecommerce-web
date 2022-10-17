import React from 'react'

export default function Cart({ cart, children, clearCart }) {
    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        price = price + product.price * product.quantity
        shipping = shipping + product.shipping
    }
    const tax = price * 0.1
    const grandTotal = price + tax + shipping
    return (
        <div className='flex flex-col px-10 mt-10 space-y-8'>
            <h4 className='font-bold text-2xl'>Order Summery</h4>
            <h5 className='font-bold'>Selected Item: {quantity}</h5>
            <h5 className='font-bold'>Toatal Price: {price}</h5>
            <h5 className='font-bold'>Total Shipping Charge : {shipping}</h5>
            <h5 className='font-bold'>Tax : ${parseFloat(tax).toFixed(2)}</h5>
            <h5 className='font-bold text-xl'>Grand Total: {grandTotal}</h5>
            {children}
        </div>
    )
}
