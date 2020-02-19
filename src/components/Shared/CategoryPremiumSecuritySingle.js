import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Premium from '../../images/premium.svg'

const CategoryPremiumSecuritySingle = ({ buttonText }) => (
  <CategoryTemplate
    img={Premium}
    title="premium security"
    device="Single-Device"
    price="$69.99"
    buttonText={buttonText}
    year
  />
)

export default CategoryPremiumSecuritySingle