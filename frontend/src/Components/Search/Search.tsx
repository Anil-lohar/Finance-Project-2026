import React, { ChangeEvent, JSX, useState, SyntheticEvent } from 'react'

interface  Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e : ChangeEvent<HTMLInputElement>) => void;

}

const Search: React.FC<Props> = (
  {
    onSearchSubmit,
     search, 
     handleSearchChange
    }: Props): JSX.Element => {
   
  return (
    <>
      <form>
        <input value={search} onChange={handleSearchChange} />
        <button type="submit" onClick={onSearchSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Search