import React, { Component } from "react";
import './css/01-index.css'
export default class App extends Component{
  a =100
  myref = React.createRef()

  state = {
    list:[
      {id:1,
      mytext:"AAA",
      isChecked:false
    }, 
      {id:2,
      mytext:"BBB",
      isChecked:false
    }, 
      {id:2,
      mytext:"CCC",
      isChecked:false
    }, 

    ],
    mytext:''
    
  }

  render(){
    return(
      <div>
        {/* <input ref="mytext"/> */}
        <input value={this.state.mytext} onChange={(evt)=>{
          this.setState({
            mytext:evt.target.value
          })
        }} />
      {/*   <button onClick={()=>{
          // console.log("click1", this.refs.mytext.value);
          console.log("click", this.myref.current.value);
        }
      }>add1</button> */}

      <button onClick={this.handleClick2}>add2</button>
      <ul>
        {
          this.state.list.map((item,index)=>
            <li key={item.id}>
              {/* {item} */}
              <input type="checkbox" checked={this.state.isChecked} onChange={
                ()=>{
                  this.handelCheck(index)
                }
              }></input>
            {/* 富文本展示 */}
            <span dangerouslySetInnerHTML={
              {
                __html:item.mytext
              }
            }
            style={{
              textDecoration:item.isChecked? "line-through":""}}></span>

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
    //console.log("click2", this.myref.current.value);

    //this.state.list.push(this.myref.current.value);//not recommend, please don't modify the state 
    let newlist =[...this.state.list]
    newlist.push(this.state.mytext)
    
    this.setState({
      list:newlist,
      mytext:" "
    })
    //empty the input bar
    //this.myref.current.value = ""
  }

  handleDelClcik(index){
    console.log("del-click", index);
    let dellist =this.state.list.slice()
    dellist.splice(index, 1)
    this.setState({
      list:dellist
    })
  }

  handelCheck=(index)=>{
    console.log(index);

    let newlist=[...this.state.list]
    newlist[index].isChecked = !newlist[index].isChecked
    this.setState({
      list:newlist
    })
  } 

}