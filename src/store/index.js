import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import cityApiReducer from './features/cityApiSlice'
import resDataReducer from './features/resDataSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cityApi: cityApiReducer,
    resData: resDataReducer,

  },
});
