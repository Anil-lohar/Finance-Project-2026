import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio'

interface Props {
  portfolioValues: string[];
  portfolioDelete?: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, portfolioDelete }: Props) => {
  return (
    <>
      <h1>My Portfolio</h1>
      <ul>
        {portfolioValues && portfolioValues.map((portfolioValue, index) => {
          return <CardPortfolio portfolioValue={portfolioValue} onPortfolioDelete={portfolioDelete} />
        })}
      </ul>
    </>
  )
}

export default ListPortfolio