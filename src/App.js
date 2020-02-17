import React from 'react';
import './App.css';
import data from './data'
import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Cell = styled.div`
  &:nth-child(1) {
    flex: 0 0 30%;
  }
  &:nth-child(2) {
    flex: 0 0 16%;
    ${props => props.active && `
      background: #ff00ff;
    `}
  }
  &:nth-child(3) {
    flex: 0 0 16%;
    ${props => props.active && `
      background: #ff00ff;
    `}
  }
  &:nth-child(4) {
    flex: 0 0 16%;
    ${props => props.active && `
      background: #ff00ff;
    `}
  }
  &:nth-child(5) {
    flex: 0 0 16%;
    ${props => props.active && `
      background: #ff00ff;
    `}
  }
 
`

const App = () => {
  return (
    <div>
      <Grid>
      {data.map(item => 
        <React.Fragment key={item.id}>
          <Cell >{item.title}</Cell>
          {item.cols.map((item, index) => 
            <Cell key={index} active={item === true}>bla</Cell>
          )}
        </React.Fragment>
          )}
      </Grid>
    </div>
  )
}

export default App;
