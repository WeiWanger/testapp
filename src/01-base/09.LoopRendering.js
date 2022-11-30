import React, { Component } from 'react'

export default class App extends Component {
  state={
    list:['1111','2222','3333']
  }
  
  render() {

    return (
      <div>
        <ul>
           {this.state.list.map(item=>
           <li key={item
           }>{item}</li>)}
         
        </ul>
      </div>
    )
  }
}

/*
orignal JS --map 
*/
/* var list =['aaa','bbb','ccc'];
var newlist = list.map(item=>'<li>${item}</li>')
console.log(newlist.join('')); */