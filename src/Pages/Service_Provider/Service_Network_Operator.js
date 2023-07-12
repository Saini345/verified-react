import React from 'react'
import Header from '../../Component/Header';
import Heading from '../../Component/Heading';
import { NavLink } from 'react-router-dom';
import Individual_Pages from '../../Component/Individual_Pages';
import { Link } from 'react-router-dom';
import Individual_Quations from '../../Component/Individual_Quations';
import Box from '../../Component/Box';
import Footer from '../../Component/Footer';
function Service_Network_Operator() {
  return (
    <div>
      <Header Header={<div className="header_color_grey header_height">
        <div class="navbar">
          <a><img className="margin_left Verified_img" src="images/Verified.png" /></a>
          <ul className="li-list">
            <li><NavLink to="/Individuals" className="NavLink color-black">Individuals</NavLink></li>
            <li><NavLink to="/Businesses" className="NavLink color-black">Businesses</NavLink></li>
            <li><NavLink to="/Service Providers" className="NavLink color-black">Service Providers</NavLink></li>
            <li><button className="margin_right login sign_up_color">Sign Up</button></li>
          </ul>
        </div>
        <div className='center margin_top'>
          <div className=''>
            <h2 className='heading_2 '>Connect Your Service</h2>
            <Heading className='heading font-weight font-size-60' heading=" Supercharge your Offering." />
            {/* <h1 className='heading'>Built for the New Age Investor.</h1> */}
            <h4 className="heading_4"> <h4 className="heading_4 margin_top"> Create your Verified account today</h4></h4>
            <h4 className="heading_4 margin_top"> Integrating with the Verified Network gives you access to a network of merchant businesses and individuals with a global userbase.</h4>
            <button className='login_button_color login'> Sign in </button>
            <button className="login margin color-black border_color_blue">Explore</button>
          </div>
        </div>
      </div>} />
        <Individual_Pages individual_Pages={
          <div className='Accounts-assets margin_left margin_right section_2'>
            <div className='icon-images-flex padding_t'>
              <Link to="/Service Providers"><img className='icon-images-hw margin_left_50 margin-top-15' src='images/Group (7)_service.png' /></Link>
              <Link to="/ServiceManagement"><img className='icon-images-hw' src='images/Vector (4)_service.png' /></Link>
              <Link to="/ServiceManagements"><img className='icon-images-hw' src='images/Vector (5)_service.png' /></Link>
              <Link to="/ServicePayments"><img className='icon-images-hw' src='images/Group (8)_service.png' /></Link>
              <Link to="/ServiceNetworkOperator"><img className='icon-images-hw margin_right_50 margin' src='images/Vector (6)_service.png' /></Link>
            </div>
            <div className='icon-images-flex '>
              <div className='margin_left_50 Pages_style color_grey'><Link to="/Service Providers" className='NavLink color_grey'>Asset Origination</Link> </div>
              <div className='Pages_style'><Link to="/ServiceManagement" className='NavLink color_grey'>Asset Management</Link></div>
              <div className='Pages_style'><Link to="/ServiceManagements" className='NavLink color_grey'>Asset Servicing</Link></div>
              <div className='Pages_style'><Link to="/ServicePayments" className='NavLink color_grey'>Payments</Link></div>
              <div className='margin_right_50 Pages_style'><Link to="/ServiceNetworkOperator" className='NavLink color_grey'>Network Operators</Link></div>

            </div>
          </div>
        } />

        <div>
          <Heading className="padding-top margin_left font-size-50" heading="Promote Democratic Access to Finance." />
        </div>

        <div className='section_1 padding-top'>
          <div className='margin_left'>
            <img className='Group_17520_service_img' src="images/Group 17520_service.png"/>
          </div>
          <div className='margin_right margin_left margin_top_100'>
            <h2 className='heading font-weight font-size-40'> Decentralise Finance</h2>
            <p className="pragraph_1">Hosting on the Verified Network infrastructure accelerates decentralisation and helps democratise access to financial products and services. </p>
            <p className="pragraph_1">Earn a technology service fee by hosting a blockchain node for the Verified Network.</p>
            <h4 className='Learn-More_1 color-parpule margin_left NavLink'>Try it out <span><img src="images/Group (3).png" /></span></h4>
          </div>
        </div>


        <div className='Asked-questions-color Asked-questions margin_top_100 padding_top_60'>
          <Individual_Quations individual_Quations={<div>
            <div><h2 className='center heading font-weight-400 '>Frequently Asked Questions</h2></div>
            <div className='margin_left margin_right'>
              <div className='box-shadow div-height div-width pl pt font-size-18 heading margin_top border-radius-20'>Frequently Asked Question goes here<span><img className="Vector_pluse_img" src="images/Vector_pluse_icon.png" /></span></div>
              <div className='box-shadow div-height div-width pl pt font-size-18 heading margin_top border-radius-20'>Frequently Asked Question goes here <span><img className="Vector_pluse_img" src="images/Vector_pluse_icon.png" /></span></div>
              <div className='box-shadow div-height div-width pl pt font-size-18 heading margin_top border-radius-20'>Frequently Asked Question goes here <span><img className="Vector_pluse_img" src="images/Vector_pluse_icon.png" /></span></div>
            </div>
          </div>} />
        </div>

        <Box Box={<div className='box box-height-330 margin_right margin_left Invest margin_top_100'>
          {/* <h1 className='padding_top_60 font-size-40'>Invest in the Verified Network and earn a revenue share</h1> */}
          <h4 className='font-size-18 font-weight-400 heading padding_top_60'>What are you waiting for?</h4>
          <Heading className='padding_t font-size-40' heading="Get started with Verified Networks today" />
          <button className='Started-but margin_top'>Get started</button>
          <button className="margin_top margin color-black border_color_blue Contact_Sales_btn ">Contact Sales</button>
        </div>} />
        <Footer Footer={
          <div className="container margin_top_100">

            <table className="table">
              <thead className=''>
                <tr>
                  <th className="data"><a><img className="Group-17326-img" src="images/Group 17326.png" /></a></th>
                  <th className="data table-th">Individuals</th>
                  <th className="data table-th">Businesses</th>
                  <th className="data table-th">Service Providers</th>
                  <th className="data table-th">Company</th>
                  <th className="data table-th">Partners</th>
                </tr>
              </thead>
              <tbody className="table-td">
                <tr>
                  <td className="data"></td>
                  <td className="data">Account</td>
                  <td className="data">Account</td>
                  <td className="data">Asset Origination</td>
                  <td className="data">About us</td>
                  <td className="data">Operators</td>
                </tr>
                <tr>
                  <td className="data"></td>
                  <td className="data">Assets</td>
                  <td className="data">Assets</td>
                  <td className="data">Asset Management</td>
                  <td className="data">Assets</td>
                  <td className="data">Developers</td>
                </tr>
                <tr>
                  <td className="data"></td>
                  <td className="data">Deposits</td>
                  <td className="data">Deposits</td>
                  <td className="data">Asset Servicing</td>
                  <td className="data">Careers</td>
                  <td className="data">Investors</td>
                </tr>
                <tr>
                  <td className="data"></td>
                  <td className="data">Payment</td>
                  <td className="data">Payment</td>
                  <td className="data">Payments</td>
                  <td className="data">Contact Us</td>

                </tr>
                <tr>
                  <td className="data"></td>
                  <td className="data">Investment</td>
                  <td className="data">Finance</td>
                  <td className="data">Network Operators</td>
                  <td className="data">Blog</td>
                </tr>
              </tbody>
            </table>
          </div>
        } />
    </div>
  )
}

export default Service_Network_Operator
