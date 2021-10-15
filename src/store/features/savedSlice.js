import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const savedSlice = createSlice({
  name: 'saved',
  initialState,
  reducers: {
    setSavedFalse: (state) => {
      state.value = false
    },
    setSavedTrue: (state) => {
      state.value = true
    }
  }
})

export const { setSavedFalse, setSavedTrue } = savedSlice.actions

export const selectSaved = (state) => state.saved.value

export default savedSlice.reducer
