import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops An Error Found</h1>
            <p>{error.status}</p>
            <p>{error.statusText}</p>
        </div>
    )
}

export default ErrorPage