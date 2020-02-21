import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Free from '../../images/free.svg'
import { categoryTexts, prices } from '../../data/texts'

const CategoryFreeAntiVirus = ({ buttonText, buttonImg, learnMore, placeholder, text}) => (
  <CategoryTemplate
    svg={Free}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title={categoryTexts.freeAntiVirus}
    price={prices.free}
    buttonText={buttonText}
    text={text}
    to="/"
  />
)

export default CategoryFreeAntiVirus