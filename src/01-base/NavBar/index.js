import React, { Component } from 'react'
import validation from 'prop-types'

export default class Navbar extends Component {

 
  /* validation for propos 
prorperties of class */
 static propTypes ={
  title:validation.string,
  leftshow:validation.bool
}

static defaultProps = {
  leftshow:true
}

 render() {
    //propos are passed from the super conponent this.propos 
    let {title, leftshow} = this.props

   
    return (
      <div>
        {leftshow&&<button >GO Back</button>}
        Navbar-{title}
        <button>Home</button>
        </div>
    )
  }
}
 

