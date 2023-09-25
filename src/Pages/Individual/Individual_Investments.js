import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header';
import {Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Heading from '../../Component/Heading';
import Individual_Pages from "../../Component/Individual_Pages";
import Footer from '../../Component/Footer';
import Box from '../../Component/Box';
import Individual_ZeroBalance from '../../Component/Individual_ZeroBalance';
import WalletBox from '../../Component/WalletBox';
import Individual_Quations from '../../Component/Individual_Quations';
import Pragraph from '../../Component/Pragraph';
function Individual_Investments() {

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
  const faq = data ? data.faq : [];
  //console.log("ctaCardDetails", ctaCardDetails )
  //console.log("downloadcta", downloadcta)
  //console.log("pricing", pricing)
    // console.log("hero", hero);


  return (
    <div>
       <Header Header={<div className="header_color_purple header_height">
        <div class="navbar">
          <a href ="/" ><img className="margin_left Verified_img" src="images/Verified.png" /></a>
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
            <h4 className="heading_4 margin_top">{hero.description}</h4>
            <h4 className="heading_4 padding_top_40">{hero.pitch}</h4>
            <a href={hero.playStoreLink}><img className=" google-img" src="images/Group 82.png" /></a>
             <a href={hero.appStoreLink}><img className=" google-img ml" src="images/Group 83.png" /></a>
          </div>
        </div>
      </div>} />

      <Individual_Pages individual_Pages={
  <div className='Accounts-assets margin_left margin_right section_2'>
        <div className='section_1 pt'>
          <Link to = "/Individuals"><img className='icon-images-hw margin_left_50' src = "images/Account-icon.png"/></Link>
          <Link to = "/IndividualAssets"><img className='icon-images-hw' src = "images/Assets-icon.png"/></Link>
        <Link to = "/IndividualDeposits"><img className='icon-images-hw' src = "images/Deposits-icon.png"/></Link>
          <Link to = "/IndividualPayments"><img className='icon-images-hw' src = "images/Payments-icon.png"/></Link>
          <Link to = "/IndividualInvestments"><img className='icon-images-hw margin_right_50 margin' src = "images/Investments-icon.png"/></Link>
        </div>
        <div className='section_1 margin-top-15'>
          <div className='margin_left_50 Pages_style'><Link  to = "/Individuals" className='NavLink color_grey'> Account</Link></div>
          <div className='Pages_style'><Link to = "/IndividualAssets" className='NavLink color_grey'>Assets</Link></div>
          <div className='Pages_style'><Link to = "/IndividualDeposits" className='NavLink color_grey'>Deposits</Link></div>
          <div className='Pages_style'><Link to = "/IndividualPayments" className='NavLink color_grey'>Payments</Link></div>
          <div className='margin_right_50 Pages_style'><Link to = "/IndividualInvestments" className='NavLink color_grey'>Investments</Link></div>
        </div>
      </div> 
}/>

     <div>
      <h2 className="font-weight_400 padding-top margin_right margin_left font-size-50"><span className='font-weight color-parpule'>Invest</span> in assets with higher returns, so far only available to the wealthy.</h2>
        {/* <Heading className="padding-top margin_left font-size-50" heading="Invest in assets with higher returns, so far only available to the wealthy."/> */}
      </div>

      <div className='section_1 padding-top '>
        <div className='margin_left'>
          <img className='individual_investments_1_img' src="images/individual_investments_1.png" />
        </div>

        <div className='margin_right margin_left margin_top_100'>
          <h2 className='heading font-weight_400 font-size-40'><span className='font-weight'>Higher Return</span> Investments</h2><br/>
          <img className='Group_9_img' src ="images/Group (9).png"/> <Pragraph className="display_inline ml" pragraph="Earn interest on your assets by purchasing investment products on the Verified Network."/> <br/><br/>
          <img className='Group_9_img' src ="images/Group (9).png"/> <Pragraph className="display_inline ml" pragraph="Benefit from higher interest rates outside your local currency on investments into financial products across the globe."/>
          <h4 className='Learn-More_1 color-parpule margin_top NavLink'>Try it out <span><img src="images/Group (3).png" /></span></h4>
        </div>
      </div>
      <div className='section_1 padding-top '>

        <div className='margin_right margin_left margin_top_100'>
          <h2 className='heading font-weight_400 font-size-40 width_459'><span className='font-weight'>Private Investment</span> Opportunities</h2><br/>
          <img className='Group_9_img' src ="images/Group (9).png"/><Pragraph className="display_inline ml"pragraph="Explore private investment opportunities from the best asset managers."/><br/><br/>
          <img className='Group_9_img' src ="images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Access to the best investment deals without opening an expensive wealth account."/>
          <h4 className='Learn-More_1 color-parpule margin_top NavLink'>Try it out <span><img src="images/Group (3).png" /></span></h4>
        </div>

        <div className='margin_right'>
          <img className='individual_investments_2_img' src="images/individual_investments_2.png" />
        </div>
      </div>

      <div className='section_1 padding-top '>
        <div className='margin_left'>
          <img className='individual_investments_3_img' src="images/individual_investments_3.png" />
        </div>

        <div className='margin_right margin_left margin_top_100'>
          <h2 className='heading font-weight_400 font-size-40  width_459'><span className='font-weight'>Liquidity</span> For Private Investments</h2><br/>
          <img className='Group_9_img' src ="images/Group (9).png"/><Pragraph className="display_inline ml" Pragraph="Sell your private investments directly and get access to liquidity when you need it – without having to pay expensive brokerage for trading investments."/>
          <h4 className='Learn-More_1 color-parpule margin_top NavLink'>Try it out <span><img src="images/Group (3).png" /></span></h4>
        </div>
      </div>

      <Individual_ZeroBalance individual_ZeroBalance={
        <div className='Zero-balance-purple'>
          <div className='margin_left padding-top'>
          <Heading className="font-weight_400 font-size-27 line-height-27 heading" heading={pricing.heading} />
            {/* <h3 className=' font-weight_400 font-size-27 line-height-27 heading'>{pricing.heading}</h3> */}
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
                <Pragraph className=' margin mr' pragraph="FREE account set up"></Pragraph>
                <Pragraph className='margin mr' pragraph="KYC Approval fee is waived off with 10 invites to friends to family."></Pragraph>
                <Pragraph className='margin mr' pragraph="0.03% per year on assets in custody."></Pragraph>
              </div>
            </div>
            <div className='box_5 box-width box-purple-height'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading color-white'>Payments</h2>
              <h4 className='heading_4 color-white margin padding_top_20 mr'>For payments and withdrawal of digital cash to your bank account.</h4>
              <div className='margin_top'>
                <div className='Download-App margin '>Download App for <span className='color-parpule'>Android   ios</span> </div>
              </div>
              <div className='padding_top_20 '>
                <Pragraph className='margin color-white mr' pragraph="FREE peer to peer payments within the Verified Network."></Pragraph>
                <Pragraph className='color-white margin mr' pragraph="$15 card set up fee. $10 annual fee.">$15 card set up fee. $10 annual fee.</Pragraph>
                <Pragraph className='color-white margin mr' pragraph="0.3% on foreign exchange payments using cards.">   </Pragraph>
                <Pragraph className='color-white margin mr' pragraph="0.3% on currency withdrawals from the Verified Network to your bank account."></Pragraph>

              </div>
            </div>
            <div className='box_4 box-width box-height margin_top'>
              <h2 className='font-weight-500  padding_top_60 center font-size-24 line-height-27 heading'>Investments</h2>
              <h4 className='heading_4 padding_top_20 margin mr'>For registering existing assets for sale, and trading investments.</h4>
              <div className='margin_top'>
                <div className='Download-App margin '>Download App for <span className='color-parpule'>Android   ios</span> </div>
              </div>
              <div className='padding_top_20 margin_top'>
                <Pragraph className='margin mr' pragraph ="0.1% for registering existing securities for sale. Calculated on value of assets sold. "></Pragraph>
                <Pragraph className='margin mr' pragraph="0.1% on every investment brought and sold on the Verified Network."></Pragraph>

              </div>
            </div>
          </div>
        </div>
      } />

      {/* <Individual_ZeroBalance className="" individual_ZeroBalance = {
  <div className='Zero-balance-purple'>
  <div className='margin_left padding-top margin_top'>
  <Heading className="font-weight_400 font-size-27 line-height-27 heading" heading={pricing.heading} />
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
}/> */}
<div className='Asked-questions-color padding-top'>

<Individual_Quations individual_Quations={
        <div>
          <div><h2 className='center heading font-weight_400'>Frequently Asked Questions</h2></div>
          {faq.map(faq=>{
          return<Individual_Quations individual_Quations={<div>
        <div className='box-shadow div-height div-width border-radius-20 margin_left margin_right section_1 margin_top'>
          <div className='pl pt font-size-18 heading '>{faq.question}</div>
          <div><img className="Vector_pluse_img margin_top" src="images/Vector_pluse_icon.png" /></div>
        </div>
          </div>} />
        }) }
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
        <Heading className='padding_top_40 font-size-40  padding_right padding_left' heading={ctaCardDetails.content} />
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
                <a href="" className='data NavLink'><td className="data color_grey">Contact Us</td></a>

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

export default Individual_Investments
