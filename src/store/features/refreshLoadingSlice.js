import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
};

export const refreshLoadingSlice = createSlice({
  name: 'refreshLoading',
  initialState,
  reducers: {
    setFalse: (state) => {
      state.value = false
    },
  },
})

export const { setFalse } = refreshLoadingSlice.actions

export const selectRefreshLoading = (state) => state.refreshLoading.value

export default refreshLoadingSlice.reducer
