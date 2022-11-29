import React, { Component } from 'react'
import Navbar from './NavBar'

export default class App extends Component {
  render() {
    var obj={
      title:"Testing",
      leftshow:false
    }
    return (
      <div>
        <div>
        <h2>Main Page</h2>
        <Navbar title ="Main Page" leftshow={false}/>
      </div>
      <div>
        <h2>List</h2>
        <Navbar title="List" />
      </div>
      <div>
        <h2>Shopping Cart</h2>
        <Navbar title="Shopping Cart"/>
      </div>
        <Navbar title={obj.title} leftshow={obj.leftshow}/>
      </div>
    )
  }
}
