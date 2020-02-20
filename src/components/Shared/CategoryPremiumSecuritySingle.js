import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Premium from '../../images/premium.svg'

const CategoryPremiumSecuritySingle = ({ buttonText, buttonImg, learnMore, placeholder, text }) => (
  <CategoryTemplate
    svg={Premium}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title="premium security"
    device="Single-Device"
    price="$69.99"
    buttonText={buttonText}
    text={text}
    to="/"
    year
  />
)

export default CategoryPremiumSecuritySingle