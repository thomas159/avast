import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import Info from '../../images/info.svg'
import InfoHover from '../../images/info-hover.svg'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

const TextWrap = styled.div`
  flex: 0 0 1;
`

const InfoWrap = styled.div`
  display: flex;
  flex: 0 0 60px;
  justify-content: center;
`
const Tooltip = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px; 
  position: absolute;
  z-index: 1;
`
const InfoSvg = styled.div`
  cursor: pointer;
  background: url(${props => props.bg});
  width: 16px;
  height: 16px;
  &:hover {
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
  color: ${palette.purple};
  &::first-letter {
    text-transform: uppercase;
  }
`

const Text = styled.div`
  display: block;
  text-align: left;
  &::first-letter {
    text-transform: uppercase;
  } 

`




const InfoBlock = ({ title, text }) => (
  <Wrap>
    <TextWrap>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </TextWrap>
    <InfoWrap>
      <InfoSvg bg={Info} hover={InfoHover}>
      <Tooltip />
        </InfoSvg >
    </InfoWrap>
  </Wrap>
)

export default InfoBlock