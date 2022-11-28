import React, { Component } from "react";

export default class App extends Component{
  a =100
  myref = React.createRef()
  render(){
    return(
      <div>
        {/* <input ref="mytext"/> */}
        <input ref={this.myref} />
        <button onClick={()=>{
          // console.log("click1", this.refs.mytext.value);
          console.log("click", this.myref.current.value);
        }
      }>add1</button>
      </div>  
    )
  }
}