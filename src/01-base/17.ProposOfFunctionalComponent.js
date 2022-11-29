import React, { Component } from 'react'
import Navbar from './NavBar'
import Sidebar from './Sidebar'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* class Component */}
        <Navbar title="Navigator"></Navbar>
        {/* Functional component */}
        <Sidebar bg="yellow" position="left"></Sidebar>
      </div>
    )
  }
}
