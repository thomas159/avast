import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Ultimate from '../../images/ultimate.svg'

const CategoryUltimate = ({ buttonText, buttonImg, learnMore, placeholder, text }) => (
  <CategoryTemplate
    svg={Ultimate}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title="Ultimate"
    price="$99.99"
    buttonText={buttonText}
    text={text}
    to="/"
    year
  />
)

export default CategoryUltimate