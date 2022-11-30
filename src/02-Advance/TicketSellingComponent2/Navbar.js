import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    
    return (
      <div style={{background:"yellow", textAlign:"center", overflow:"hidden"}}>
          <button style={{float:"left"}}>Back</button>
          <span>Ticket Sales</span>
          <button style={{float:"right"}} onClick={()=>{
            this.props.myevent()
          }}>Center</button>
      </div>
    )
  }
}
