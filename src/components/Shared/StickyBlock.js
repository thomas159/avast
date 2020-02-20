import React from 'react'
import styled from 'styled-components'
import CategoryFreeAntiVirus from './CategoryFreeAntiVirus'
import CategoryPremiumSecuritySingle from './CategoryPremiumSecuritySingle';
import CategoryPremiumSecurityMulti from './CategoryPremiumSecurityMulti'
import CategoryUltimate from './CategoryUltimate'
import * as palette from '../../variables'

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
  width: 980px;
  background: #fff;
  box-shadow: -1px 25px 15px -1px rgba(0,0,0,0.17);
`

const Cell = styled.div`
  display: flex;
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
const H4 = styled.h4`
  font-size: ${palette.textH4};
  text-align: left;
`

const Tagline = styled.div`
  padding: 20px;
`

const StickyBlock = () => {
  return (
    <StyledContainer>
      <Wrap>
        <Cell>
          <Tagline>
            <div><H4>Your Protection,</H4></div>
            <div><H4>your way</H4></div>
          </Tagline>
        </Cell>
        <Cell>
          <CategoryFreeAntiVirus buttonText="Free Download" />
        </Cell>
        <Cell>
          <CategoryPremiumSecuritySingle buttonText="Buy Now" />
        </Cell>
        <Cell>
          <CategoryPremiumSecurityMulti buttonText="Buy Now" />
        </Cell>
        <Cell>
          <CategoryUltimate buttonText="Buy Now" />
        </Cell>
      </Wrap>
    </StyledContainer>
  )
}

export default StickyBlock
