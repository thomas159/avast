import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Ultimate from '../../images/ultimate.svg'

const CategoryUltimate = ({ buttonText}) => (
  <CategoryTemplate
    img={Ultimate}
    title="Ultimate"
    price="$99.99"
    buttonText={buttonText}
    year
  />
)

export default CategoryUltimate