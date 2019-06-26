import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Home from './screens/Home'
import About from './screens/About'
import Package from './screens/Package'

const Routes = () => {
  return (
    <Route
      render={({ location }) => {
        const { pathname } = location
        return (
          <TransitionGroup component={null}>
            <CSSTransition key={pathname} appear classNames="route" timeout={{ enter: 750, exit: 0 }}>
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/about/" component={About} />
                <Route path="/package/:id" component={Package} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )
      }}
    />
  )
}

export default Routes
