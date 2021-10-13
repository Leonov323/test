import React from 'react'
import { WrapperStyled, Row1, Row2, Row3, Col1, Col2 } from './MainStyled'
import { SearchForm } from './searchForm'
import { Cards } from './cards'
import { CardInfo } from './CardInfo'

export const Main = () => {
    return (
        <WrapperStyled>
            <Row1>
                <Col1>
                    <SearchForm />
                </Col1>
            </Row1>
            <Row2>
                <Col2>
                    <CardInfo />
                </Col2>
            </Row2>
            <Row3>
                <Cards />
            </Row3>
        </WrapperStyled>
    )
}
