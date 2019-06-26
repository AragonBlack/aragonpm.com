import React from 'react'
import { withRouter } from 'react-router-dom'
import { AppView, AppBar } from '@aragon/ui'

import AppbarLinks from './AppBarLinks'
import Routes from '../Routes'

const AppContainer = ({ history, location }) => {
  const goHome = () => history.push('/')
  return (
    <AppView appBar={<AppBar title="aragonPM" onTitleClick={goHome} endContent={<AppbarLinks />} />}>
      <Routes />
    </AppView>
  )
}

export default withRouter(AppContainer)
