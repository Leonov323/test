import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import cityApiReducer from './features/cityApiSlice'
import resDataReducer from './features/resDataSlice'
import loadingReducer from './features/loadingSlice'
import inputReducer from './features/inputSlice'
import refreshDataReducer from './features/refreshDataSlice'
import refreshLoadingReducer from './features/refreshLoadingSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cityApi: cityApiReducer,
    resData: resDataReducer,
    loading: loadingReducer,
    input: inputReducer,
    refreshData: refreshDataReducer,
    refreshLoading: refreshLoadingReducer

  }
})
