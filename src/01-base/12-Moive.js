import React, { Component } from 'react'
import './css/02.sale.css'
import Moive from './TicketSellingComponent/Moive'
import Cinema from './TicketSellingComponent/Cinema'
import Center from './TicketSellingComponent/Center'


export default class App extends Component {
  state ={
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
    current:0

  }

  which(){
   switch(this.state.current){
    case 0:
      return <Moive></Moive>
    case 1:
      return <Cinema></Cinema>
    case 2:
      return <Center></Center>
      default: 
      return null
   }
  }

  render() {
    return (
      <div>
       {/*  {
          this.state.current === 0 && <Moive></Moive>
        }
        {
          this.state.current === 1 && <Cinema></Cinema>
        }
        {
          this.state.current === 2 &&  <Center></Center>
        } */}

        {
        this.which()
        }
          
        <ul>
          {
            this.state.list.map((item,index)=>
              <li key={item.id} className={this.state.current===index? 'active':""}
              onClick={()=>this.handleClick(index)}>{item.text}</li>
              )
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

  }
}
