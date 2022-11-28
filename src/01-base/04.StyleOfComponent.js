import React,{ Component } from "react";
import './css/01-index.css' //import css module 
export default class App extends Component{
 render(){
  var myname = "Shawn"
  var obj ={
    backgroundColor:"yellow",
    fontSize:"30px"
  }
  return(
    <div>
      {10+20}-{myname}
      {10>20? "aaa":"bbb"}
      <div style={obj}>One Two Three</div> 
      <div style={{background:"red"}}>4 5 6</div>
      {/*
      React recommends inner style,becasue each component is independent 
      */}
      <div className="active">7 8 9</div>

      <label htmlFor="username">User ID: </label>
      <input type="text" id="username"></input>
    </div>

  )
 }
}