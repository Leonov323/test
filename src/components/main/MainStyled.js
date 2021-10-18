import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'

export const MainStyled = styled(Container)`
    width: 100%;
    min-height: calc(100vh - 50px);
    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
    }
`

export const Row1 = styled(Row)`
    height: 20vh;
`

export const Row2 = styled(Row)`
    min-height: 75vh;
`

export const Row3 = styled(Row)`
    min-height: 30rem;
    display: flex;
    justify-content: space-around;
    align-items: space-around;
`

export const Col1 = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`
