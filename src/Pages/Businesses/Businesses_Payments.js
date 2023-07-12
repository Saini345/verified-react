import React from 'react'
import Header from '../../Component/Header';
import Heading from '../../Component/Heading';
import { NavLink } from 'react-router-dom';
import Individual_Pages from '../../Component/Individual_Pages';
import { Link } from 'react-router-dom';
import Individual_ZeroBalance from '../../Component/Individual_ZeroBalance';
import Individual_Quations from '../../Component/Individual_Quations';
import Box from '../../Component/Box';
import Footer from '../../Component/Footer';

function Businesses_Payments() {
  return (
    <div>
      <Header Header={<div className="header_color_skyblue header_height">
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
            <h2 className='heading_2 font-weight'>A Financial Ecosystem.</h2>
            <Heading className='heading font-weight font-size-60' heading="Built for Smart Businesses." />
            {/* <h1 className='heading'>Built for the New Age Investor.</h1> */}
            <h4 className="heading_4">Verified makes it easier for businesses to raise capital out intermediaries, across borders.</h4>
            <h4 className="heading_4 margin_top">Create your Verified account today</h4>
            <button className='login_button_color login'> Sign in </button>
            <button className="login margin color-black">Explore</button>
          </div>
        </div>
      </div>} />
      <Individual_Pages individual_Pages={
        <div className='Accounts-assets margin_left margin_right section_2'>
          <div className='icon-images-flex pt'>
          <Link to ="/Businesses" className='NavLink color_grey'><img className='icon-images-hw margin_left_50' src="images/Account-icon.png" /></Link>
            <Link to="/BusinessesAssets"><img className='icon-images-hw' src="images/Assets-icon.png" /></Link>
            <Link to="/BusinessesDeposits"><img className='icon-images-hw' src="images/Deposits-icon.png" /></Link>
            <Link to="/BusinessesPayments"><img className='icon-images-hw' src="images/Payments-icon.png" /></Link>
            <Link to="/BusinessesFinance"><img className='icon-images-hw margin_right_50 margin' src="images/Investments-icon.png" /></Link>
          </div>
          <div className='icon-images-flex margin-top-15'>
            <div className='margin_left_50 Pages_style'><Link to ="/Businesses" className='NavLink color_grey'> Account</Link></div>
            <div className='Pages_style'><Link to="/BusinessesAssets" className='NavLink color_grey'>Assets</Link></div>
            <div className='Pages_style'><Link to="/BusinessesDeposits" className='NavLink color_grey'>Deposits</Link></div>
            <div className='Pages_style'><Link to="/BusinessesPayments" className='NavLink color_grey'>Payments</Link></div>
            <div className='margin_right_50 Pages_style'><Link to="/BusinessesFinance" className='NavLink color_grey'>Finance</Link></div>
          </div>
        </div>
      } />
      <div>
        <Heading className="padding-top margin_left font-size-50" heading="Payments  - Reimagined for Value, 
Not for Fees." />
      </div>

      <div className='section_1 padding-top'>
        <div className='margin_left'>
          <img className='bussiness_payments_1_img' src="images/bussiness_payments_1.png" />
        </div>

        <div className='margin_right margin_left'>
          <h2 className='heading font-weight font-size-40'> Multi-Country Cards</h2>
          <p className="pragraph_1">Pay expenses from your Verified blockchain account in a click without foreign transaction fees in 30+ countries.</p>
         <p className="pragraph_1"> Provide Visa debit cards to employees and track your team in real time with controlled spending limits.</p>
          <h4 className='Learn-More_1 color-parpule margin_left NavLink'>Try it out <span><img src="images/Group (3).png" /></span></h4>
        </div>
      </div>
      <div className='section_1'>

        <div className='margin_right margin_left'>
          <h2 className='heading font-weight font-size-40'> Employee and Supplier Payments</h2>
          <p className="pragraph_1">Save time and effort while transferring money to employees and suppliers across the world for free.</p>
          <p className="pragraph_1">Take the expense out of expenses and stop paying hefty commissions on foreign exchange conversions and withdrawals.</p>
          <h4 className='Learn-More_1 color-parpule margin_left NavLink'>Try it out <span><img src="images/Group (3).png" /></span></h4>
        </div>
        <div className='margin_right'>
          <img className='bussiness_payments_2_img' src="images/bussiness_payments_2.png" />
        </div>
      </div>
      <Individual_ZeroBalance individual_ZeroBalance={
        <div className='Zero-balance-skyblue'>
          <div className='margin_left padding-top margin_top_100'>
            <h3 className=' font-weight-400 font-size-27 line-height-27 heading'>PRICING THAT'S SUPER TRANSPARENT</h3>
            <h3 className='font-weight font-size-35 line-height-35 heading'>Zero Balance Account with No Hidden Fees</h3>
          </div>
          <div className='section_1 margin_left margin_right padding-top'>
            <div className='box_4 box-width box-height margin_top'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading'>Account</h2>
              <h4 className='heading_4 padding_top_20 margin mr'>For account creation, KYC and custody of assets</h4>
              <div className=''>
                <div className='Download-App margin border_skyblue'>Download App </div>
              </div>
              <div className='margin-top-15'>
                <p className='pragraph_1 margin mr'>FREE account set up</p>
                <p className='pragraph_1 margin mr'>KYC Approval fee is waived off with 10 invites to friends to family.</p>
                <p className='pragraph_1 margin mr'>0.03% per year on assets in custody.</p>
              </div>
            </div>
            <div className='box_5 box_5_boxshadow box_5_skybluecolor box-width box-purple-height'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading color-white'>Payments</h2>
              <h4 className='heading_4 color-white margin padding_top_20 mr'>For payments and withdrawal of digital cash to your bank account.</h4>
              <div className='margin_top'>
                <div className='Download-App margin border_skyblue'>Download App</div>
              </div>
              <div className='padding_top_20 '>
                <p className='pragraph_1 margin color-white mr'>FREE peer to peer payments within the Verified Network.</p>
                <p className='pragraph_1 color-white margin mr'>$15 card set up fee. $10 annual fee.</p>
                <p className='pragraph_1 color-white margin mr'>0.3% on foreign exchange payments using cards.   </p>
                <p className='pragraph_1 color-white margin mr'>0.3% on currency withdrawals from the Verified Network to your bank account.</p>

              </div>
            </div>
            <div className='box_4 box-width box-height margin_top'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading'>Financing</h2>
              <h4 className='heading_4 padding_top_20 margin mr'>For issuing investment products to raise capital on the Verified Network</h4>
              <div className='margin_top'>
                <div className='Download-App border_skyblue margin '>Download App </div>
              </div>
              <div className='margin-top-15 '>
                <p className='pragraph_1 margin mr'>$100 for upto four Credit Assessments per year.</p>
                <p className='pragraph_1 margin mr'>$100 for upto four Credit Assessments per year.</p>
                <p className='pragraph_1 margin mr'>0.1% for registering existing securities for sale. Calculated on value of assets sold. </p>

              </div>
            </div>
          </div>
        </div>
      } />

<div className='Asked-questions-color padding-top'>
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
        <Heading className='padding_top_60 font-size-40' heading="Join 1000+ Businesses and Own the World of Decentralized Finance" />
        <button className='Started-but'>Get started</button>
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

export default Businesses_Payments
