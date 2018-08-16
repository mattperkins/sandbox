import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import styled, {injectGlobal} from 'styled-components'
import axios from 'axios'

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
  state={
    posts: []
  }
componentDidMount(){
  axios.get("https://www.reddit.com/r/patterns.json")
  .then(res => {
    this.setState({
      posts: res.data.data.children
    })
  })
  .catch(err => {
    console.log(err)
  })
}
// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (

<Wrapper>

{this.state.posts.map((item,i) => 
  <div key={i}>
    <img src={item.data.thumbnail} />
    <p>{item.data.title}</p>
  </div>
)}

</Wrapper>

)// end return
}// end render
}// end component

ReactDOM.render(<Root />, 
  document.getElementById('root'))
  registerServiceWorker()
