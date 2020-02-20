import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Free from '../../images/free.svg'

const CategoryFreeAntiVirus = ({ buttonText, buttonImg, learnMore, placeholder, text}) => (
  <CategoryTemplate
    svg={Free}
    learnMore={learnMore}
    buttonImg={buttonImg}
    placeholder={placeholder}
    title="Free Antivirus"
    price="Free"
    buttonText={buttonText}
    text={text}
    to="/"
  />
)

export default CategoryFreeAntiVirus