import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Premium from '../../images/premium.svg'


const CategoryPremiumSecurityMulti = ({ buttonText,  learnMore, buttonImg, placeholder, text }) => (
  <CategoryTemplate
    svg={Premium}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title="premium security"
    device="Multi-Device"
    price="$89.99"
    buttonText={buttonText}
    text={text}
    to="/"
    year
  />
)

export default CategoryPremiumSecurityMulti