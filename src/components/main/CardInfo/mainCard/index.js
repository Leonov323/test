import React from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectResData } from '../../../../store/features/resDataSlice'
import { CardStyled, ButtonStyled, SavedAlertStyled } from './MainCardStyled'
import { TakeData } from '../takeData'
import { selectLoading } from '../../../../store/features/loadingSlice'
import { increment } from '../../../../store/features/counterSlice'
import { selectSaved, setSavedTrue } from '../../../../store/features/savedSlice'

export const MainCard = () => {
  const loading = useSelector(selectLoading)
  const data = useSelector(selectResData)
  const saved = useSelector(selectSaved)
  const dispatch = useDispatch()

  const name = TakeData(loading ? '' : data.name)
  const temperature = Math.floor(TakeData(loading ? '' : data.main.temp) - 273.15)
  const feelsLike = Math.floor(TakeData(loading ? '' : data.main.feelsLike) - 273.15)
  const weatherImg = TakeData(loading ? '50d' : data.weather[0].icon)
  const description = TakeData(loading ? '' : data.weather[0].main)

  const storage = {
    name: name,
    temperature: temperature,
    feelsLike: feelsLike,
    weatherImg: weatherImg,
    description: description
  }

  const Save = () => {
    dispatch(setSavedTrue())
    dispatch(increment())
    localStorage.setItem(name, JSON.stringify(storage))
  }

  return (
    <CardStyled>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <p>{description}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherImg}@2x.png`} alt='weather'
              width='50px'
              height='50px'
            />
            <span>{temperature} °C </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <p> Feels like {feelsLike} °C</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <ButtonStyled variant='dark' onClick={Save}>Save</ButtonStyled>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <SavedAlertStyled animate={saved}>Saved</SavedAlertStyled>
    </CardStyled>
  )
}
