import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { GetWeather, GetWeatherEffect } from '../../../common/services/getWeather'
import { useDispatch, useSelector } from 'react-redux'
import { selectInput } from '../../../store/features/inputSlice'
import { setInput } from "../../../store/features/inputSlice"
import { setCity } from '../../../store/features/cityApiSlice'

export const SearchForm = () => {
  const dispatch = useDispatch()
  const input = useSelector(selectInput)
  if (input !== '') {
    dispatch(setCity(input))
  }
  GetWeatherEffect()

  return (
    <>
      <FloatingLabel label="Enter city name">
        <Form.Control
          type="text"
          onChange={(e) => dispatch(setInput(e.target.value))}
          value={input}
        />
      </FloatingLabel>
      <Button className="ms-4 btn-success" onClick={GetWeather}>Search</Button>
    </>
  )
}
