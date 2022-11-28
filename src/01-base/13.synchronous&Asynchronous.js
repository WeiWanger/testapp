import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count:1
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    )
  }
  handleAdd1=()=>{
    this.setState({ // 
      count:this.state.count+1, 
    }, ()=>{console.log(this.state.count)})
    // states and dom have been updated 
    
  }
  handleAdd2=()=>{
   setTimeout(()=>{
    this.setState({
      count:this.state.count+1
    })
    console.log(this.state.count);
    this.setState({
      count:this.state.count+1
    })
    console.log(this.state.count);
    this.setState({
      count:this.state.count+1
    })
    console.log(this.state.count);
   },0)
  }
}

/*In synchronous process, asynchromous updates the state and real DOM
  In Asynchronous process, synchromous updates the state and real DOM

  2nd param of setState function is a callback function, updated state and DOM have been triggered 
 */


