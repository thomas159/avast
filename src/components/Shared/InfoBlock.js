import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import Info from '../../images/info.svg'
import InfoHover from '../../images/info-hover.svg'
import media from '../Shared/Media'
import passwordsPremium from '../../images/passwords-premium.svg'
import cleanUpPremium from '../../images/clean-up-premium.svg'
import vpn from '../../images/vpn.svg'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
  width: 100%;
  ${media.lg`
    flex: 1;
    padding: ${props => props.svg ? '0 0 0 40px' : '0' };
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
  position: absolute;
  left: -134px;
  bottom: 30px;
  z-index: 1;
  &:after {
    border-left: solid transparent 5px;
    border-right: solid transparent 5px;
    border-top: solid #000 5px;
    bottom: -5px;
    content: " ";
    height: 0;
    left: 50%;
    margin-left: -13px;
    position: absolute;
    width: 0;
`

const InfoSvg = styled.div`
  position: relative;
  cursor: pointer;
  background: url(${props => props.bg});
  width: 16px;
  height: 16px;
  &:hover, &:focus, &:active {
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
  font-size: ${palette.textLarge};
  font-weight: 700;
  &::first-letter {
    text-transform: uppercase;
  }
  ${media.lg`
    font-size: ${palette.textMedium};
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
  left: 0;
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
    {svg === 'passwordsPremium' &&<Svg src={passwordsPremium} />}
    {svg === 'cleanUpPremium' &&<Svg src={cleanUpPremium} />}
    {svg === 'vpn' &&<Svg src={vpn} />}
    </SvgBlock>
    <TextWrap svg={svg}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </TextWrap>
    {info && <InfoWrap>
      <InfoSvg bg={Info} hover={InfoHover}>
      <Tooltip> Tootip text shouldn't be longer than two lines, but sometimes it's unavoidable</Tooltip>
        </InfoSvg >
    </InfoWrap>
    }
  </Wrap>
)

export default InfoBlock