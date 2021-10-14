import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { CardStyled, ButtonStyled, SpinnerStyled } from './MainCardStyled'
import { useDispatch } from 'react-redux'
import { selectCount, increment } from '../../../store/features/counterSlice'
import { GetRefresh } from '../../../common/services/getRefresh'
import { setCity } from '../../../store/features/cityApiSlice'
import { GetWeather } from '../../../common/services/getWeather'

export const Cards = (props) => {
  const name = props.name
  const dispatch = useDispatch(selectCount)

  const Delete = () => {
    localStorage.removeItem(props.delete)
    dispatch(increment())
  }

  const HandleShowInfo = () => {
    dispatch(setCity(name))
    GetWeather()
    window.scrollTo(0, 0)
  }

  const [spinner, setSpinner] = useState(false)
  const Handle = () => {
    setSpinner(true)
    GetRefresh(name)
    setTimeout(() => {
      GetRefresh(name)
    }, 200)
    setTimeout(() => {
      setSpinner(false)
    }, 400)
  }

  return (
    <CardStyled value={spinner} >

      <Card.Body onClick={HandleShowInfo}>
        <Card.Title>{props.name}</Card.Title>

        <ListGroup variant="flush">

          <ListGroup.Item>
            <p>{props.description}</p>
          </ListGroup.Item>
          <ListGroup.Item>
            <Image
              src={`https://openweathermap.org/img/wn/${props.weatherImg}@2x.png`} alt='weather'
              width='50px'
              height='50px'
            />
            <span>{props.temperature} °C </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <p> Feels like {props.feels_like} °C</p>
          </ListGroup.Item>
        </ListGroup>

        <SpinnerStyled animation="border" variant="warning" value={spinner} />
      </Card.Body>
      <ButtonStyled
        variant='success'
        onClick={Handle}
        value={spinner}
      >
        Refresh
      </ButtonStyled>
      <ButtonStyled variant='danger' onClick={Delete}>Delete</ButtonStyled>
    </CardStyled>
  )
}

Cards.propTypes = {
  name: PropTypes.string,
  delete: PropTypes.string,
  description: PropTypes.string,
  temperature: PropTypes.number,
  feels_like: PropTypes.number,
  weatherImg: PropTypes.string
}
