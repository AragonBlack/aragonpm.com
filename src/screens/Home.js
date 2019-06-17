import React from 'react'
import { Text, theme } from '@aragon/ui'

import SearchBar from '../components/SearchBar'

const h1 = { color: theme.textPrimary }
const p = { color: theme.textSecondary }

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <Text as="h1" size="xxlarge" weight="bold" style={h1}>
          Some text to feel welcome here
        </Text>
        <Text as="p" style={p}>
          and a small paragraph explaining the purpose of this website and many relevant things
        </Text>
      </div>
      <SearchBar />
    </div>
  )
}

export default Home
