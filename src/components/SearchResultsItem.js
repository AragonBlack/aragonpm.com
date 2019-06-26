import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { H2, P, Bold, CustomCard } from './Styled'

const SearchResultsItem = ({ repository, history }) => {
  const goToPackage = () => history.push(`/package/${repository.id}`)
  return (
    <ResultItemCard width="100%" height="100%" onClick={goToPackage}>
      <H2>{repository.name}</H2>
      <P>
        <Bold>ID:</Bold> {repository.id}
      </P>
      <P>
        <Bold>Address:</Bold> {repository.address}
      </P>
      <P>
        <Bold>AppID:</Bold> {repository.appId}
      </P>
    </ResultItemCard>
  )
}

const ResultItemCard = styled(CustomCard)`
  cursor: pointer;
`

export default withRouter(SearchResultsItem)
