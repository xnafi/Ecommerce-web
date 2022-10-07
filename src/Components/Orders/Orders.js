import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Cart from '../Cart/Cart'
import OrderReview from '../OrderReview.js/OrderReview'

function Orders() {
  const { products, initialCart } = useLoaderData()
  const [cart, setCart] = useState(initialCart)
  return (
    <div className='grid grid-cols-4 gap-4 px-10 top-16 absolute z-10 justify-center w-screen'>
      <div className='col-span-3 grid grid-rows-1 gap-8 my-10 mx-auto'>

        {
          cart.map(product => <OrderReview key={product.id} product={product} />)
        }

      </div>
      <div className='bg-red-400 fixed right-0 w-80 h-full'>
        <Cart cart={cart} />
      </div>
    </div>

  )
}

export default Orders