import axios from 'axios'
import { store } from '../../store'
import { useEffect } from 'react'

export const GetHoursTemp = () => {
  const city = store.getState().cityApi.value
  const apiKey = 'bfda20ca597bc0f4138fa15d276de911'
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

  axios.get(URL)
    .then(res => {
      console.log('GetHoursTemp Res:', res.data)
    })
    .catch(err => console.log(err))
}

export const GetHoursTempEffect = () => {
  useEffect(() => {
    GetHoursTemp()
  }, [])
}
