import React from 'react'
import { H1, P } from '../components/Styled'

import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <H1>Some text to feel welcome here</H1>
        <P>and a small paragraph explaining the purpose of this website and many relevant things</P>
      </div>
      <SearchBar />
    </div>
  )
}

export default Home
