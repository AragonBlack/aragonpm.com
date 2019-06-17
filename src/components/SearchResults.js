import React from 'react'
import styled from 'styled-components'

import SearchResultsItem from './SearchResultsItem'

const SearchResults = ({ repositories }) => {
  return (
    <SearchResultsContainer>
      {repositories.map(r => (
        <SearchResultsItem repository={r} key={r.id} />
      ))}
    </SearchResultsContainer>
  )
}

const SearchResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export default SearchResults
