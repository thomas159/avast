import React, { useState, useEffect, useCallback } from 'react';
import data from '../../data'
import styled from 'styled-components'
import * as palette from '../../variables'
import Feature from '../Shared/Feature'
import CategoryFreeAntiVirus from '../Shared/CategoryFreeAntiVirus'
import CategoryPremiumSecuritySingle from '../Shared/CategoryPremiumSecuritySingle';
import CategoryPremiumSecurityMulti from '../Shared/CategoryPremiumSecurityMulti'
import CategoryUltimate from '../Shared/CategoryUltimate'
import StickyBlock from '../Shared/StickyBlock'
import StickyBlockMobile from '../Shared/StickyBlockMobile'
import InfoBlock from '../Shared/InfoBlock'
import TableFooter from '../Shared/TableFooter'
import media from '../Shared/Media'
import Carousel from '../Shared/Carousel'
import Download from '../../images/download-m.svg'
import Store from '../../images/store.svg'
import { buttontexts, linkTexts, protection, antiSpam } from '../../data/texts'

const Table = styled.table` 
  position: relative;
  width: 100%;
  ${media.lg`
    margin: 50px 0 100px 0;
  `}

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
  flex-direction: ${props => props.direction && 'column'};
  background: ${props => props.mobileBg && `${palette.grey03}`};
  border-bottom:  ${props => props.noBorder ? `0px solid ${palette.grey10}` : ` 1px solid ${palette.grey10}`};
  border-bottom: ${props => props.borderBottomOrange && `0px solid ${palette.avast}`};
  ${media.lg` 
    background: ${props => props.mobileBg && '#fff'};
    border-bottom: ${props => props.borderBottomOrange && `1px solid ${palette.avast}`};
  `}

  &:nth-child(1){
    flex: 0 0 100%;
    margin: 0 -1px;
    ${media.lg` 
      flex: 0 0 32%;
    `}
  }
  &:nth-child(2){
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
  
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 25%'};
    ${media.lg` 
      ${props => props.colCount === 2 && 'flex: 0 0 50%'};
      ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
      ${props => props.colCount === 4 && 'flex: 0 0 17%'};
      border-left: 1px solid ${palette.avast};
      border-right: 1px solid ${palette.avast};
    `}
  }
  &:nth-child(4){
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 25%'};
    ${media.lg` 
      ${props => props.colCount === 2 && 'flex: 0 0 50%'};
      ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
      ${props => props.colCount === 4 && 'flex: 0 0 17%'};
    `}
  }
  &:nth-child(5){
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 25%'};
    ${media.lg` 
      ${props => props.colCount === 2 && 'flex: 0 0 50%'};
      ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
      ${props => props.colCount === 4 && 'flex: 0 0 17%'};
    `}
  }
`

const TdRecommended = styled.td`
  display: flex;
  border-left: 0px solid ${palette.avast};
  border-right: 0px solid ${palette.avast};
  border-top: 0px solid ${palette.avast};
  border-bottom: 1px solid ${palette.grey10};
  ${props => props.colCount === 2 && 'flex: 0 0 50%'};
  ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
  ${props => props.colCount === 4 && 'flex: 0 0 25%'};
  ${media.lg` 
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 17%'};
    border-left: 1px solid ${palette.avast};
    border-right: 1px solid ${palette.avast};
    border-top: 1px solid ${palette.avast};
    border-bottom: 1px solid ${palette.grey10};
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
      font-size: ${palette.textBody5};
      lineHeight: ${palette.lineHeight4};
      background: ${palette.avast};
      border-radius: 10px;
      align-items: center;
      justify-content: center
    }
  `}
  padding: 0;
  position: relative;
`

const H2 = styled.h2`
  font-size: ${palette.textH2};
  line-height: ${palette.lineHeightH2};
  margin: 10px;
  text-align: left;
`

const HideDesktop = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  ${media.lg`
    display: none;
  `}
