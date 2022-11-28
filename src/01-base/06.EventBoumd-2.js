import React, { Component } from "react";

export default class App extends Component{
  a=100
  render(){
    return(
      <div>
        <input />
        <button onClick={()=>{
          console.log("click1", this.a);
        }
      }>add1</button>
      
        <button onClick={this.handleClick2.bind(this)}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button onClick={()=>{
          this.handleClick4() //recommend function
        }}>add4</button>
      </div>  
    )
  }
//React并不会真正的绑定事件，而是采用事件代理的模式
    handleClick2(){
       console.log("Click2", this.a);
    }
    handleClick3 =()=>{
      console.log("click3",this.a);
    }
    handleClick4=()=>{
      console.log("click4", this.a);
    }

}