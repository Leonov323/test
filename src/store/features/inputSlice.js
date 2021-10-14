import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: ''
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, { payload }) => {
      state.value = payload
    },
    refreshInput: (state) => {
      state.value = ''
    }
  }
})

export const { setInput, refreshInput } = inputSlice.actions

export const selectInput = (state) => state.input.value

export default inputSlice.reducer
