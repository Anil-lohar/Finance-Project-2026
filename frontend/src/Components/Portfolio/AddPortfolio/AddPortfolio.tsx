import React, { SyntheticEvent } from 'react'

interface Props {
    onPortfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

function AddPortfolio({onPortfolioCreate, symbol}: Props) {
  return (
    <form onSubmit={onPortfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type="submit">AddPortfolio</button>

    </form>
  )
}

export default AddPortfolio