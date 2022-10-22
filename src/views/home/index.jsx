import React, { memo } from 'react'
import HomeBanner from './c-cpns/home-banner'
import { HomeWarpper } from './style'

const Home = memo(() => {
  return (
    <div>
      <HomeWarpper>
        <HomeBanner />
      </HomeWarpper>
    </div>
  )
})

export default Home