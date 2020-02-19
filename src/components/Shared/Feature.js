import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import { Cross, Tick } from '../../images/index'
import media from '../Shared/Media'

const Wrap = styled.div`
  display: flex;
  background: #ddd;
  width: 100%;
  padding: 30px 0;
  align-items: center;
  justify-content: center;
  background: ${props => props.showTick ? `${palette.violetLight}` : '#fff' };
  ${media.lg`
    height: auto;
  `}
`

const Feature = ({ showTick }) => (
  <Wrap showTick={showTick}>{showTick ? <Tick /> : <Cross /> }</Wrap>
)

export default Feature
