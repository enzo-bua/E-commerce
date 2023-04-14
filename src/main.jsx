import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import userContext from './Context/user' 
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ 
    uri: 'http://localhost:3000/graphql'
  })
  // request: operation => {
  //   const token = window.sessionStorage.getItem('token')
  //   const authorization = token ? `${token}` : ''
  //   operation.setContext({
  //     headers: {
  //       authorization
  //     }
  //   })
  // },
  // onError: error => {
  //   const { networkError } = error
  //   if (networkError && networkError.results.code === 'invalid_token'){
  //     window.sessionStorage.removeItem('token')
  //     window.location.href = '/'
  //   }
  // }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <userContext.Provider>
    <ApolloProvider client={client}> 
    <BrowserRouter>
        <App  />
      </BrowserRouter>
    </ApolloProvider>
  </userContext.Provider>
)
