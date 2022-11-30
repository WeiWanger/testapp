/* import React, { Component } from 'react'

export default class Tabbar extends Component {
  state={
    
      //current:this.props.defaultValue
  }
  render() {
    return (
      <div>
        <ul>
          {
          this.props.list.map((item,index)=>
          <li key={item.id} className={this.props.current===index? 'active':""}
          onClick={()=>this.handleClick(index)}>{item.text}</li>)
          }
        </ul>
      </div>
    )
  }
  handleClick(index){
    console.log(index);
    // this.setState({
    //   current:index
    // })
    this.props.event(index)
    //inform the parent component to switch the states

  }
} */

const Tabbar =(props)=>{
  return (
    <div>
      <ul>
        {
        props.list.map((item,index)=>
        <li key={item.id} className={props.current===index? 'active':""}
        onClick={()=>props.event(index)}>{item.text}</li>)
        }
      </ul>
    </div>
  )


}
export default Tabbar