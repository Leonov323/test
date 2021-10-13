import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
};

export const resDataSlice = createSlice({
  name: 'resData',
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { setData } = resDataSlice.actions

export const selectResData = (state) => state.resData.value

export default resDataSlice.reducer
