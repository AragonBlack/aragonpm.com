import React, { useState } from 'react'
import { TextInput } from '@aragon/ui'
import { Query } from 'react-apollo'
import { P } from './Styled'
import SearchResults from './SearchResults'

import RepositoriesNameContains from '../queries/repositoriesNameContains.gql'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('%%')
  const handleChange = e => {
    const value = e.target.value
    // debounce change
    setTimeout(() => {
      setSearchQuery(`%${value}%`)
    }, 300)
  }
  return (
    <div className="App">
      <TextInput wide onChange={handleChange} placeholder="Search for aragon apps" />
      <Query query={RepositoriesNameContains} variables={{ searchQuery }}>
        {({ loading, error, data }) => {
          if (loading) return <P>Loading...</P>
          if (error) return <P>Error, please retry</P>
          return <SearchResults repositories={data.repositories} />
        }}
      </Query>
    </div>
  )
}

export default SearchBar
