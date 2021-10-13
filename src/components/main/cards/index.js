import React from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectResData } from '../../../store/features/resDataSlice'
import { CardStyled, ButtonStyled } from './MainCardStyled'

export const Cards = () => {

  const data = useSelector(selectResData)
  const value = Object.values(data)

  const Temperature = () => {
    if (value.length > 1) {
      const tempInf = data.main.temp
      const celsius = Math.floor(tempInf - 273.15)
      return celsius
    } else { return null }
  }

  const Name = () => {
    if (value.length > 1) {
      const name = data.name
      return name
    } else { return null }
  }

  const WeatherImg = () => {
    if (value.length > 1) {
      const weatherIcon = data.weather[0].icon
      return weatherIcon
    } else { return '50d' }
  }

  const weatherImg = WeatherImg()

  const name = Name()

  const temperature = Temperature()

  return (
    <CardStyled>

      <Card.Body>

        <Card.Title>{name}</Card.Title>

        <ListGroup variant="flush">

          <ListGroup.Item>

            <Image
              src={`http://openweathermap.org/img/wn/${weatherImg}@2x.png`} alt='weather'
              width='50px'
              height='50px'
            />
            {temperature} °C

          </ListGroup.Item>

          <ListGroup.Item>

            <ButtonStyled variant='dark'>Info</ButtonStyled>

            <ButtonStyled variant='dark'>Delete</ButtonStyled>

          </ListGroup.Item>

        </ListGroup>

      </Card.Body>

    </CardStyled>
  )
}
