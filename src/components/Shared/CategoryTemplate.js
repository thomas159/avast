import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import placeholder from '../../images/img@3x.png'
import Button from '../Shared/Button'
import { Link } from 'react-router-dom'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Title = styled.h2`
  display: flex;
  font-size: ${palette.textLarge};
  text-transform: capitalize;
  flex: 1;
`

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`

const Device = styled.h4`
  font-size: ${palette.textSmall};
  padding: 10px 0;
`

const ImagePlaceholder = styled.img`
  width: 40px;
`

const Price = styled.span`
  font-size: ${palette.textExtraLarge};
`

const LearnMore = styled(Link)`
  display: block;
  padding: 20px 0;
`

const Year = styled.span`
  font-size: ${palette.textMedium};
`

const CategoryTemplate = ({img, to, title, device, price, buttonText, year}) => {
  return(
    <Wrap>
      {img && <ImagePlaceholder src={img}></ImagePlaceholder>}
      <Title>{title}</Title>
      <InfoWrap>
        <Device>{device}</Device>
        <Price>{price}{year && <Year>/year</Year>}</Price>
        {buttonText && <Button to={to}>{buttonText}</Button>}
        {LearnMore && <LearnMore to="/learnMore">Learn More</LearnMore>}
      </InfoWrap>
    </Wrap>
  )
}

export default CategoryTemplate