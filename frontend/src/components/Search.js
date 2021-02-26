import { useEffect } from 'react'

const Search = ({ token, setCards, setSearch, search, cards }) => {
  // useEffect(() => {
  //   cards.filter()
  // }, [search])

  return (
    <div>
      <button
        onClick={() => setSearch('Band')}
      >Bands
      </button>
      <button
        onClick={() => setSearch('Individual')}
      >Solo Artists
      </button>
      <button
        onClick={() => setSearch('')}
      >Clear Search
      </button>
    </div>
  )
}

export default Search
