import React,{Children, Component} from "react";

class Child extends Component{
  render(){
    return <div>child</div>
  }
}
//children component of App 
class Navbar extends Component{
  render(){
    return (
    <div>
      navbar
      <Child></Child>
    </div>)
  }
}

function Swiper(){
  return <div>swiper</div>
  
}

const Tabbar = ()=>{
  return <div>tabbar</div>
}       
// alternative: const Tabbar =()=><div>tabbar</div>



export default class App extends Component{

  render(){
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
