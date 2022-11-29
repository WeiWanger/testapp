import React, { Component } from 'react'

class Child extends Component{
  render(){
    return (
      <div>
       Child-{this.props.text}
      </div>
    )
  }
}

export default class App extends Component {
  state={
    text:"AAAA"
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            text:'BBBB'
          })
        }}>Click-super</button>
        <Child text={this.state.text} />

      </div>
    )
  }
}
