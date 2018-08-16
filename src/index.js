import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'

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
this.componentDidMount(){
  axios.get("https://www.reddit.com/r/patterns.json")
  .then(res => {
    console.log(res.data.data.children)
  })
  .catch(err => {
    console.log(err)
  })
}
// MAIN COMPONENT RETURN
return (

<Wrapper>

<h1>Hello, World!</h1>

</Wrapper>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
