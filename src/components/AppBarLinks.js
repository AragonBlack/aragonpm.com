import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AppbarLinks = () => {
  return (
    <nav>
      <PaddedLink to="/">Home</PaddedLink>
      <PaddedLink to="/about/">About</PaddedLink>
    </nav>
  )
}

const PaddedLink = styled(Link)`
  padding: 10px;
`

export default AppbarLinks
