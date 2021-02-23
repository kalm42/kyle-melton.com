---
slug: /how-to-handle-authentication-in-react-applications
templateKey: blog-post
title: How to Handle Authentication in React Applications
description: The concept for this I have straight up stolen from Kent C. Dodds'
  blog post on the same concept. Go here and read his post. Maybe attend a
  workshop he puts on, I would bet money it would be worth the cost.
tags:
  - brewing
  - chemex
thumbnail: /img/how-to-handle-authentication-in-react-applications.png
date: 2019-09-22T19:57:43.522Z
---

# How to Handle Authentication in React Applications

The concept for this I have straight up stolen from Kent C. Dodds' blog post on the same concept. Go [here](https://kentcdodds.com/blog/authentication-in-react-applications) and read his post. Maybe attend a workshop he puts on, I would bet money it would be worth the cost.

## The Concept

The concept is simple. We're going to check to see if the current user is authenticated. If they are not authenticated we will present only components for unauthenticated users. If the user is authenticated then we will present only components for authenticated users. With that we will not have to constantly check if the user is logged in. We can assume one way or the other.

We will do this by wrapping the root component in several providers. In this example I am using Apollo with graphql to fetch data from the backend. If you use something else you will need to swap it out. Kent C. Dodds' version does not include this portion so that one might be of more help to you than mine will be. Or maybe not, _shrug_ that's up to you to decide.

On load we will check for a token in local storage and attempt to fetch data about the user from the backend. If there's no token, or there is no data about the user then we know the current user is not authenticated. Else... they are authenticated.

`./src/context/auth-context.js`

```javascript
import React from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { AUTH_TOKEN } from "../constant"

const ME_QUERY = gql`
  query MeQuery {
    me {
      ...UserDetails
    }
  }
`
const LOGIN_USER_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...UserDetails
      }
    }
  }
`
const SIGNUP_USER_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        ...UserDetails
      }
    }
  }
`

const AuthContext = React.createContext()

function AuthProvider(props) {
  const { loading, data, refetch } = useQuery(ME_QUERY)
  const [login] = useMutation(LOGIN_USER_MUTATION)
  const [signup] = useMutation(SIGNUP_USER_MUTATION)

  const signin = (email, password) => {
    return login({ variables: { email, password } }).then(res => {
      if (res && res.data && res.data.login && res.data.login.token) {
        const { token } = res.data.login
        localStorage.setItem(AUTH_TOKEN, token)
        refetch()
      } else {
        throw Error("No token returned")
      }
      return res
    })
  }

  const register = (name, email, password) => {
    return signup({ variables: { name, email, password } }).then(res => {
      if (res && res.data && res.data.login && res.data.login.token) {
        const { token } = res.data.login
        localStorage.setItem(AUTH_TOKEN, token)
        refetch()
      } else {
        throw Error("No token returned")
      }
      return res
    })
  }

  const logout = () => {
    localStorage.sremoveItem(AUTH_TOKEN)
    refetch()
  }

  if (loading) {
    return <p>Loading</p>
  }

  return (
    <AuthContext.Provider
      value={{ data, signin, logout, register }}
      {...props}
    />
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
```

`./src/context/user-context.js`

```
import React from 'react'
import { useAuth } from './auth-context'

const UserContext = React.createContext()

const UserProvider = props => {
  const { data } = useAuth()
  return <UserContext.Provider value={data ? data.me : null} {...props} />
}

const useUser = () => React.useContext(UserContext)

export { UserProvider, useUser }
```

`./src/context/app-context.js`

```
import React from 'react'
import { AuthProvider } from './auth-context'
import { UserProvider } from './user-context'
import client from './apollo-client'
import { ApolloProvider } from 'react-apollo'

function AppProvider({ children }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default AppProvider
```

`./src/apollo-client.js`

```
import { HttpLink, InMemoryCache, ApolloClient } from 'apollo-client-preset'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloLink, split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { AUTH_TOKEN } from '../constant'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN)
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  })
  return forward(operation)
})

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink)

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
    },
  },
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLinkAuth,
)

// apollo client setup
const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export default client
```

`./src/index.js`

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppProvider from './context/app-context'

import './index.css'

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root'),
)
```

`./src/App.js`

```
import React from 'react'
import { useUser } from './context/user-context'
import UnauthenticatedApp from './UnauthenticatedApp'
import AuthenticatedApp from './AuthenticatedApp'

const App = () => {
  const user = useUser()
  console.log('<App />', { user })
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App
```
