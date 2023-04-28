import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import userContext from './Context/user' 
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { FiltersProvider } from './Context/filters'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CountCart } from './Context/countCart'
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ 
    uri: 'http://localhost:3000/graphql'
  })
})

const clientId = '753481888026-pu665d1aj3henv299f7v8nlo84bgc81o.apps.googleusercontent.com'

ReactDOM.createRoot(document.getElementById('root')).render(
  <userContext.Provider>
    <ApolloProvider client={client}> 
    <BrowserRouter>
      <FiltersProvider>
        <CountCart>

        <GoogleOAuthProvider clientId={clientId}>
          <App  />
        </GoogleOAuthProvider>
        </CountCart>
      </FiltersProvider>
      </BrowserRouter>
    </ApolloProvider>
  </userContext.Provider>
)
