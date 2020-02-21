import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Premium from '../../images/premium.svg'
import { categoryTexts, prices } from '../../data/texts'

const CategoryPremiumSecuritySingle = ({
  buttonText,
  buttonImg,
  learnMore,
  placeholder,
  text,
}) => (
  <CategoryTemplate
    svg={Premium}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title={categoryTexts.premiumSecurity}
    device={categoryTexts.singleDevice}
    price={prices.premiumPriceSingle}
    buttonText={buttonText}
    text={text}
    to="/"
    year
  />
)

export default CategoryPremiumSecuritySingle
