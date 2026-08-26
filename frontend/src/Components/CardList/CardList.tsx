import React, { JSX } from 'react'
import Card from '../Card/Card'
import Search from '../Search/Search'

interface Props {}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Search />
        <Card companyName='Apple' ticker='AAPL' price={100}  />
        <Card companyName='Microsoft' ticker='MSFT' price={200} />
        <Card companyName='Google' ticker='GOOGL' price={150} />
    </div>
  )
}

export default CardList