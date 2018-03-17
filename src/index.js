import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'
// import Syntax from './Syntax' 

//eslint-disable-next-line
injectGlobal`
body {
font-family: sans-serif;
background: #f7f7f7;
}
`

// styled components
const Wrapper = styled.div`
margin: 100px;
`


// main ("ROOT") component 
export default class Root extends React.Component {


// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (

<Wrapper>

<h1>Hello, World!</h1>
<p>Review Syntax.js where necessary</p>

</Wrapper>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
