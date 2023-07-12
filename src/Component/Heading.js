import React from 'react'

function Heading(props) {
    //console.log("props ", props)
    const heading = props.heading ? props.heading : "";
    const headingAr = heading.split("///");
   // console.log(headingAr);
    return (
        <h1 className={`color ${props.className}`}>{headingAr[0]} <span style={{ color: props.secondHeadingColor ? props.secondHeadingColor : 'black'}}>{headingAr[1]}</span></h1>
    )
}

export default Heading
