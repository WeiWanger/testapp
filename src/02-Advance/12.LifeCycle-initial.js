import React, { Component } from 'react'

export default class App extends Component {
  state={
    myname:"Shawn"
  }
  UNSAFE_componentWillMount(){
      console.log("will mount", this.state.myname);
      //last time for modifying the state
      this.setState({
        myname:"Micheal"
      })

      //initialization 
  }

  componentDidMount(){
    console.log("Did mount", document.getElementById("myname"));
    //acquiring data axios
    //subscribe
    //setInterval 
    //initailzing based on the compeleted DOM

  }

  render() {
    console.log("render");
    return (
      <div>

        <span id="myname">{this.state.myname}</span>

      </div>
    )
  }
}
