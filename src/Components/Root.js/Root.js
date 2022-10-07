
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import About from '../About/About'
import ErrorPage from '../ErrorPage/ErrorPage'
import Inventory from '../Inventory/Inventory'
import Orders from '../Orders/Orders'
import ShopPage from '../ShopPage/ShopPage'

const Root = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'home',
                element: <ShopPage />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'orders',
                element: <Orders />,
                loader: () => fetch('product.json')

            },
            {
                path: 'inventory',
                element: <Inventory />
            }
        ]
    }
])


export default Root