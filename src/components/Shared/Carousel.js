import React, { useState } from 'react';
import CategoryUltimate from '../Shared/CategoryUltimate'
import CategoryPremiumSecurityMulti from '../Shared/CategoryPremiumSecurityMulti'
import CategoryPremiumSecuritySingle from '../Shared/CategoryPremiumSecuritySingle'
import CategoryFreeAntiVirus from '../Shared/CategoryFreeAntiVirus'
import styled from 'styled-components'
import * as palette from '../../variables'
import Next from '../../images/next-s.svg'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Grid = styled.div`
display: flex;
justify-content: center;
width: 100%;
`

const Cell = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  &:nth-child(1) {
    flex: 0 0 60px;
    align-items: center;
  }
  &:nth-child(2) {
    flex: 1;
    border: 1px solid ${palette.border};
    background: #fff;
  }
  &:nth-child(3) {
    flex: 0 0 60px;
    align-items: center;
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
    font-size: ${palette.textBody5};
    background: ${palette.plum};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
`

const BoxLeft = styled.div`
  background: #fff;
  height: 90%;
  width: 100%;
  margin: 0 40px 0 0;
  border-top: 1px solid ${palette.border};
  border-right: 1px solid ${palette.border};
  border-bottom: 1px solid ${palette.border};
`

const BoxRight = styled.div`
  position: relative;
  background: #fff;
  height: 90%;
  width: 100%;
  margin: 0 0 0 40px;
  border-top: 1px solid ${palette.border};
  border-left: 1px solid ${palette.border};
  border-bottom: 1px solid ${palette.border};
`

const ButtonWrapLeft = styled.div`
  position: absolute;
  left: -10px;
  top: calc(50% - 25px);
`

const ButtonWrapRight = styled.div`
  position: absolute;
  right: -10px;
  top: calc(50% - 25px);
`

const Button = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  outline: 0;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 1px solid ${palette.border};
  border-radius: 50%;
  background-color: #fff;
  background-image: url(${props => props.bg});
  transform: ${props => props.rotate && 'rotate(180deg)'};
  background-position: center;
  background-repeat: no-repeat;
  font-size: 50px;
`

const DotsWrap = styled.ul`
  display: flex;
  height: 60px;
  width: 100px;
  margin: 40px 0 0 0;
`

const DotCell = styled.li`
  flex: 33%;
`

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  outline: 0;
  border: 0;
  padding: 0;
  margin: 0;
  background: ${props => props.active ? `${palette.avast}` : '#A19DBD'};
`

const Carousel = () => {
  const items = [
    {id: 1, item: <CategoryPremiumSecurityMulti text="true" buttonText="buy now" to="#" />,  recommended: true},
    {id: 2, item: <CategoryFreeAntiVirus text="true" buttonText="buy now" to="#" />, recommended: false},
    {id: 3, item: <CategoryPremiumSecuritySingle />, recommended: false},
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
      <Grid>
      <Cell>
        <BoxLeft />
          <ButtonWrapLeft> 
            <Button rotate="true" bg={Next} onClick={() => prevItem(activeItem)} />
          </ButtonWrapLeft>
        </Cell>
      <Cell>
        {items.map((item) => 
          <Placeholder 
            key={item.id} 
            recommended={item.id === activeItem && item.recommended}
          >
            {item.id === activeItem && item.item}
          </Placeholder>
        )}
      </Cell>
      <Cell>
        <BoxRight />
          <ButtonWrapRight> 
            <Button bg={Next} onClick={() => nextItem(activeItem)}/>
          </ButtonWrapRight>
        </Cell>
      </Grid>
      <DotsWrap>
        <DotCell>
          <Dot active={activeItem === 1} />
        </DotCell>
        <DotCell>
          <Dot active={activeItem === 2} />
        </DotCell>
        <DotCell>
          <Dot active={activeItem === 3} />
        </DotCell>
      </DotsWrap>
    </Wrap>
  )
}

export default Carousel