
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import { ProductsAndCartLoader } from '../../Loaders/ProductsAndCartLoader'
import About from '../About/About'
import SignUpPage from '../CreateAccount/SignUpPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import Inventory from '../Inventory/Inventory'
import LoginPage from '../LoginPage/LoginPage'
import Orders from '../Orders/Orders'
import Shipping from '../Shipping/Shipping'
import ShopPage from '../ShopPage/ShopPage'
import PrivateRoutes from './PrivateRoutes'

const Root = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <ShopPage />
            },
            {
                path: '/home',
                element: <ShopPage />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/shipping',
                element: <PrivateRoutes><Shipping /></PrivateRoutes>
            },
            {
                path: '/orders',
                element: <Orders />,
                loader: ProductsAndCartLoader

            },
            {
                path: '/inventory',
                element: <Inventory />
            }
            ,
            {
                path: '/signup',
                element: <SignUpPage />
            }
            ,
            {
                path: '/login',
                element: <LoginPage />
            }
            ,

        ]
    }
])


export default Root