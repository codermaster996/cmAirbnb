import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'

// import ScreenResolution from 'utils/screenResolution';
import AppHeader from './component/app-header';
import AppFooter from './component/app-footer';

const App = memo(() => {
  // 解决笔记本屏幕分辨率问题(统一为 125%)
  // useEffect(() => {
  //   new ScreenResolution().init()
  // }, [])

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