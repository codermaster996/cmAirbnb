import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import router from './router'
import AppHeader from './component/app-header';
import AppFooter from './component/app-footer';

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {useRoutes(router)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App