import { Card, Button, Alert } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'

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

const animation = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const SavedAlertStyled = styled(Alert)`
    animation: ${animation} 1s linear;
    text-align: center;
    position: absolute;
    transition: all 1s linear;
    right: 0;
    display: ${props => props.animate ? 'block' : 'none'};
`
