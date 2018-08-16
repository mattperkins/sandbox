import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Root from './index'
import Image from './Image'
// import Settings from './Setting'

const Router = () => (
 <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Root} />
    <Route exact path="/image" component={Image} />
    {/* <Route exact path="/settings" component={Settings} /> */}
  </Switch>
 </BrowserRouter>
)
export default Router