import React, { ChangeEvent, JSX, useState, SyntheticEvent } from 'react'

interface  Props {
  onClick: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleChange: (e : ChangeEvent<HTMLInputElement>) => void;

}

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {
   
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={(e) => onClick(e)}>Search</button>
    </div>
  )
}

export default Search