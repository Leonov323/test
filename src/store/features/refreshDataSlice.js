import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {}
}

export const refreshDataSlice = createSlice({
  name: 'refreshData',
  initialState,
  reducers: {
    setRefreshData: (state, { payload }) => {
      state.value = payload
    }
  }
})

export const { setRefreshData } = refreshDataSlice.actions

export const selectRefresh = (state) => state.refreshData.value

export default refreshDataSlice.reducer
