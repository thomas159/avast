import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import placeholder from '../../images/img@3x.png'
const Title = styled.h2`
  font-size: ${palette.textLarge};
`

const Device = styled.h4`
  font-size: ${palette.textSmall};
`

const ImagePlaceholder = styled.img`
  max-height: 100px;
`

const Price = styled.div`
  font-size: ${palette.textExtraLarge};
`

const CategoryTemplate = ({img, svg, title, device, price, buttonText}) => {
  return (
    <div>
      SVG
    <Title>{title}</Title>
    {img && <ImagePlaceholder src={placeholder}></ImagePlaceholder>}
  
    <Device>{device}</Device>
    <Price>{price}</Price>
    buttonText
    </div>
  
  )
}

export default CategoryTemplate