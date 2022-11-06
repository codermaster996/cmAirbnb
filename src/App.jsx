import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import router from './router'
import AppHeader from './component/app-header';
import AppFooter from './component/app-footer';
import useScrollTop from './hooks/useScrollTop';

const App = memo(() => {
  /** 路径改变时,回到顶部 */
  useScrollTop()

  return (
    <div className='app'>
      <AppHeader />
      <Suspense fallback='Loging...'>
        <div className='page'>
          {useRoutes(router)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App