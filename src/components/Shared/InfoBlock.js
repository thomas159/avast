import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import Info from '../../images/info.svg'
import InfoHover from '../../images/info-hover.svg'
import media from '../Shared/Media'
import passwordsPremium from '../../images/passwords-premium.svg'
import cleanUpPremium from '../../images/clean-up-premium.svg'
import vpn from '../../images/vpn.svg'
import { tooltip } from '../../data/texts'

const Wrap = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex: 0 0 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 80px;
  background: ${palette.grey03};
  ${media.lg`
    background: #fff;
    height: auto;
  `}
`

const TextWrap = styled.div`
  flex: 1;
  ${media.lg`
    flex: 1;
    padding: ${props => (props.svg ? '0 0 0 40px' : '0')};
  `}
`

const InfoWrap = styled.div`
  display: flex;
  flex: 0 0 60px;
  justify-content: center;
`

const Tooltip = styled.div`
  visibility: hidden;
  width: 300px;
  background-color: ${palette.plum};
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  ${media.xs`
    position: absolute;
    left: -310px;
    bottom: -15px;
    &:after {
      content: '';
      position: absolute;
      display: block;    
      width: 0px;        
      right: 0;
      top: 50%;
      border: 5px solid transparent;
      border-right: 0;
      border-left: 5px solid ${palette.plum};
      transform: translate(calc(100% + 0px), -50%);  
  `}

  ${media.lg`
    left: -142px;
    bottom: 30px;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      display: block;    
      width: 0px;        
      left: 50%;
      bottom: 0;
      border: 5px solid transparent;
      border-bottom: 0;
      border-top: 5px solid ${palette.plum};
      transform: translate(-50%, calc(100% + 0px));
    }
      `}
`

const InfoSvg = styled.div`
  position: relative;
  cursor: pointer;
  background: url(${props => props.bg});
  width: 16px;
  height: 16px;
  &:hover,
  &:focus,
  &:active {
    background: url(${props => props.hover});
    ${Tooltip} {
      visibility: visible;
    }
  }
`

const Title = styled.div`
  display: block;
  text-align: left;
  justify-content: flex-start;
  color: ${palette.plum};
  font-size: ${palette.textBody3};
  line-height: ${palette.textBody3};
  font-weight: 700;
  &::first-letter {
    text-transform: uppercase;
  }
  ${media.lg`
    font-size: ${palette.textBody3};
    padding: 0 0 10px 0;
  `}
`

const Text = styled.div`
  display: none;
  text-align: left;
  color: ${palette.purple};
  &::first-letter {
    text-transform: uppercase;
  }
  ${media.lg`
    display: block;
  `}
`

const Svg = styled.img`
  position: absolute;
  left: -30px;
  top: 10px;
  border: 1px solid ${palette.border};
  border-radius: 50%;
  background: #fff;
  padding: 10px;
  box-shadow: -1px 18px 22px 0px rgba(8, 4, 43, 0.1);
`

const SvgBlock = styled.div`
  visibility: hidden;
  ${media.lg`
    visibility: visible;
  `}
`

const InfoBlock = ({ info, svg, title, text }) => (
  <Wrap>
    <SvgBlock>
      {svg === 'passwordsPremium' && <Svg src={passwordsPremium} />}
      {svg === 'cleanUpPremium' && <Svg src={cleanUpPremium} />}
      {svg === 'vpn' && <Svg src={vpn} />}
    </SvgBlock>
    <TextWrap svg={svg}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </TextWrap>
    {info && (
      <InfoWrap>
        <InfoSvg bg={Info} hover={InfoHover}>
          <Tooltip>{tooltip.tooltip}</Tooltip>
        </InfoSvg>
      </InfoWrap>
    )}
  </Wrap>
)

export default InfoBlock
