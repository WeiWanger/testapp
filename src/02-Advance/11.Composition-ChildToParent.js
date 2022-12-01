import React, { Component } from 'react'

class Navbar extends Component{
  render(){
    return(
    <div style={{background:"red", width:"200px"}}>
      {this.props.children}
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
  
  render() {
    return (
      <div>
        <Navbar>
        <button onClick={()=>{
          this.setState({
            isShow:!this.state.isShow
          })
        }}>Click</button>
        </Navbar>
        {this.state.isShow && <Sidebar/>}

        
        
      </div>
    )
  }
}
