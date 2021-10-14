import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MainCard } from './mainCard'
import { useSelector } from 'react-redux'
import { selectResData } from '../../../store/features/resDataSlice'
import { selectLoading } from '../../../store/features/loadingSlice'
import { TakeData } from './takeData'

export const CardInfo = () => {

  const loading = useSelector(selectLoading)
  const data = useSelector(selectResData)

  const humidity = TakeData(loading ? '' : data.main.humidity)
  const pressure = TakeData(loading ? '' : data.main.pressure)
  const max = Math.floor(TakeData(loading ? '' : data.main.temp_max) - 273.15)
  const min = Math.floor(TakeData(loading ? '' : data.main.temp_min) - 273.15)

  const date = new Date('2015-02-24T21:23').toLocaleDateString()
  const time = new Date().toLocaleTimeString()

  return (
    <Container>
      <Row>
        <Col md={6}>
          <MainCard />
        </Col>
        <Col>
          <hr />
          <h5>{date} {time}</h5>
          <hr />
          <p>Humidity: {humidity}</p>
          <p>Pressure: {pressure} </p>
          <p>Max temperature: {max}</p>
          <p>Min temperature: {min}</p>
          <hr />
        </Col>
      </Row>
    </Container>

  )
}
