import React from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { CardStyled, ButtonStyled } from './MainCardStyled'
import { useDispatch, useSelector } from 'react-redux'
import { selectCount } from '../../../store/features/counterSlice'
import { increment } from '../../../store/features/counterSlice'
import { GetRefresh } from '../../../common/services/getRefresh'
import { selectRefresh } from '../../../store/features/refreshDataSlice'
import { TakeData } from '../CardInfo/takeData'
import { selectRefreshLoading } from '../../../store/features/refreshLoadingSlice'

export const Cards = (props) => {

  const dispatch = useDispatch(selectCount)

  const Delete = () => {
    localStorage.removeItem(props.delete)
    dispatch(increment())
  }

  const data = useSelector(selectRefresh)
  const loading = useSelector(selectRefreshLoading)

  const HandleRefresh = () => {

    GetRefresh(props.name)

    localStorage.removeItem(props.name)

    const name = TakeData(loading ? '' : data.name)
    const temperature = Math.floor(TakeData(loading ? '' : data.main.temp) - 273.15)
    const feels_like = Math.floor(TakeData(loading ? '' : data.main.feels_like) - 273.15)
    const weatherImg = TakeData(loading ? '' : data.weather[0].icon)
    const description = TakeData(loading ? '' : data.weather[0].main)

    const storage = {
      name: name,
      temperature: temperature,
      feels_like: feels_like,
      weatherImg: weatherImg,
      description: description
    }

    localStorage.setItem(name, JSON.stringify(storage))

  }

  return (
    <CardStyled>

      <Card.Body>

        <Card.Title>{props.name}</Card.Title>

        <ListGroup variant="flush">
          <ListGroup.Item>
            <p>{props.description}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image
              src={`http://openweathermap.org/img/wn/${props.weatherImg}@2x.png`} alt='weather'
              width='50px'
              height='50px'
            />
            <span>{props.temperature} °C </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <p> Feels like {props.feels_like} °C</p>
          </ListGroup.Item>

          <ListGroup.Item>

            <ButtonStyled variant='success' onClick={HandleRefresh}>Refresh</ButtonStyled>
            <ButtonStyled variant='danger' onClick={Delete}>Delete</ButtonStyled>

          </ListGroup.Item>

        </ListGroup>

      </Card.Body>

    </CardStyled>
  )
}