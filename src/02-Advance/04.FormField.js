import React, { Component } from 'react'

class Field extends Component{
  render(){
    return (
      <div style={{background:"yellow", width:"auto"}}>
        <label>{this.props.label}</label>
        <input type={this.props.type} onChange={(evt)=>{
          // console.log(evt.target.value);
          this.props.onChangeEvent(evt.target.value)
        }} value={this.props.value}/>

        
      </div>



    )
  }

}

export default class App extends Component {
  state={
    username:"",
    password:""
  }
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>LOGIN</h1>
        <Field label="Username" type="text" onChangeEvent={(value)=>{
            // console.log(value);
            this.setState({
              username:value
            })
        }} value={this.state.username} />
        <Field label="Password" type="password" onChangeEvent={(value)=>{
            // console.log(value);
            this.setState({
              password:value
            })
        }} value={this.state.password}/>
        <button onClick={()=>{
            console.log(this.state.username, this.state.password, "validate password in back end");
        }}>Login</button>
        <button>Cancel</button>
      </div>
    )
  }
}
