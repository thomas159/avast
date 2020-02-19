import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Premium from '../../images/premium.svg'

const CategoryPremiumSecurityMulti = ({ buttonText }) => (
  <CategoryTemplate
    img={Premium}
    title="premium security"
    device="Multi-Device"
    price="$89.99"
    buttonText={buttonText}
    year
  />
)

export default CategoryPremiumSecurityMulti