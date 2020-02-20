import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import media from '../Shared/Media'
import { Link } from 'react-router-dom'

export const Wrap = styled(Link)`
  display: flex;
  margin: 0;
  border: 0;
  text-decoration: none;
  padding: 20px 50px;
  outline: 0;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-color: ${palette.avast};
  background-position: center;
  cursor: pointer;
  font-size: ${props => props.text ? `${palette.textBody4}` : '0'};
  ${media.lg`
    background:${palette.avast};
    font-size: ${palette.textBody4};
    padding: 10px;
  `}
`

const Button = ({ children, img, text, to }) => (
  <Wrap to={to} text={text} img={img}>{children}</Wrap>
)

export default Button