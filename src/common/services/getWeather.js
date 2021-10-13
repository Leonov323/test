import axios from "axios"
import { store } from '../../store'
import { setData } from "../../store/features/resDataSlice"
import { useEffect } from "react"


export const GetWeather = () => {

    const city = store.getState().cityApi.value
    const apiKey = 'b0e8faf9ff3213543be817f6fdbf3428'
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    axios.get(URL)
        .then(res => store.dispatch(setData(res.data)))
        .catch(err => console.log(err))

}


export const GetWeatherEffect = () => {
    useEffect(() => {
        GetWeather()
    }, [])
}









export const takeEveryData = () => {
    const data = store.getState().resData.value
    const temp = Object.values(data)[3]
    const temperature = Object.values(temp)[0]
    const celsius = Math.floor(temperature - 273.15)
    console.log(celsius)
}