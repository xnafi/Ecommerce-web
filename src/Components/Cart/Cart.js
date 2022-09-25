import React from 'react'

export default function Cart({ cart }) {
    console.log(cart);
    let price = 0;
    let shippings = 0;
    for (const cartt of cart) {
        price = price + cartt.price
        shippings = shippings + cartt.shipping
    }
    const tax = price * 0.1
    const grandTotal = price + tax + shippings
    return (
        <div className='flex flex-col px-10 mt-10 space-y-8'>
            <h4 className='font-bold text-2xl'>Order Summery</h4>
            <h5 className='font-bold'>Selected Item: {cart.length}</h5>
            <h5 className='font-bold'>Toatal Price: {price}</h5>
            <h5 className='font-bold'>Total Shipping Charge : {shippings}</h5>
            <h5 className='font-bold'>Tax : ${parseFloat(tax).toFixed(2)}</h5>
            <h5 className='font-bold text-xl'>Grand Total: {grandTotal}</h5>
        </div>
    )
}
