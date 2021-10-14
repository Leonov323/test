import axios from "axios"
import { store } from "../../store"
import { setRefreshData } from "../../store/features/refreshDataSlice"
import { setFalse } from "../../store/features/refreshLoadingSlice"



export const GetRefresh = (city) => {

    const apiKey = 'bfda20ca597bc0f4138fa15d276de911'
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    axios.get(URL)
        .then(res => {
            store.dispatch(setRefreshData(res.data))
            store.dispatch(setFalse())
            console.log(res.data)
        })
        .catch(err => console.log(err))



}

