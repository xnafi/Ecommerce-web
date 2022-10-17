import React from 'react'

function OrderReview({ product, handleRemoveItem }) {
  
    const { name, shipping, img, quantity, id } = product

    return (

        <div div className="card card-side bg-base-100 shadow-xl justify-center items-center p-0 px-2" >
            <figure><img className=' w-[90px]' src={img} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Shipping Charge : ${shipping}</p>
                <p>Quantity : {quantity}</p>
            </div>
            <div className="card-actions justify-end">
                <button onClick={() => handleRemoveItem(id)} className="btn btn-primary">remove</button>
            </div>
        </div >
    )
}

export default OrderReview