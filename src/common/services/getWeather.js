import axios from 'axios'
import { store } from '../../store'
import { setData } from '../../store/features/resDataSlice'
import { useEffect } from 'react'
import { setFalse } from '../../store/features/loadingSlice'
import { refreshInput } from '../../store/features/inputSlice'
import { GetHoursTemp } from './getHoursTemp'

export const GetWeather = () => {
  const city = store.getState().cityApi.value
  const apiKey = 'bfda20ca597bc0f4138fa15d276de911'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

  axios.get(URL)
    .then(res => {
      store.dispatch(setData(res.data))
      store.dispatch(setFalse())
      store.dispatch(refreshInput())
      GetHoursTemp()
      console.log('GetWeather Res:', res.data)
    })
    .catch(err => console.log(err))
}

export const GetWeatherEffect = () => {
  useEffect(() => {
    GetWeather()
  }, [])
}
