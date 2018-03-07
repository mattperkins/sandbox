import React, {Component} from 'react'
import styled from 'styled-components'
import Stateless from './Stateless' // nameless component export
import NamedStateless from './NamedStateless' // variable stateless component


// styled components
const Wrapper = styled.div`
margin: 1px;
`

// stateless inline component - children props
const Lime = ({children}) => <h1>{children}</h1>

// stateless inline component - concat href
const Social = ({insta}) => <p><a href={`http://instagram.com/${insta}`}>{insta}</a></p>

//  consumed/mapped by shoutingOutside method
const articles = [
  { id: 1, name: 'Fred'},
  { id: 2, name: 'Sandy'},
  { id: 3, name: 'Bob'},
]

const Screen1 = () => <h1>Screen 1</h1>
const Screen2 = () => <h1>Screen 2</h1>

// main ("ROOT") component 
export default class Syntax extends Component {

// state
state = {
  msg: 'Hello, World!',
  componentSwapper: <Screen1 />
  }
// end state

// methods
handleFlip = () => {
  this.setState({
    msg: 'You have changed me'
  })
}

componentSwapperMethod = () => {
   
  this.setState({
    componentSwapper: <Screen2 />
  }) 
  

}

// map over array data
shoutingOutside = () => {
  return articles.map((item, i) => {
    return (<p key={i}>{item.name}</p>)
  })
}

// MAIN COMPONENT RENDER
render() {

// MAIN COMPONENT RETURN
return (

<Wrapper>

{/* onClick passed from App component as prop = flip */}
<Stateless flip={this.handleFlip} msg={this.state.msg} />

<Lime>I am Lime</Lime>

<Social insta="dormshed"/>

{this.shoutingOutside()}

<NamedStateless title="You guessed it, I am Lemon"/>

<h3 onClick={this.componentSwapperMethod}>Change Screen</h3>
{this.state.componentSwapper}


</Wrapper>

)// end return
}// end render
}// end component