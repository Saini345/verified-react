import React from 'react'

function Pragraph(props) {
    const Pragraph  = props.Pragraph ? props.Pragraph : "";
    // console.log(props)
  return (
    <p className={`pragraph ${props.className}`}>{props.pragraph}</p>
  )
}

export default Pragraph;
