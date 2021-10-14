/* eslint-disable camelcase */
import axios from 'axios'
import { store } from '../../store'
import { increment } from '../../store/features/counterSlice'
import { setRefreshData } from '../../store/features/refreshDataSlice'
import { setFalse } from '../../store/features/refreshLoadingSlice'

const TakeData2 = (prop) => {
  const refreshLoading = store.getState().refreshLoading.value
  if (refreshLoading === false) {
    return prop
  } else { return null }
}

export const GetRefresh = (city) => {
  const data = store.getState().refreshData.value
  const loading = store.getState().refreshLoading.value

  const temperature = Math.floor(TakeData2(loading ? '' : data.main.temp) - 273.15)
  const feels_like = Math.floor(TakeData2(loading ? '' : data.main.feels_like) - 273.15)
  const weatherImg = TakeData2(loading ? '50d' : data.weather[0].icon)
  const description = TakeData2(loading ? '' : data.weather[0].main)

  const storage = {
    name: city,
    temperature: temperature,
    feels_like: feels_like,
    weatherImg: weatherImg,
    description: description
  }

  const apiKey = 'bfda20ca597bc0f4138fa15d276de911'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  axios.get(URL)
    .then(res => {
      store.dispatch(setRefreshData(res.data))
      store.dispatch(setFalse())
      store.dispatch(increment())
      console.log('GetRefresh Res: ', res.data)
    })
    .then(() => {
      localStorage.setItem(city, JSON.stringify(storage))
    })
    .then(() => store.dispatch(increment()))
    .catch(err => console.log(err))
}
