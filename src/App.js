import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Main } from '@aragon/ui'
import { ApolloProvider } from 'react-apollo'

import AppContainer from './components/AppContainer'
import client from './client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Main>
        <Router>
          <AppContainer />
        </Router>
      </Main>
    </ApolloProvider>
  )
}

export default App
