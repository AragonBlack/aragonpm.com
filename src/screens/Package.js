import React from 'react'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'
import semver from 'semver'
import { H2, H3, P, Bold, CustomCard } from '../components/Styled'
import RepositoryById from '../queries/repositoryById.gql'

const Package = ({ match }) => {
  const getVersions = versions => {
    return versions
      .sort((a, b) => {
        const aVersion = a.version.replace(/,/gi, '.')
        const bVersion = b.version.replace(/,/gi, '.')
        return semver.compare(aVersion, bVersion)
      })
      .reverse()
      .map(v => {
        return (
          <CustomCard width="100%" height="100%" key={v.id}>
            <P>
              <Bold>Version:</Bold> {v.version}
            </P>
            <P>
              <Bold>Contract:</Bold> {v.contract}
            </P>
            <P>
              <Bold>Content:</Bold> {v.content}
            </P>
          </CustomCard>
        )
      })
  }
  return (
    <Query query={RepositoryById} variables={{ id: match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        const r = data.repository
        return (
          <div className="package">
            <H2>{r.name}</H2>
            <P>
              <Bold>ID:</Bold> {r.id}
            </P>
            <P>
              <Bold>Address:</Bold> {r.address}
            </P>
            <P>
              <Bold>AppID:</Bold> {r.appId}
            </P>
            {r.versions.length > 0 && <H3>Versions</H3>}
            {getVersions(r.versions)}
          </div>
        )
      }}
    </Query>
  )
}

export default withRouter(Package)
