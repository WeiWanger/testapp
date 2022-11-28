import React, { Component } from 'react'
/*
为了列表的复用和重排，设置Key值，提高性能
理想key值， item.id
不涉及到列表的增删和重排，设置为索引也是可以的
*/
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