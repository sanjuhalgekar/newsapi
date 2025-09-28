import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (      
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/"><News key="general" pageSize={4} country="us" category="general"/></Route>
            <Route exact path="/business"><News key="business" pageSize={4} country="us" category="business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={4} country="us" category="entertainment"/></Route>
            <Route exact path="/health"><News key="health" pageSize={4} country="us" category="health"/></Route>
            <Route exact path="/science"><News key="science" pageSize={4} country="us" category="science"/></Route>
            <Route exact path="/sports"><News key="sports" pageSize={4} country="us" category="sports"/></Route>
            <Route exact path="/technology"><News key="technology" pageSize={4} country="us" category="technology"/></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
