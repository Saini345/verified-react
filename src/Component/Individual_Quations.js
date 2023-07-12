import React from 'react'

function Individual_Quations(props) {
    const individual_Quations  = props.Individual_Quations ? props.Individual_Quations: "";
  return (
    <div>{props.individual_Quations}</div>
  )
}

export default Individual_Quations;
