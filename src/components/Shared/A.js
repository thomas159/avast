import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as palette from '../../variables'

const ALink = styled(Link)`
  background: inherit;
  cursor: pointer;
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  text-transform: ${props => (props.underline ? 'uppercase' : 'capitalize')};
  align-items: center;
  justify-content: center;
  line-height: ${palette.lineHeight4};
  font-size: ${palette.textBody4};
  &:active,
  &:visited {
    color: ${palette.purple};
  }
`

const A = ({ children, to, underline }) => (
  <ALink to={to} underline={underline}>
    {children}
  </ALink>
)

export default A
