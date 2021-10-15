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
    10% { opacity: 1; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`

export const SavedAlertStyled = styled(Alert)`
    animation: ${animation} 3s ease-out;
    text-align: center;
    position: absolute;
    transition: all 1s linear;
    right: 0;
    opacity: 0;
    display: ${props => props.animate ? 'block' : 'none'};
`
