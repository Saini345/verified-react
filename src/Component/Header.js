import React from "react";
import './Header.css';


function Header() {
  return (
    <div>
      {/* <img src="images/Vector 1.png"/> */}
      <div className="header">
        <div class="navbar">
          <a><img className="margin-left Verified_img" src="images/Verified.png" /></a>
          <ul className="li-list">
            <li>Individuals</li>
            <li>Businesses</li>
            <li>Service Providers</li>
            <li><button className="margin-right login">Login</button></li>
          </ul>
        </div>
        <div className='section_1'>
          <div className='margin_left'>
            <h1 className="color">Not a bank,</h1>
            <h1 className="heading">but only better.</h1>
            <p className="pragraph margin_top">Built on a blockchain, the Verified Network offers users easy, secure, regulation compliant, low cost access to payments, financing and investments.</p>
            <h4 className="heading_4">Create your Verified account today</h4>
            <img className="margin_top" src="images/Google-apple.png" />
          </div>
          <div className='margin_right'>
            <img className="homepage_img" src="images/homepage-Banner.png" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;
