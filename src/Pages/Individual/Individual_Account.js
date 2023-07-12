import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header';
import Box from '../../Component/Box';
import { NavLink } from 'react-router-dom';
import Footer from '../../Component/Footer';
import Heading from '../../Component/Heading';
import WalletBox from '../../Component/WalletBox';
import Individual_Pages from "../../Component/Individual_Pages";
import Individual_ZeroBalance from '../../Component/Individual_ZeroBalance';
import { Link } from 'react-router-dom';
import Individual_Quations from '../../Component/Individual_Quations';
// import Individual_Quations from '../../Component/Individual_Quations';


function Individual_Account() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://cms.verified.network/api/indivisual?populate=*").then((data) => {
      return data.json();
  }).then((objectdata) => {
      console.log(objectdata);
      setData(objectdata.data.attributes);
  })
  }, []);

  const hero = data === undefined ? {} : data.hero;
  const pricing = data === undefined ? {}: data.pricing;
  const downloadcta = data === undefined ? {}:data.downloadcta;
  const ctaCardDetails = data === undefined ? {} : data.ctaCardDetails;
  //console.log("ctaCardDetails", ctaCardDetails )
  //console.log("downloadcta", downloadcta)
  //console.log("pricing", pricing)
    // console.log("hero", hero);

  return (

    <div>
      <Header Header={<div className="header_color_purple header_height">
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
            <h2 className='heading_2 '>{hero.subheading}</h2>
            <Heading className='heading font-weight font-size-60' heading={hero.heading} />
            {/* <h1 className='heading'>Built for the New Age Investor.</h1> */}
            <h4 className="heading_4">{hero.description}</h4>
            <h4 className="heading_4 margin_top">{hero.pitch}</h4>
            <a href={hero.playStoreLink}><img className="margin_top google-img" src="images/Group 82.png" /></a>
             <a href={hero.appStoreLink}><img className="margin_top google-img ml" src="images/Group 83.png" /></a>
            
          </div>
        </div>
      </div>}/>

      <Individual_Pages individual_Pages={
        <div className='Accounts-assets margin_left margin_right section_2'>
          <div className='icon-images-flex pt'>
            <img className='icon-images-hw margin_left_50' src="images/Account-icon.png" />
            <Link to="/IndividualAssets"><img className='icon-images-hw' src="images/Assets-icon.png" /></Link>
            <Link to="/IndividualDeposits"><img className='icon-images-hw' src="images/Deposits-icon.png" /></Link>
            <Link to="/IndividualPayments"><img className='icon-images-hw' src="images/Payments-icon.png" /></Link>
            <Link to="/IndividualInvestments"><img className='icon-images-hw margin_right_50 margin' src="images/Investments-icon.png" /></Link>
          </div>
          <div className='icon-images-flex margin-top-15'>
            <div className='margin_left_50 color_grey Pages_style'> Account</div>
            <div className='Pages_style'><Link to="/IndividualAssets" className='NavLink color_grey'>Assets</Link></div>
            <div className='Pages_style'><Link to="/IndividualDeposits" className='NavLink color_grey'>Deposits</Link></div>
            <div className='Pages_style'><Link to="/IndividualPayments" className='NavLink color_grey'>Payments</Link></div>
            <div className='margin_right_50 Pages_style'><Link to="/IndividualInvestments" className='NavLink color_grey'>Investments</Link></div>
          </div>
        </div>
      } />


      <div>
        <Heading className="padding-top margin_left font-size-50" heading="Create Global Accounts in Seconds." />
      </div>


      <div className='section_1 padding-top'>
        <div className='margin_left'>
          <img className='individual_accounts' src="images/individual_accounts.png" />
        </div>

        <div className='margin_right margin_left'>
          <h2 className='heading font-weight font-size-40'> Multi Currency Accounts</h2>
          <p className="pragraph">Create a global, multi-currency account in seconds with open and democratic access for all.</p>
          <h4 className='Learn-More_1 color-parpule margin_left NavLink'>Try it out <span><img src="images/Group (3).png" /></span></h4>
        </div>
      </div>



      <Individual_ZeroBalance individual_ZeroBalance={
        <div className='Zero-balance-purple'>
          <div className='margin_left padding-top'>
          <Heading className="font-weight-400 font-size-27 line-height-27 heading" heading={pricing.heading} />
            {/* <h3 className=' font-weight-400 font-size-27 line-height-27 heading'>{pricing.heading}</h3> */}
            <h3 className='font-weight font-size-35 line-height-35 heading'>{pricing.subheading}</h3>
          </div>
          <div className='section_1 margin_left margin_right padding-top'>
            <div className='box_4 box-width box-height margin_top'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading'>Account</h2>
              <h4 className='heading_4 padding_top_20 margin mr'>For account creation, KYC and custody of assets</h4>
              <div className=''>
                <div className='Download-App margin '>Download App for <span className='color-parpule'>Android   ios</span> </div>
              </div>
              <div className='padding_top_20 margin_top'>
                <p className='pragraph_1 margin mr'>FREE account set up</p>
                <p className='pragraph_1 margin mr'>KYC Approval fee is waived off with 10 invites to friends to family.</p>
                <p className='pragraph_1 margin mr'>0.03% per year on assets in custody.</p>
              </div>
            </div>
            <div className='box_5 box-width box-purple-height'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading color-white'>Payments</h2>
              <h4 className='heading_4 color-white margin padding_top_20 mr'>For payments and withdrawal of digital cash to your bank account.</h4>
              <div className='margin_top'>
                <div className='Download-App margin '>Download App for <span className='color-parpule'>Android   ios</span> </div>
              </div>
              <div className='padding_top_20 '>
                <p className='pragraph_1 margin color-white mr'>FREE peer to peer payments within the Verified Network.</p>
                <p className='pragraph_1 color-white margin mr'>$15 card set up fee. $10 annual fee.</p>
                <p className='pragraph_1 color-white margin mr'>0.3% on foreign exchange payments using cards.   </p>
                <p className='pragraph_1 color-white margin mr'>0.3% on currency withdrawals from the Verified Network to your bank account.</p>

              </div>
            </div>
            <div className='box_4 box-width box-height margin_top'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading'>Investments</h2>
              <h4 className='heading_4 padding_top_20 margin mr'>For registering existing assets for sale, and trading investments.</h4>
              <div className='margin_top'>
                <div className='Download-App margin '>Download App for <span className='color-parpule'>Android   ios</span> </div>
              </div>
              <div className='padding_top_20 margin_top'>
                <p className='pragraph_1 margin mr'>0.1% for registering existing securities for sale. Calculated on value of assets sold. </p>
                <p className='pragraph_1 margin mr'>0.1% on every investment brought and sold on the Verified Network.</p>

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


        <WalletBox className="Latest-News" WalletBox={<div className='section_1 padding-top'>
          <div className='margin_left'>
            <div className='padding-top font-size-40 width'>
              <Heading heading={downloadcta.heading} className='' />
            </div>
            <p className='heading_4'>{downloadcta.subheading}</p>
            <a href={downloadcta.playStoreLink}><img className="margin_top google-img" src="images/Group 82.png" /></a>
            <a href={downloadcta.appStoreLink}><img className="margin_top google-img ml" src="images/Group 83.png" /></a>

          </div>
          <div className='margin_right'>
            <img className='Sownoad-img' src='images/Sownoad.png' />

          </div>
        </div>} />
      </div>

      <Box Box={<div className='box box-height-330 margin_right margin_left Invest margin_top_100'>
        {/* <h1 className='padding_top_60 font-size-40'>Invest in the Verified Network and earn a revenue share</h1> */}
        <Heading className='padding_top_60 font-size-40' heading={ctaCardDetails.content} />
        <a href={ctaCardDetails.buttonCtaNavLink}><button className='Started-but'>{ctaCardDetails.buttonText}</button></a>
       
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

export default Individual_Account;