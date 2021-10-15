import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'Rome',
  error: false
}

export const cityApiSlice = createSlice({
  name: 'cityApi',
  initialState,
  reducers: {
    setCity: (state, { payload }) => {
      state.value = payload
    },
    setErrorTrue: (state) => {
      state.error = true
    },
    setErrorFalse: (state) => {
      state.error = false
    }
  }
})

export const { setCity, setErrorTrue, setErrorFalse } = cityApiSlice.actions

export const selectCity = (state) => state.cityApi.value

export const selectError = (state) => state.cityApi.error

export default cityApiSlice.reducer
