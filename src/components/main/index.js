import React from 'react'
import { MainStyled, Row1, Row2, Row3, Col1 } from './MainStyled'
import { SearchForm } from './searchForm'
import { CardInfo } from './CardInfo'
import { CardList } from '../../common/map'
import { useSelector } from 'react-redux'
import { selectCount } from '../../store/features/counterSlice'

export const Main = () => {
  const count = useSelector(selectCount)

  React.useEffect(() => { CardList() }, [count])

  return (
        <MainStyled>
            <Row1>
                <Col1>
                    <SearchForm />
                </Col1>
            </Row1>
            <Row2>
                <Col1>
                    <CardInfo />
                </Col1>
            </Row2>
            <Row3>
                <CardList />
            </Row3>
        </MainStyled>
  )
}
