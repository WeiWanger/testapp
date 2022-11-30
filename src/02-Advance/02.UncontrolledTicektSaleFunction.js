import React, { Component } from 'react'
import './css/02.sale.css'
import Moive from './TicketSellingComponent/Moive'
import Cinema from './TicketSellingComponent/Cinema'
import Center from './TicketSellingComponent/Center'
import Tabbar from './TicketSellingComponent/Tabbar'
import Navbar from './TicketSellingComponent/Navbar'

export default class App extends Component {
  state ={
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
        <Navbar myevent={()=>{
          console.log("navbar-center","switch to center component");
          this.setState({
            current:2
          })
        }}/>
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
        <Tabbar event={(index)=>{
            console.log("Parent component" + index);
            this.setState({
                current:index
            })
        }} defaultValue={this.state.current}></Tabbar>
      </div>
    )
  }
  
}
