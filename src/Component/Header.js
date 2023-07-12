import React from "react";


function Header(props) {
  const  Header = props.Header ? props.Header: "";
  return (
    <div>{props.Header}</div>
  )
}

export default Header;
