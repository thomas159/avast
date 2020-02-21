import React from 'react'
import styled from 'styled-components'
import CategoryFreeAntiVirus from './CategoryFreeAntiVirus'
import CategoryPremiumSecuritySingle from './CategoryPremiumSecuritySingle';
import CategoryPremiumSecurityMulti from './CategoryPremiumSecurityMulti'
import CategoryUltimate from './CategoryUltimate'
import Store from '../../images/store.svg'
import Download from '../../images/download-m.svg'

const StyledContainer = styled.div`
  display: flex;
  flex: auto;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
`

const Wrap = styled.div`
  display: flex;
  width: calc( 100% - 80px);
  background: #fff;
  box-shadow: -1px 25px 15px -1px rgba(0,0,0,0.17);
`

const Cell = styled.div`
  display: flex;
  &:nth-child(1) {
    flex: 0 0 25%;
  }
  &:nth-child(2) {
    flex: 0 0 25%;
  }
  &:nth-child(3) {
    flex: 0 0 25%;
  }
  &:nth-child(4) {
    flex: 0 0 25%;
  }
`

const StickyBlockMobile = () => {
  return (
    <StyledContainer>
      <Wrap>
        <Cell>
          <CategoryFreeAntiVirus buttonImg={Download} />
        </Cell>
        <Cell>
          <CategoryPremiumSecuritySingle buttonImg={Store} />
        </Cell>
        <Cell>
          <CategoryPremiumSecurityMulti buttonImg={Store} />
        </Cell>
        <Cell>
          <CategoryUltimate buttonImg={Store} />
        </Cell>
      </Wrap>
    </StyledContainer>
  )
}

export default StickyBlockMobile
