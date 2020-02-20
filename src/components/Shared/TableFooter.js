import React from 'react'
import styled from 'styled-components'
import Button from '../Shared/Button'
import A from '../Shared/A'

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0;
`

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0 20px 0;
`

const LinkWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10px;
`


const TableFooter = ({ img, buttonText, to, linkText, underline }) => (
  <Wrap>
    <ButtonWrap>
      <Button to={to} img={img}>
        {buttonText}
      </Button>
    </ButtonWrap>
    <LinkWrap>
      <A to={to} underline={underline}>{linkText}</A>
    </LinkWrap>
  </Wrap>
)

export default TableFooter