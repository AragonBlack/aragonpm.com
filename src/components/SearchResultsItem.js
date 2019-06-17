import React from 'react'
import styled from 'styled-components'

import { Card, Text, theme } from '@aragon/ui'

const h2 = { color: theme.textPrimary }
const span = { color: theme.textSecondary }

const SearchResultsItem = ({ repository }) => {
  console.log(repository)
  return (
    <CustomCard width="45%">
      <Text as="h2" size="xlarge" weight="bold" style={h2}>
        {repository.name}
      </Text>
      <Text style={span}>{repository.address}</Text>
    </CustomCard>
  )
}

const CustomCard = styled(Card)`
  margin-top: 5px;
  margin-left: 5px;
`
export default SearchResultsItem
