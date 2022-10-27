import { configureStore } from '@reduxjs/toolkit';
import homeRedux from './modules/home'
import entireRedux from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeRedux,
    entire: entireRedux
  }
})

export default store