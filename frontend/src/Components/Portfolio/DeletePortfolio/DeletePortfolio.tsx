import React, { SyntheticEvent } from 'react'

interface Props  {
    onPortfolioDelete?: (e: SyntheticEvent) => void;
    portfolioValue?: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <form onSubmit={onPortfolioDelete}>
        <input readOnly={true} hidden={true} value={portfolioValue} />
        <button type="submit">X</button>
    </form>
  )
}
 export default DeletePortfolio