import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';


export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              {/* render our homepage component */}
           <Main/>
            </Route>
            <Route exact path="/favorite">
              {/* render the component responsible for rendering the favorites   */}
          <Favorite/>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App
