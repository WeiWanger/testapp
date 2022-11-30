import React, { Component } from 'react'
import axios from 'axios'
import './css/03.LiftingState.css'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      filmList:[]
    }
    axios.get('/test.json').then(res=>{
      console.log(res.data.posts);
      this.setState({
        filmList:res.data.posts
      })
    })
  }
  
  render() {
    return (
      <div>
       {
        this.state.filmList.map(item=>
          <FilmItem key={item.id} {...item}> </FilmItem>
          )
       }

       <FilmDetail></FilmDetail>
      </div>
    )
  }
}

// controlled componenet
class FilmItem extends Component{
  render(){
     let{title, director, } =this.props
    return (
      <div  >
        <h2>{title}</h2>
        <h4>{director}</h4>
      </div>
    )
  }
}

class FilmDetail extends Component{
  render(){
    return (
      <div className='filmdetail'>
        filmdetail
      </div>
    )
  }
}