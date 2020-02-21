import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Ultimate from '../../images/ultimate.svg'
import { categoryTexts, prices } from '../../data/texts'

const CategoryUltimate = ({ buttonText, buttonImg, learnMore, placeholder, text }) => (
  <CategoryTemplate
    svg={Ultimate}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title={categoryTexts.ultimate}
    price={prices.ultimate}
    buttonText={buttonText}
    text={text}
    to="/"
    year
  />
)

export default CategoryUltimate