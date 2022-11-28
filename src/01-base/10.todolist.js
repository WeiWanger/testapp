import React, { Component } from "react";
import './css/01-index.css'
export default class App extends Component{
  a =100
  myref = React.createRef()

  state = {
    list:["aa","bb","cc"]
  }

  render(){
    return(
      <div>
        {/* <input ref="mytext"/> */}
        <input ref={this.myref} />
      {/*   <button onClick={()=>{
          // console.log("click1", this.refs.mytext.value);
          console.log("click", this.myref.current.value);
        }
      }>add1</button> */}

      <button onClick={this.handleClick2}>add2</button>
      <ul>
        {
          this.state.list.map((item,index)=>
            <li key={item}>
              {/* {item} */}
            {/* 富文本展示 */}
            <span dangerouslySetInnerHTML={
              {
                __html:item
              }
            }></span>

              {/* <button onClick={this.handleDelClcik.bind(this,index)}>Delete</button> */}
              <button onClick={()=>{
                this.handleDelClcik(index)
              }}>Delete</button>
            </li>)
        }
      </ul>

     
      {/* {this.state.list.length===0
       ?<div>No items</div>:null}*/}
      
      {/* {this.state.list.length===0 && <div>No items</div>} */}

       <div className={this.state.list.length===0?'':'hidden'}>No items</div>
      </div> 

    )
  }
  handleClick2=()=>{
    console.log("click2", this.myref.current.value);

    //this.state.list.push(this.myref.current.value);//not recommend, please don't modify the state 
    let newlist =[...this.state.list]
    newlist.push(this.myref.current.value)
    
    this.setState({
      list:newlist
    })
    //empty the input bar
    this.myref.current.value = ""
  }

  handleDelClcik(index){
    console.log("del-click", index);
    let dellist =this.state.list.slice()
    dellist.splice(index, 1)
    this.setState({
      list:dellist
    })


  }

}