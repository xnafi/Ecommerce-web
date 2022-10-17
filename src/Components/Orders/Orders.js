import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { removeFromDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart'
import OrderReview from '../OrderReview.js/OrderReview'

function Orders() {
  const { products, initialCart } = useLoaderData()
  const [cart, setCart] = useState(initialCart)

  const handleRemoveItem = id => {
    const remaining = cart.filter(product => product.id !== id)
    removeFromDb(id)
    setCart(remaining)
    // toast.warning('Product Removed!', { autoClose: 500 })
  }
  return (
    <div className='grid grid-cols-4 gap-4 px-10 top-16 absolute z-10 justify-center w-screen'>
      <div className='col-span-3 grid grid-rows-1 gap-8 my-10 mx-auto'>
        {
          cart.length === 0 && <h2 className='text-2xl font-bold'>No Items for Review. Please <Link className='text-blue-600' to="/">Shop more</Link></h2>
        }

        {
          cart.map(product => <OrderReview key={product.id} product={product} handleRemoveItem={handleRemoveItem} />)
        }

      </div>
      <div className='bg-red-400 fixed right-0 w-80 h-full'>
        <Cart cart={cart} >
          <Link to='/shipping'>
            <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 ">
              Shipping process
            </button>
          </Link>
        </Cart>
      </div>
    </div>

  )
}

export default Orders