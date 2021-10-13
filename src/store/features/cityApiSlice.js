import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Rome',
};

export const cityApiSlice = createSlice({
  name: 'cityApi',
  initialState,
  reducers: {
    setCity: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { setCity } = cityApiSlice.actions

export const selectCity = (state) => state.cityApi.value

export default cityApiSlice.reducer
