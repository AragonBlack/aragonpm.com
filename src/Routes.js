import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from './screens/Home'
import About from './screens/About'
import Packages from './screens/Packages'

const Routes = () => {
  return (
    <Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/packages/" component={Packages} />
    </Fragment>
  )
}

export default Routes
