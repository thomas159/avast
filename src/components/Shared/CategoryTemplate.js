import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import Placeholder from '../../images/img@3x.png'
import Button from '../Shared/Button'
import A from '../Shared/A'
import media from '../Shared/Media'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Title = styled.span`
  display: flex;
  font-size: ${palette.textBody1};
  font-weight: 700;
  text-transform: capitalize;
  flex: 1;
  padding: 20px 0 30px 0;
  
`

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Device = styled.span`
  font-size: ${palette.textBody4};
  color: ${palette.purple};
  margin: 0 0 30px 0;
`

const Svg = styled.img`
  width: 52px;
  height: 68px;
  margin: 40px 0 0 0;
`

const ImagePlaceholder = styled.div`
  display: none;
  ${media.lg`
    display: flex;
    padding: 0 30px;
    margin-bottom: 41px;
  `}
`
const Image = styled.img`
  width: 100%;
`

const Price = styled.span`
  font-size: ${palette.textBody3};
  font-weight: 700;
  margin: 0 0 25px 0;
  ${media.lg`
    font-size:  ${palette.textBody1};
  `}
`

const LearnMoreWrap = styled.div`
  margin: 0 0 72px 0;
`

const LearnMore = styled(A)`
  display: block;
`

const Year = styled.span`
  font-size: ${palette.textBody3};
`

const ButtonWrap = styled.div`
  padding: 0 0 20px 0;
`

const CategoryTemplate = ({svg, learnMore, placeholder, buttonImg, to, text, title, device, price, buttonText, year}) => {
  return(
    <Wrap>
      <Svg src={svg}></Svg>
      <Title>{title}</Title>
      <InfoWrap>
        <Device>{device}</Device>
        {placeholder && <ImagePlaceholder><Image src={Placeholder} /></ImagePlaceholder>}
        <Price>{price}{year && <Year>/year</Year>}</Price>
        {(buttonText || buttonImg) && <ButtonWrap><Button text={text} img={buttonImg} to={to}>{buttonText}</Button></ButtonWrap>}
        {learnMore && 
          <LearnMoreWrap>
            <LearnMore underline="true" to="/learnMore">Learn More</LearnMore>
          </LearnMoreWrap>
        }
      </InfoWrap>
    </Wrap>
  )
}

export default CategoryTemplate