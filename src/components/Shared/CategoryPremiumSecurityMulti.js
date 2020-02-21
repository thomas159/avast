import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Premium from '../../images/premium.svg'
import { categoryTexts, prices } from '../../data/texts'

const CategoryPremiumSecurityMulti = ({
  buttonText,
  learnMore,
  buttonImg,
  placeholder,
  text,
}) => (
  <CategoryTemplate
    svg={Premium}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title={categoryTexts.premiumSecurity}
    device={categoryTexts.multiDevice}
    price={prices.premiumPriceMulti}
    buttonText={buttonText}
    text={text}
    to="/"
    year
  />
)

export default CategoryPremiumSecurityMulti
