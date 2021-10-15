import styled from 'styled-components'

export const ErrorStyled = styled.h6`
    position: absolute;
    top: 55px;
    margin: 0 auto;
    color: red;
    display: ${({ value }) => value ? 'block' : 'none'}
`
