import React from 'react'

function Box(props) {

    const  Box = props.Box ? props.Box: "";
    
  return (
   <div>{props.Box}</div>
  )
}

export default Box;
