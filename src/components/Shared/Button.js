import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import media from '../Shared/Media'

export const Wrap = styled.button`
  display: flex;
  margin: 0;
  border: 0;
  padding: 0;
  outline: 0;
  width: auto;
  padding: 10px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  background: ${palette.avast} url(${props => props.img});
  cursor: pointer;
  &:hover {
    transition: all 0.25s ease;
    background: ${palette.avast};
  }
  ${media.lg`
  background: none;
  `}
`

const Button = ({ children, img }) => (
  <Wrap img={img}>{children}</Wrap>
)

export default Button