import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
  
   constructor(){
    super()
    this.state={
      cinemaList:[],
      mytext:""
      //backcinemaList:[]
    }

    //axios third-party library, it's for requesting data 
    //axios.get("request address").then(res=>{}).catch(err=>{console.log(err)})
    // axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9858760").then(res=>{
    //   // console.log(res);
     axios({
      url:" https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=7629600",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16693436525577122408038401","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
     }).then(res=>{
      console.log(res.data.data.cinemas)
      this.setState({
        cinemaList:res.data.data.cinemas,
        //backcinemaList:res.data.data.cinemas
      })

      console.log(this.state.cinemaList);
      
     })

  } 
  render() {

    return (
      <div>
          <input value={this.state.mytext} onChange={(evt)=>{
            this.setState({
              mytext:evt.target.value
            })
          }}/>
          {
            this.getCinemaList().map(item=>
              <dl key={item.cinemaid}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>)
          }
      </div>
    )
  }

  getCinemaList(){
    return this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(
      this.state.mytext.toUpperCase())||item.address.toUpperCase().includes(
        this.state.mytext.toUpperCase()))
  }

 /*  handleInput=(event)=>{
    console.log("input", event.target.value);

    var newlist = this.state.backcinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())
    || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
    
    //console.log(newlist);
    this.setState({
      cinemaList:newlist
    }) 
    //cinemaList will be covered by seraching 

    console.log(this.state.cinemaList);
  } */
}
