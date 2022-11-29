import React from 'react'

export default function Sidebar(props) {
  let {bg, position} = props
  var obj1 ={
    left:0
  }
  var obj2 ={
    right:0
  }
  var obj ={
    background:bg, 
    width:"200px", 
    position:"fixed",

  }
  var styleobj = position==="left"?{...obj,...obj1}:{...obj,...obj2}
  return (
    <div style={styleobj}>
      <ul>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
        <li>AAA</li>
      </ul>
    </div>
  )
}
