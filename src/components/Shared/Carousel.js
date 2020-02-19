import React, { useState } from 'react';
import CategoryUltimate from '../Shared/CategoryUltimate'
import CategoryPremiumSecurityMulti from '../Shared/CategoryPremiumSecurityMulti'
import CategoryPremiumSecuritySingle from '../Shared/CategoryPremiumSecuritySingle'
import CategoryFreeAntiVirus from '../Shared/CategoryFreeAntiVirus'
import styled from 'styled-components'
import * as palette from '../../variables'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Cell = styled.div`
  display: flex;
  justify-content: center;
  &:nth-child(1) {
    flex: 0 0 20%;
  }
  &:nth-child(2) {
    flex: 0 0 60%;
    border: 1px solid #ff00ff;
  }
  &:nth-child(3) {
    flex: 0 0 20%;
  }
`

const Placeholder = styled.div`
  position: relative;
  &::before {
    content: "${props => props.recommended ? 'Recommended' : ''}";
    position: absolute;
    display: ${props => props.recommended ? 'flex' : 'none'};
    top: -10px;
    left: calc(50% - 50px);
    text-transform: uppercase;
    width: 100px;
    height: 20px;
    color: #fff;
    font-size: ${palette.textExtraSmall};
    background: ${palette.avast};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
`
const Carousel = () => {
  const items = [
    {id: 1, item: <CategoryFreeAntiVirus />, recommended: true},
    {id: 2, item: <CategoryPremiumSecuritySingle />, recommended: false},
    {id: 3, item: <CategoryPremiumSecurityMulti />,  recommended: false},
    {id: 4, item: <CategoryUltimate />, recommended: false}
  ] 
  const [activeItem, setActiveItem] = useState(1)

  const nextItem = (activeItem) => {
    setActiveItem(activeItem < items.length ? activeItem + 1 : activeItem)
  }
  
  const prevItem = (activeItem) => {
    setActiveItem(activeItem === 1 ? activeItem : activeItem -1 )
  }

  return(
    <Wrap>
      <Cell> <button onClick={() => prevItem(activeItem)}>Prev</button></Cell>
      <Cell>
        {items.map((item) => 
          <Placeholder 
            key={item.id} 
            recommended={item.id === activeItem && item.recommended}
          >
            {console.log(item.id === 1 && item.recommended)}
            {item.id === activeItem && item.item}
          </Placeholder>
        )}
      </Cell>
      <Cell> <button onClick={() => nextItem(activeItem)}>Next</button></Cell>
    </Wrap>
  )
}

export default Carousel