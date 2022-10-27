import { getHomeDisCountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeLongFor, getHomePlus, getHomeRecommend } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDateAction = createAsyncThunk('fetchHomeDate', (payload, { dispatch }) => {
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDisCountData().then(res => {
    dispatch(changeDisCountInfoAction(res))
  })
  getHomeRecommend().then(res => {
    dispatch(changeRecommendInfoAction(res))
  })
  getHomeLongFor().then(res => {
    dispatch(changeLongForInfoAction(res))
  })
  getHomePlus().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    disCountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDisCountInfoAction(state, { payload }) {
      state.disCountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }

})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDisCountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions

export default homeSlice.reducer
