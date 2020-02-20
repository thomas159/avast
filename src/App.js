import React from 'react';
import Container from './components/Shared/Container'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import { createGlobalStyle } from 'styled-components'
import * as palette from '../src/variables'
import 'sanitize.css'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

html,
body {
    position: relative;
    font-family: 'Open Sans', sans-serif;
    color: ${palette.plum};
    font-size: ${palette.textBody3};
    line-height: 1;
    background: #fff;
    word-break: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

top: 0;
left: 0;
right: 0;
zIndex: 1;
}
.sticky-wrapper {
  position: relative;
  height: 3rem; /* We need to change this value */
}

.sticky .sticky-inner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}


`


const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Container>
  )
}

export default App;
