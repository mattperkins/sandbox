import * as React from 'react'

const electron  = window.require('electron')
const ipcRenderer = electron.ipcRenderer

export default class Image extends React.Component{
 state={
  imageUrl: ''
 }
 componentDidMount(){
  ipcRenderer.on('image', (event, arg) => {
   this.setState({imageUrl: arg})
  })
 }
 render() {
  return(
   <img 
    src={this.state.imageUrl} 
    alt="imageZoom" 
    style={{maxWidth: '100%'}}/>
  )
 }
}