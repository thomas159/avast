import React from 'react'
import styled from 'styled-components'
import CategoryFreeAntiVirus from './CategoryFreeAntiVirus'
import CategoryPremiumSecuritySingle from './CategoryPremiumSecuritySingle';
import CategoryPremiumSecurityMulti from './CategoryPremiumSecurityMulti'
import CategoryUltimate from './CategoryUltimate'
import { Sticky } from 'react-sticky'

const Wrap = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex: auto;
  background: #fff;
  box-shadow: -1px 25px 15px -1px rgba(0,0,0,0.17);
`

const Cell = styled.div`
  &:nth-child(1) {
    flex: 0 0 32%;
  }
  &:nth-child(2) {
    flex: 0 0 17%;
  }
  &:nth-child(3) {
    flex: 0 0 17%;
  }
  &:nth-child(4) {
    flex: 0 0 17%;
  }
  &:nth-child(5) {
    flex: 0 0 17%;
  }
`

const StickyBlock = () => {
  return (
    <Sticky topOffset={380}>{({ style }) => 
      <Wrap>
        <Cell></Cell>
        <Cell>
          <CategoryFreeAntiVirus />
        </Cell>
        <Cell>
          <CategoryPremiumSecuritySingle />
        </Cell>
        <Cell>
          <CategoryPremiumSecurityMulti />
        </Cell>
        <Cell>
          <CategoryUltimate />
        </Cell>
      </Wrap>
    }</Sticky>
  )
}

export default StickyBlock