`

const AntiSpam = styled.span`
  visibility: hidden;
  ${media.lg`
    visibility: visible;
    padding: 20px 0 0 0;
    color: ${palette.purple};
  `}
`

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isVisibleDesktop, setIsVisibleDesktop] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1060)

  const displayWindowSize = () => {
    let w = window.innerWidth;
    if(w >= 1060) {
      return setIsDesktop(true)
    } else {
      return setIsDesktop(false)
    }    
  }
  
  const UpdateScrollPosition = useCallback(() => {
    const scrollPos = window.scrollY
    if( isDesktop && scrollPos < 520) {
      return setIsVisibleDesktop(false)
    }else if ((isDesktop && scrollPos >= 520) && (isDesktop && scrollPos <= 1350)) {
      return setIsVisibleDesktop(true)
    }else if (isDesktop && scrollPos > 1350) {
      return setIsVisibleDesktop(false)
    } else if(!isDesktop && scrollPos < 600) {
      return setIsVisible(false)
    }else if ((!isDesktop && scrollPos >= 600) && (!isDesktop && scrollPos <= 3350)) {
      return setIsVisible(true)
    }else if (!isDesktop && scrollPos > 3350) {
      return setIsVisible(false)
    }
  }, [isDesktop])
  
  useEffect(() => {
    displayWindowSize()
    window.addEventListener("scroll", UpdateScrollPosition)
    window.addEventListener("resize", displayWindowSize)
    return () => {
      window.removeEventListener("scroll", UpdateScrollPosition)
      window.removeEventListener("resize", displayWindowSize)
    }
  }, [UpdateScrollPosition])

  return (
    <React.Fragment>
        {isVisible && <StickyBlockMobile />}
        {isVisibleDesktop && <StickyBlock />}
        <Table>
          <Thead>
            <Tr>
              <Td mobileBg direction="true" noBorder colCount={4}>
                <H2>{protection.yourProtection}</H2>
                <H2>{protection.yourWay}</H2>
                <HideDesktop><Carousel /></HideDesktop>
              </Td>
              <Td colCount={4}>
                <CategoryFreeAntiVirus placeholder="true" learnMore />
              </Td>
              <TdRecommended colCount={4}>
                <CategoryPremiumSecuritySingle placeholder="true" learnMore />
              </TdRecommended>
              <Td colCount={4}>
              <CategoryPremiumSecurityMulti placeholder="true" learnMore />
              </Td>
              <Td colCount={4}>
                <CategoryUltimate placeholder="true" learnMore />
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
              <Td 
                colCount={4} 
                noBorder 
                noBorderBottom
              >
                <AntiSpam>{antiSpam.antiSpam}</AntiSpam>
              </Td>
              <Td colCount={4} 
                noBorder 
                noBorderBottom
              >
                <TableFooter 
                  img={Download} 
                  buttonText={buttontexts.freeDownload}  
                  to="#" 
                  linkText={linkTexts.free} 
                />
              </Td>
              <Td 
                colCount={4} 
                noBorder 
                borderBottomOrange  
              >
              <TableFooter 
                img={Store} 
                buttonText={buttontexts.buyNow} 
                to="#" 
                linkText={linkTexts.try30days} 
                underline="true"
              />
              </Td>
              <Td 
                colCount={4} 
                noBorder 
                noBorderBottom
              >
                <TableFooter 
                  img={Store} 
                  buttonText={buttontexts.buyNow} 
                  to="#" 
                  linkText={linkTexts.tryPC} 
                  underline="true"
                />
              </Td>
              <Td 
              colCount={4} 
              noBorder 
              noBorderBottom
              >
                <TableFooter 
                  img={Store} 
                  buttonText={buttontexts.buyNow} 
                  to="#" 
                />  
              </Td>
            </Tr>
          </Thead>
        </Table>
    </React.Fragment>
  )
}

export default Home;
