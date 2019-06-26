import React from 'react'
import { Text, Card, theme } from '@aragon/ui'

export const H1 = props => {
  return (
    <Text
      as="h1"
      size="xxlarge"
      weight="bold"
      css={`
        color: ${theme.textPrimary};
      `}
    >
      {props.children}
    </Text>
  )
}

export const H2 = props => {
  return (
    <Text
      as="h2"
      size="xlarge"
      weight="bold"
      css={`
        color: ${theme.textPrimary};
      `}
    >
      {props.children}
    </Text>
  )
}

export const H3 = props => {
  return (
    <Text
      as="h3"
      size="large"
      weight="bold"
      css={`
        color: ${theme.textPrimary};
      `}
    >
      {props.children}
    </Text>
  )
}

export const P = props => {
  return (
    <Text
      as="p"
      css={`
        color: ${theme.textSecondary};
        word-wrap: break-word;
      `}
    >
      {props.children}
    </Text>
  )
}

export const Bold = props => {
  return <Text weight="bold">{props.children}</Text>
}

export const CustomCard = props => {
  return (
    <Card
      css={`
        margin-top: 5px;
        padding: 10px;
      `}
      {...props}
    >
      {props.children}
    </Card>
  )
}
