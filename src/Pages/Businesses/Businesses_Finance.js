import React, { useEffect, useState } from 'react';

import Header from '../../Component/Header';
import Heading from '../../Component/Heading';
import { NavLink } from 'react-router-dom';
import Individual_Pages from '../../Component/Individual_Pages';
import { Link } from 'react-router-dom';
import Individual_ZeroBalance from '../../Component/Individual_ZeroBalance';
import Individual_Quations from '../../Component/Individual_Quations';
import Box from '../../Component/Box';
import Footer from '../../Component/Footer';
import Pragraph from '../../Component/Pragraph';
function Businesses_Finance() {


  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://cms.verified.network/api/business?populate=*").then((data) => {
      return data.json();
  }).then((objectdata) => {
      console.log(objectdata);
      setData(objectdata.data.attributes);
  })
  }, []);

  const hero = data === undefined ? {} : data.hero;
  const pricing = data === undefined ? {}: data.pricing;
  const faqs = data ? data.faqs : [];
  const ctaCardDetails = data === undefined ? {} : data.ctaCardDetails;

  return (
    <div>
      <Header Header={<div className="header_color_skyblue header_height">
        <div class="navbar">
        <a href="/"><img className="margin_left Verified_img" src="images/Verified.png" /></a>
          <ul className="li-list">
            <li><NavLink to="/Individuals" className="NavLink color-black">Individuals</NavLink></li>
            <li><NavLink to="/Businesses" className="NavLink color-black">Businesses</NavLink></li>
            <li><NavLink to="/Service Providers" className="NavLink color-black">Service Providers</NavLink></li>
            <li><button className="margin_right login sign_up_color">Sign Up</button></li>
          </ul>
        </div>
        <div className='center margin_top'>
          <div className=''>
          <h2 className='heading_2 font-weight'>{hero.subheading}</h2>
            <Heading className='heading font-weight font-size-60' heading={hero.heading} />
            <h4 className="heading_4 margin_top">{hero.description}</h4>
            <h4 className="heading_4 padding_top_40">{hero.pitch}</h4>
          <a href =""> <button className='login_button_color login'> Sign in </button></a> 
            <a href =""><button className="login margin color-black">Explore</button></a>
          </div>
        </div>
      </div>} />
      <Individual_Pages individual_Pages={
        <div className='Accounts-assets margin_left margin_right section_2'>
          <div className='section_1 pt'>
          <Link to="/Businesses" className='NavLink color_grey'><img className='icon-images-hw margin_left_50' src="images/Account-icon.png" /></Link>
            <Link to="/BusinessesAssets"><img className='icon-images-hw' src="images/Assets-icon.png" /></Link>
            <Link to="/BusinessesDeposits"><img className='icon-images-hw' src="images/Deposits-icon.png" /></Link>
            <Link to="/BusinessesPayments"><img className='icon-images-hw' src="images/Payments-icon.png" /></Link>
            <Link to="/BusinessesFinance"><img className='icon-images-hw margin_right_50 margin' src="images/Investments-icon.png" /></Link>
          </div>
          <div className='section_1 margin-top-15'>
            <div className='margin_left_50 Pages_style'><Link to="/Businesses" className='NavLink color_grey'> Account</Link></div>
            <div className='Pages_style'><Link to="/BusinessesAssets" className='NavLink color_grey'>Assets</Link></div>
            <div className='Pages_style'><Link to="/BusinessesDeposits" className='NavLink color_grey'>Deposits</Link></div>
            <div className='Pages_style'><Link to="/BusinessesPayments" className='NavLink color_grey'>Payments</Link></div>
            <div className='margin_right_50 Pages_style'><Link to="/BusinessesFinance" className='NavLink color_grey'>Finance</Link></div>
          </div>
        </div>
      } />
      <div>
        <h2 className="padding-top margin_left margin_right font-size-50 font-weight_400"><span className='font-weight color_skyblue'>Keep Investors</span> Informed. And Win Their Confidence.</h2>
        {/* <Heading className="padding-top margin_left font-size-50" heading="Keep Investors Informed. And Win Their Confidence." /> */}
      </div>

      <div className='section_1 padding-top'>
        <div className='margin_left'>
        </div>

        <div className='margin_right margin_left margin_top_100'>
          <h2 className='heading font-weight_400 font-size-40'><span className='font-weight'> competitive</span>  Borrowing Rates</h2><br/>
          <img className='Group_9_img ' src = "images/Group (9).png"/><Pragraph className="pragraph_1 display_inline ml" pragraph="Borrow money at competitive interest rates by selling private bonds across the globe."/><br/><br/>
          <img className='Group_9_img ' src = "images/Group (9).png"/><Pragraph className="pragraph_1 display_inline ml" pragraph="Take advantage of selling to investors, who are interested in earning higher returns on their
assets."/>

          <h4 className='Learn-More_1 color_skyblue NavLink margin_top'>Try it out <span><img className='arow_hw' src="images/Group (10).png" /></span></h4>
        </div>
      </div>



      <div className='section_1 padding-top margin_top_100'>
        <div className='margin_right margin_left '>
          <h2 className='heading font-weight_400 font-size-40'> <span className='font-weight'>Raise capital</span> For your Business</h2><br/>
          <img className='Group_9_img ' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Issue digital shares to investors across the world to raise capital."/><br/><br/>
          <img className='Group_9_img ' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Ensure regulation-compliant cross border investments, allotment of shares and bonds,
and distribution of interest and dividends to investors."/>
          <h4 className='Learn-More_1 color_skyblue  NavLink margin_top'>Try it out <span><img className='arow_hw' src="images/Group (10).png" /></span></h4>
        </div>

        <div className='margin_right'>
          <img className='bussiness_finance_1_img' src="images/bussiness_finance_1.png" />
        </div>
      </div>



      <div className='section_1 padding-top'>
        <div className='margin_left'>
          <img className='bussiness_accounts_img' src="images/bussiness_accounts.png" />
        </div>

        <div className='margin_right margin_left margin_top'>
          <h2 className='heading font-weight_400 font-size-40'> <span className='font-weight'>Digital Credit </span>Assessments</h2><br/>
          <img className='Group_9_img ' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Run credit assessments for your business using digital tools on the Verified Network to ensure an accurate credit rating." /> <br/><br/>
          <img className='Group_9_img ' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Build trust with investors by providing the latest information about your business."/>
          <h4 className='Learn-More_1 color_skyblue NavLink margin_top'>Try it out <span><img className='arow_hw' src="images/Group (10).png" /></span></h4>
        </div>
      </div>
      <Individual_ZeroBalance individual_ZeroBalance={
        <div className='Zero-balance-skyblue'>
          <div className='margin_left padding-top'>
          <Heading className="font-weight-400 font-size-27 line-height-27 heading" heading={pricing.heading} />
            <h3 className='font-weight font-size-35 line-height-35 heading'>{pricing.subheading}</h3>
          </div>
          <div className='section_1 margin_left margin_right padding-top'>
            <div className='box_4 box-width box-height margin_top'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading'>Account</h2>
              <h4 className='heading_4 padding_top_20 margin mr'>For account creation, KYC and custody of assets</h4>
              <div className=''>
                <div className='Download-App margin border_skyblue'>Download App </div>
              </div>
              <div className='margin-top-15'>
                <Pragraph className='margin mr' pragraph="FREE account set up"></Pragraph>
                <Pragraph className='margin mr' pragraph="KYC Approval fee is waived off with 10 invites to friends to family."></Pragraph>
                <Pragraph className='margin mr' pragraph="0.03% per year on assets in custody."></Pragraph>
              </div>
            </div>
            <div className='box_5 box_5_boxshadow box_5_skybluecolor box-width box-purple-height'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading color-white'>Payments</h2>
              <h4 className='heading_4 color-white margin padding_top_20 mr'>For payments and withdrawal of digital cash to your bank account.</h4>
              <div className='margin_top'>
                <div className='Download-App margin border_skyblue'>Download App</div>
              </div>
              <div className='padding_top_20 '>
                <Pragraph className='margin color-white mr' pragraph="FREE peer to peer payments within the Verified Network."></Pragraph>
                <Pragraph className='color-white margin mr' pragraph="$15 card set up fee. $10 annual fee."></Pragraph>
                <Pragraph className='color-white margin mr' pragraph="0.3% on foreign exchange payments using cards."></Pragraph>
                <Pragraph className='color-white margin mr' pragraph="0.3% on currency withdrawals from the Verified Network to your bank account."></Pragraph>

              </div>
            </div>
            <div className='box_4 box-width box-height margin_top'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading'>Financing</h2>
              <h4 className='heading_4 padding_top_20 margin mr'>For issuing investment products to raise capital on the Verified Network</h4>
              <div className='margin_top'>
                <div className='Download-App border_skyblue margin '>Download App </div>
              </div>
              <div className='margin-top-15 '>
                <Pragraph className='margin mr' pragraph="$100 for upto four Credit Assessments per year."></Pragraph>
                <Pragraph className='margin mr' pragraph="$100 for upto four Credit Assessments per year."></Pragraph>
                <Pragraph className='margin mr' pragraph="0.1% for registering existing securities for sale. Calculated on value of assets sold."></Pragraph>

              </div>
            </div>
          </div>
        </div>
      } />

<div className='padding-top'>
<Individual_Quations individual_Quations={<div>
          <div><h2 className='center heading font-weight-400 '>Frequently Asked Questions</h2></div>
          {faqs.map(faqs=>{
          return<Individual_Quations individual_Quations={<div>
        <div className='box-shadow div-height div-width border-radius-20 margin_left margin_right section_1 margin_top'>
          <div className='pl pt font-size-18 heading '>{faqs.question}</div>
          <div><img className="Vector_pluse_img margin_top" src="images/Vector_pluse_icon.png" /></div>
        </div>
          </div>} />
        }) }
        </div>} />
        </div>

        <Box Box={<div className='box box-height-330 margin_right margin_left Invest margin_top_100'>
        <Heading className='padding_top_60 font-size-40' heading={ctaCardDetails.content} />
        <a href={ctaCardDetails.buttonCtaLink}><button className='Started-but'>{ctaCardDetails.buttonText}</button></a>
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
                <a href="About_us" className='NavLink'><td className="data color_grey">About us</td></a>
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
                <a href="Contact" className='data NavLink'><td className="data color_grey">Contact Us</td></a>

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

export default Businesses_Finance
