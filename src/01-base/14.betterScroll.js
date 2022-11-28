import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state={
    list:[]
  }
  render() {
    return (
      <div>
          <button onClick={()=>this.getData()}>Click</button>
          <div className="weiwrapper" style={{height:'200px', background:'yellow', overflow:'hidden'}}>
            <ul className="weicontent">
              {
                this.state.list.map(item=>
                <li key={item}>{item}</li>
                )
              }
            </ul>
          </div>
      </div>
    )
  }
  getData(){
    var list =[1,2,2,3,4,4,5,6,7,8,9,11,13,3,3,12,13]
    this.setState({
      list:list
    }, ()=>{
      new BetterScroll(".weiwrapper")
    })

    
  }
}
