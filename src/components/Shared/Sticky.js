import React from 'react'
import styled from 'styled-components'
import CategoryFreeAntiVirus from './CategoryFreeAntiVirus'
import CategoryPremiumSecuritySingle from './CategoryPremiumSecuritySingle';
import CategoryPremiumSecurityMulti from './CategoryPremiumSecurityMulti'
import CategoryUltimate from './CategoryUltimate'

const Wrap = styled.div`
  display: flex;
  flex: auto;
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

const Sticky = () => {
  return (
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
  )
}

export default Sticky
