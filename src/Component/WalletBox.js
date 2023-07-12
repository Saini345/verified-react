import React from 'react'

function WalletBox(props) {

    const  WalletBox = props.WalletBox ? props.WalletBox: "";
  return (
    <div>{props.WalletBox}</div>
  )
}

export default WalletBox;
