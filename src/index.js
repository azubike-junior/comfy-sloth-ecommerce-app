import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dev-hpnux8hw.us.auth0.com
//uLTTXB15OqEGv82zvm8wSEtltp7An4zr

ReactDOM.render(
    <Auth0Provider
        domain="dev-hpnux8hw.us.auth0.com"
        clientId="uLTTXB15OqEGv82zvm8wSEtltp7An4zr"
        redirectUri={window.location.origin}
        cacheLocation='localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />,
                </CartProvider>,
            </FilterProvider>,
            </ProductsProvider>,
        </UserProvider>
    </Auth0Provider>,
    document.getElementById('root')
);
