import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setFalse: (state) => {
      state.value = false
    },
  },
})

export const { setFalse } = loadingSlice.actions

export const selectLoading = (state) => state.loading.value

export default loadingSlice.reducer
