import React from 'react';
import './App.css';
import data from './data'
import styled from 'styled-components'
import Container from './components/Shared/Container'
import * as palette from './variables'
import Feature from './components/Shared/Feature'
import CategoryFreeAntiVirus from './components/Shared/CategoryFreeAntiVirus'
import CategoryPremiumSecuritySingle from './components/Shared/CategoryPremiumSecuritySingle';
import CategoryPremiumSecurityMulti from './components/Shared/CategoryPremiumSecurityMulti'
import CategoryUltimate from './components/Shared/CategoryUltimate'
import Sticky from './components/Shared/Sticky'
import InfoBlock from './components/Shared/InfoBlock'

const Table = styled.table` 
  width: 100%;
`
const Tr = styled.tr`
  display: flex;
  width: 100%;
  flex-direction: row;
`

const Thead = styled.thead`
  display: flex;
`

const Tbody = styled.tbody`
  display: flex;
  flex-wrap: wrap;
`

const Td = styled.td`
  display: flex;
  padding: 0;
  &:nth-child(1){
    flex: 0 0 32%
  }
  &:nth-child(2){
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 17%'};
  }
  &:nth-child(3){
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 17%'};
  }
  &:nth-child(4){
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 17%'};
  }
  &:nth-child(5){
    ${props => props.colCount === 2 && 'flex: 0 0 50%'};
    ${props => props.colCount === 3 && 'flex: 0 0 33.33%'};
    ${props => props.colCount === 4 && 'flex: 0 0 17%'};
  }
`

const App = () => {
  return (
    <Container>
      <Sticky />
      <Table>
        <Thead>
          <Tr>
            <Td colCount={4}>
              Your protection, your way
            </Td>
            <Td colCount={4}>
              <CategoryFreeAntiVirus />
            </Td>
            <Td colCount={4}>
              <CategoryPremiumSecuritySingle />
            </Td>
            <Td colCount={4}>
            <CategoryPremiumSecurityMulti />
            </Td>
            <Td colCount={4}>
              <CategoryUltimate />
            </Td>
          </Tr>
        </Thead>
        <Tbody>
        {data.map(item => 
          <Tr key={item.id}>
            <Td>
              <InfoBlock title={item.title} text={item.text} />
            </Td>
            <Td colCount={4}>
              <Feature showTick={item.colA} />
            </Td>
            <Td colCount={4}>
              <Feature showTick={item.colB} />
            </Td>
            <Td colCount={4}>
              <Feature showTick={item.colC} />
            </Td>
            <Td colCount={4}>
              <Feature showTick={item.colD} />
            </Td>
          </Tr>
          )}
          </Tbody>
          <Thead>
          <Tr>
            <Td colCount={4}>
              * anti spam is available as a seperate free download.
            </Td>
            <Td colCount={4}>
            
            </Td>
            <Td colCount={4}>
            </Td>
            <Td colCount={4}>
           
            </Td>
            <Td colCount={4}>
              
            </Td>
          </Tr>
        </Thead>
      </Table>
    </Container>
  )
}

export default App;
