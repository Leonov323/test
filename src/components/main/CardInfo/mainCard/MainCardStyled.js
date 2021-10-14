import { Card, Button } from 'react-bootstrap'
import styled from 'styled-components'

export const CardStyled = styled(Card)`
    width: 18rem;
    height: 21rem;
    margin: 0 auto;
    @media (max-width: 321px) {
        width: 100%;
    }
`

export const ButtonStyled = styled(Button)`
    width: 100%;
`
