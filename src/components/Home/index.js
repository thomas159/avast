import React from 'react';
import data from '../../data'
import styled from 'styled-components'
import Container from '../Shared/Container'
import * as palette from '../../variables'
import Feature from '../Shared/Feature'
import CategoryFreeAntiVirus from '../Shared/CategoryFreeAntiVirus'
import CategoryPremiumSecuritySingle from '../Shared/CategoryPremiumSecuritySingle';
import CategoryPremiumSecurityMulti from '../Shared/CategoryPremiumSecurityMulti'
import CategoryUltimate from '../Shared/CategoryUltimate'
import StickyBlock from '../Shared/StickyBlock'
import InfoBlock from '../Shared/InfoBlock'
import { StickyContainer, Sticky } from 'react-sticky';
import { BrowserRouter as router, Router } from 'react-router-dom'
import TableFooter from '../Shared/TableFooter'
import media from '../Shared/Media'
import Carousel from '../Shared/Carousel'

const Table = styled.table` 
  width: 100%;
  margin: 50px 0 0 0;
`
const Tr = styled.tr`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`

const Thead = styled.thead`
  display: flex;
`

const Tbody = styled.tbody`
  display: flex;
  flex-wrap: wrap;
`

const Td = styled.td`
  display: flex;
  padding: 0;
  border-bottom: 1px solid ${props => props.noBorder ? 'none' : `${palette.grey10}`};
  ${media.lg` 
    border-bottom: 1px solid ${palette.grey10};
  `}

  &:nth-child(1){
    flex: 0 0 100%;
    margin: 0 -1px;
    ${media.lg` 
      flex: 0 0 32%;
      border-bottom: 1px solid ${palette.grey10};
    `}
  }
  &:nth-child(2){
    border-bottom: 1px solid ${palette.grey10};
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 25%'};
    ${media.lg` 
      ${props => props.colCount === 2 && 'flex: 0 0 50%'};
      ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
      ${props => props.colCount === 4 && 'flex: 0 0 17%'};
    `}
  }
  &:nth-child(3){
    border-left: 0px solid ${palette.avast};
    border-right: 0px solid ${palette.avast};
    border-bottom: 1px solid ${palette.grey10};
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 25%'};
    ${media.lg` 
      ${props => props.colCount === 2 && 'flex: 0 0 50%'};
      ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
      ${props => props.colCount === 4 && 'flex: 0 0 17%'};
      border-bottom: 1px solid ${palette.grey10};
      border-left: 1px solid ${palette.avast};
      border-right: 1px solid ${palette.avast};
    `}
    
  }
  &:nth-child(4){
    border-bottom: 1px solid ${palette.grey10};
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 25%'};
    ${media.lg` 
      ${props => props.colCount === 2 && 'flex: 0 0 50%'};
      ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
      ${props => props.colCount === 4 && 'flex: 0 0 17%'};
      border-bottom: 1px solid ${palette.grey10};
    `}
  }
  &:nth-child(5){
    border-bottom: 1px solid ${palette.grey10};
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 25%'};
    ${media.lg` 
      ${props => props.colCount === 2 && 'flex: 0 0 50%'};
      ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
      ${props => props.colCount === 4 && 'flex: 0 0 17%'};
      border-bottom: 1px solid ${palette.grey10};
    `}
  }
`

const TdRecommended = styled.td`
  display: flex;
  ${props => props.colCount === 2 && 'flex: 0 0 50%'};
  ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
  ${props => props.colCount === 4 && 'flex: 0 0 25%'};
  ${media.lg` 
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 17%'};
  `}
  padding: 0;
  position: relative;
  border-left: 1px solid ${palette.avast};
  border-right: 1px solid ${palette.avast};
  border-top: 1px solid ${palette.avast};
  &::before {
    content: "Recommended";
    position: absolute;
    display: flex;
    top: -10px;
    left: calc(50% - 50px);
    text-transform: uppercase;
    width: 100px;
    height: 20px;
    color: #fff;
    font-size: ${palette.textExtraSmall};
    background: ${palette.avast};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
`

const H1 = styled.h1`
  font-size: ${palette.textExtraLarge};
`

const HideDesktop = styled.div`
  visibility: visible;
  width: 100%;
  ${media.lg`
    visibility: hidden;
  `}
`

const HideMobile = styled.div`
  display: none;
  ${media.lg`
    visibility: visible;
  `}
`
const AntiSpam = styled.span`
  visibility: hidden;
  ${media.lg`
    visibility: visible;
  `}
`

const Home = () => {
  return (
    <Container>
        <Table>
          <Thead>
            <Tr>
              <Td noBorder colCount={4}>
                <HideMobile><H1>Your protection, your way</H1></HideMobile>
                <HideDesktop><Carousel /></HideDesktop>
              </Td>
              <Td colCount={4}>
                <CategoryFreeAntiVirus />
              </Td>
              <TdRecommended colCount={4}>
                <CategoryPremiumSecuritySingle />
              </TdRecommended>
              <Td colCount={4}>
              <CategoryPremiumSecurityMulti />
              </Td>
              <Td colCount={4}>
                <CategoryUltimate />
              </Td>
            </Tr>
          </Thead>
          <Tbody>
          {data.map(item => 
            <Tr key={item.title}>
              <Td>
                <InfoBlock info svg={item.svg} title={item.title} text={item.text} />
              </Td>
              <Td colCount={4}>
                <Feature showTick={item.colA} />
              </Td>
              <Td colCount={4}>
                <Feature showTick={item.colB} />
              </Td>
              <Td colCount={4}>
                <Feature showTick={item.colC} />
              </Td>
              <Td colCount={4}>
                <Feature showTick={item.colD} />
              </Td>
            </Tr>
            )}
            </Tbody>
            <Thead>
            <Tr>
              <Td colCount={4} noBorder>
                <AntiSpam>* anti spam is available as a seperate free download.</AntiSpam>
              </Td>
              <Td colCount={4}>
                <TableFooter buttonText="free download"  to="#" linkText="Free Forever"/>
              </Td>
              <Td colCount={4}>
              <TableFooter buttonText="buy now" to="#" linkText="try for 30 days" underline />
              </Td>
              <Td colCount={4}>
                <TableFooter buttonText="buy now" to="#" linkText="try for 30 days on pc" underline />
              </Td>
              <Td colCount={4}>
                <TableFooter buttonText="buy now" to="#" />  
              </Td>
            </Tr>
          </Thead>
        </Table>
    </Container>
  )
}

export default Home;
