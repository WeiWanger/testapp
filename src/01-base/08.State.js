import React, { Component } from "react";

export default class App extends Component {
  
  /* state = {
    mytext:"Like",
    mycondition:true
  } */

  constructor(){
    super()
    this.state = {
      mytext:"Like",
      mycondition:true,
      myname:"Shawn"
    } 
  }

  render(){
    return (
      <div>
          <h1>Welcome to React development-{this.state.myname}</h1>
          <button onClick={()=>{
            // React中无法感知自动的识别状态的变化，需要手动的通过setState对状态进行更改
            this.setState({
              //mytext:"Dislike"
              mycondition:!this.state.mycondition,
              myname:"Wei"
            })
            if(this.state.mycondition){
              console.log("Collection successful");
            }else{
              console.log("Collection cancelled");
            }


          }}>{this.state.mycondition?'Like':'Dislike'}</button>

      </div>
    )

  }


}
