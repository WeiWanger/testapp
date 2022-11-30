import React, { Component } from 'react'

class Navbar extends Component{
  render(){
    return(
    <div style={{background:"red", width:"200px"}}>
      <button onClick={()=>{
        this.props.event()
      }
      }>Click</button>
      <span>navbar</span>
    </div>
    )
  }
}

class Sidebar extends Component{
  render(){
    return (<div style={{background:"yellow", width:"200px"}}>
      <ul>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
      </ul>
    </div>
    )
  }
}

export default class App extends Component {
  state={
    isShow:false
  }
  handleEvent=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
  }
  render() {
    return (
      <div>
        <Navbar event={this.handleEvent} />
        {this.state.isShow && <Sidebar/>}

        
        
      </div>
    )
  }
}
