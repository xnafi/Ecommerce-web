import React, { useState } from 'react'
import logo from '../../images/logo192.png'

export default function SingleProduct({ product,BuyNow }) {
    const [cart, setCart] = useState([])
    const { img, name, seller, price, ratings } = product;
    return (
        <div className="card bg-base-100 shadow-xl h-[508px]">
            <figure><img src={img ? img : logo} className='w-[286] h-[286px] rounded-t' alt="Shoes" /></figure>
            <div className="card-body font-bold p-0 px-5 ">
                <h2 className="card-title font-bold mt-5 mb-3 ">{name ? name.slice(0, 20) : 'Product Has No Name'}</h2>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Ratings : {ratings} Stars </p>
            </div>
            <div className="card-actions w-full">
                <button onClick={()=> BuyNow(product)} className="btn btn-primary w-full rounded-t-none">Buy Now</button>
            </div>
        </div>
    )
}
