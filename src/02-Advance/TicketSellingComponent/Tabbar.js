import React, { Component } from 'react'

export default class Tabbar extends Component {
  state={
    list:[
      {id:1,
        text:"moive"
        },
        {id:2,
        text:"cinema"
        },
        {id:3,
         text:"center"
        }
      ],
      current:this.props.defaultValue
  }
  render() {
    return (
      <div>
        <ul>
          {
          this.state.list.map((item,index)=>
          <li key={item.id} className={this.state.current===index? 'active':""}
          onClick={()=>this.handleClick(index)}>{item.text}</li>)
          }
        </ul>
      </div>
    )
  }
  handleClick(index){
    console.log(index);
    this.setState({
      current:index
    })
    this.props.event(index)
    //inform the parent component to switch the states

  }
}
