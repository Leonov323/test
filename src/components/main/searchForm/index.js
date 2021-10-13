import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { GetWeather, GetWeatherEffect } from '../../../common/services/getWeather'
import { useDispatch, useSelector } from 'react-redux'
import { selectCity } from '../../../store/features/cityApiSlice'
import { setCity } from '../../../store/features/cityApiSlice'

export const SearchForm = () => {
  const dispatch = useDispatch()
  const city = useSelector(selectCity) 
  GetWeatherEffect()
  
  return (
    <>
      <FloatingLabel label="Enter city name">
        <Form.Control
          type="text"
          onChange={(e) => dispatch(setCity(e.target.value))}
          value={city}
        />
      </FloatingLabel>
      <Button className="ms-4 btn-success" onClick={GetWeather}>Search</Button>
    </>
  )
}
