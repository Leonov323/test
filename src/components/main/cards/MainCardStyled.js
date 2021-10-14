import { Card, Button, Spinner } from 'react-bootstrap'
import styled from 'styled-components'



export const CardStyled = styled(Card)`
    width: 18rem;
    height: 22rem;
    margin: 20px auto;
    
    .list-group {
        height: 11rem;
        display: ${({ value }) => value ? "none" : "block"}
    }
    .hide {
        
    }
    .card-body {
        cursor: pointer;
    }
`

export const ButtonStyled = styled(Button)`
    width: 100%;
    margin-bottom: 15px;
    cursor: ${({ value }) => value ? 'wait' : 'pointer'};
`

export const SpinnerStyled = styled(Spinner)`
    position: relative;
    top: 25%;
    margin: 0 auto;
    display: ${({ value }) => value ? "flex" : "none"};
`