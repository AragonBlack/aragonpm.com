import React from 'react'
import { Link } from 'react-router-dom'

const AppbarLinks = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      <Link to="/packages/">Packages</Link>
    </nav>
  )
}

export default AppbarLinks
