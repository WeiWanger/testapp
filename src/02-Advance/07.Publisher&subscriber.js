import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>



      </div>
    )
  }
}

var bus={
  list:[],

  subscribe(callback){
      console.log(callback);
      this.list.push(callback)
  },
  
  publish(){
    //iterate all elements from list 
    this.list.forEach((callback)=>{
      callback && callback()
    })
  }

}

bus.subscribe(()=>{
  console.log("1111");
  console.log("222");
})

bus.publish()