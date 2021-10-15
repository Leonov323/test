import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { GetWeather, GetWeatherEffect } from '../../../common/services/getWeather'
import { useDispatch, useSelector } from 'react-redux'
import { selectInput, setInput } from '../../../store/features/inputSlice'
import { selectError, setCity } from '../../../store/features/cityApiSlice'
import { ErrorStyled } from './SearchFormStyled'

export const SearchForm = () => {
  const dispatch = useDispatch()
  const input = useSelector(selectInput)
  const error = useSelector(selectError)
  if (input !== '') {
    dispatch(setCity(input))
  }
  GetWeatherEffect()

  return (
    <>
      <ErrorStyled value={error}>City not found</ErrorStyled>
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
