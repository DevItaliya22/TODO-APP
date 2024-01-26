import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
        domain="dev-li1hipsfv4kg8j0e.us.auth0.com"
        clientId="xMg7QPNokw91ck9qhQ1APIB8RvGeWkor"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
    </Auth0Provider>
  </React.StrictMode>,
)
