import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import { Cross, Tick } from '../../images/index'

const Wrap = styled.div`
  display: flex;
  background: #ddd;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  background: ${props => props.showTick ? `${palette.violetLight}` : '#fff' };
`

const Feature = ({ showTick }) => (
  <Wrap showTick={showTick}>{showTick ? <Tick /> : <Cross /> }</Wrap>
)

export default Feature