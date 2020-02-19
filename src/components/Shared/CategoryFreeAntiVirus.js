import React from 'react'
import CategoryTemplate from './CategoryTemplate'
import Free from '../../images/free.svg'

const CategoryFreeAntiVirus = ({ buttonText }) => (
  <CategoryTemplate
    img={Free}
    title="Free Antivirus"
    price="Free"
    buttonText={buttonText}
  />
)

export default CategoryFreeAntiVirus