import axios from 'axios';
import BScroll from 'better-scroll';
import React, { Component } from 'react'


export default class App extends Component {
  state={
    myname:"Shawn",
    list:[]
  }
  componentDidMount(){
    axios.get("./test.json").then(res=>{
      console.log(res.data.posts);
      this.setState({
        list:res.data.posts
      })
      // new BScroll("#wrapper")
    })
  }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            myname:'Kevin'
          })
        }}>click</button>
        {this.state.myname}
        <div id="wrapper" style={{background:"yellow", width:"200px", height:"50px",overflow:"hidden"}}>
          <ul>
            {
              this.state.list.map(item=>
              <li key={item.id}>{item.title}</li>)
            }
          </ul>
        </div>
      </div>
    )
  }

  componentWillUpdate(){
    console.log("WillUpdate");
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevState.list);
    if(prevState.list.length===0){new BScroll("#wrapper")}
    
    
  }
}
