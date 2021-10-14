import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true
}

export const refreshLoadingSlice = createSlice({
  name: 'refreshLoading',
  initialState,
  reducers: {
    setFalse: (state) => {
      state.value = false
    },
    setTrue: (state) => {
      state.value = true
    }
  }
})

export const { setFalse, setTrue } = refreshLoadingSlice.actions

export const selectRefreshLoading = (state) => state.refreshLoading.value

export default refreshLoadingSlice.reducer
