import { getHomeGoodPriceDate } from '@/services'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDateAction = createAsyncThunk('fetchHomeDate', async (payload) => {
  const res = await getHomeGoodPriceDate()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDateAction.fulfilled, (state, { payload }) => {
      state.goodPriceInfo = payload
    })
  }
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
