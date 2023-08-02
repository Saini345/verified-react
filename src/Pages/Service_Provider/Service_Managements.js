import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header';
import Heading from '../../Component/Heading';
import { NavLink } from 'react-router-dom';
import Individual_Pages from '../../Component/Individual_Pages';
import { Link } from 'react-router-dom';
import Individual_Quations from '../../Component/Individual_Quations';
import Box from '../../Component/Box';
import Footer from '../../Component/Footer';
import Pragraph from '../../Component/Pragraph';
function Service_Managements() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://cms.verified.network/api/service?populate=*").then((data) => {
      return data.json();
  }).then((objectdata) => {
      console.log(objectdata);
      setData(objectdata.data.attributes);
  })
  }, []);

  const hero = data === undefined ? {} : data.hero;
  const pricing = data === undefined ? {}: data.pricing;
  const downloadcta = data === undefined ? {}:data.downloadcta;
  const CtaCardDetails = data === undefined ? {} : data.CtaCardDetails;
  const faqs = data ? data.faqs : [];
  //console.log("ctaCardDetails", ctaCardDetails )
  //console.log("downloadcta", downloadcta)
  //console.log("pricing", pricing)
    // console.log("hero", hero);



  return (
    <div>
       <Header Header={<div className="header_color_grey header_height">
        <div class="navbar">
          <a href = "/"><img className="margin_left Verified_img" src="images/Verified.png" /></a>
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
            <h4 className="heading_4 margin_top">{hero.description}</h4>
            <h4 className="heading_4 padding_top_40">{hero.pitch}</h4>
            <a href=""><button className='login_button_color login'> Sign in </button></a>
           <a href=""><button className="login margin color-black border_color_blue">Explore</button></a>
          </div>
        </div>
      </div>} />
        <Individual_Pages individual_Pages={
          <div className='Accounts-assets margin_left margin_right section_2'>
            <div className='section_1 padding_t'>
              <Link to="/Service Providers"><img className='icon-images-hw margin_left_50 margin-top-15' src='images/Group (7)_service.png' /></Link>
              <Link to="/ServiceManagement"><img className='icon-images-hw' src='images/Vector (4)_service.png' /></Link>
              <Link to="/ServiceManagements"><img className='icon-images-hw' src='images/Vector (5)_service.png' /></Link>
              <Link to="/ServicePayments"><img className='icon-images-hw' src='images/Group (8)_service.png' /></Link>
              <Link to="/ServiceNetworkOperator"><img className='icon-images-hw margin_right_50 margin' src='images/Vector (6)_service.png' /></Link>
            </div>
            <div className='section_1 '>
              <div className='margin_left_50 Pages_style color_grey'><Link to="/Service Providers" className='NavLink color_grey'>Asset Origination</Link> </div>
              <div className='Pages_style'><Link to="/ServiceManagement" className='NavLink color_grey'>Asset Management</Link></div>
              <div className='Pages_style'><Link to="/ServiceManagements" className='NavLink color_grey'>Asset Servicing</Link></div>
              <div className='Pages_style'><Link to="/ServicePayments" className='NavLink color_grey'>Payments</Link></div>
              <div className='margin_right_50 Pages_style'><Link to="/ServiceNetworkOperator" className='NavLink color_grey'>Network Operators</Link></div>

            </div>
          </div>
        } />

        <div>
          <h2  className="padding-top margin_left font-size-50 margin_right font-weight_400"><span className='font-weight color-blue'>Registration, Custody </span>and Transfer of Assets just got an Upgrade.</h2>
          {/* <Heading className="padding-top margin_left font-size-50" heading="Manage Capital, and Maintain High Asset Quality.  " /> */}
        </div>

        <div className='section_1 padding-top'>
          <div className='margin_left'>
            <img className='Group_17516_service_img' src="images/Group 17516_service.png" />
          </div>

          <div className='margin_right margin_left margin_top'>
            <h2 className='heading font-weight-400 font-size-40'> Digital <span className='font-weight'>Asset Custody</span></h2><br/>
            <img className='Group_9_img' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Exercise control on assets by providing regulated custody for fiat currencies paid by investors on the Verified Network."></Pragraph><br/><br/>
            <img className='Group_9_img' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Settle funds for issuance of tokenized securities by businesses. "></Pragraph>
            <h4 className='Learn-More_1 color-blue margin_top NavLink'>Try it out <span><img src="images/Group (1).png" /></span></h4>
          </div>
        </div>

        <div className='section_1 padding-top'>

          <div className='margin_right margin_left margin_top'>
            <h2 className='heading font-weight_400 font-size-40'><span className='font-weight'> Transfer</span> Agency</h2><br/>
            <img className='Group_9_img' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Function as a regulated custodian and provide custody for underlying assets of tokenized securities."></Pragraph><br/><br/>
            <img className='Group_9_img' src = "images/Group (9).png"/> <Pragraph className="display_inline ml" pragraph="Transfer assets from sellers to buyers to fulfill transactions of tokenized securities."></Pragraph>
            <h4 className='Learn-More_1 color-blue margin_top NavLink'>Try it out <span><img src="images/Group (1).png" /></span></h4>
          </div>
          <div className='margin_right'>
            <img className='Group_17539_servic_img' src="images/Group 17539_service.png" />
          </div>
        </div>

        <div className='section_1 padding-top'>
          <div className='margin_left'>
            <img className='Group_17517_service_img' src="images/Group 17517_service.png" />
          </div>

          <div className='margin_right margin_left margin_top'>
            <h2 className='heading font-weight_400 font-size-40'>Register <span className='font-weight'>Tokenized </span>Securities</h2><br/>
            <img className='Group_9_img' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Partner with businesses on the Verified Network and register shares and bonds issued by them  with national depositories  and on the blockchain ledger, subject to country regulations."></Pragraph><br/><br/>
            <img className='Group_9_img' src = "images/Group (9).png"/><Pragraph className="display_inline ml" pragraph="Offer registered tokenized securities for subscription to investors on the Verified Network."></Pragraph>
            <h4 className='Learn-More_1 color-blue margin_top NavLink'>Try it out <span><img src="images/Group (1).png" /></span></h4>
          </div>
        </div>

        <div className='Asked-questions-color margin_top_100 padding_top_60'>
        <div><h2 className='center heading font-weight-400 '>Frequently Asked Questions</h2></div>
       { faqs.map( faqs=>{
        return<Individual_Quations individual_Quations={<div>
          <div className='box-shadow div-height div-width border-radius-20 margin_left margin_right section_1 margin_top'>
            <div className='pl pt font-size-18 heading '>{faqs.question}</div>
            <div><img className="Vector_pluse_img margin_top" src="images/Vector_pluse_icon.png" /></div>
          </div>
        </div>} />
       })}
      </div>
        

<Box Box={<div className='box box-height-330 margin_right margin_left Invest margin_top_100'>
        {/* <h1 className='padding_top_60 font-size-40'>Invest in the Verified Network and earn a revenue share</h1> */}
        <h4 className='font-size-18 font-weight-400 heading padding_top_60'>{CtaCardDetails.subHeading}</h4>
        <Heading className='padding_t font-size-40' heading={CtaCardDetails.heading} />
        <a href ={CtaCardDetails.primaryButtonLink}><button className='Started-but margin_top'>{CtaCardDetails.primaryButtonText}</button></a>
        <a href={CtaCardDetails.secondaryButtonLink}><button className="margin_top margin color-black border_color_blue Contact_Sales_btn ">{CtaCardDetails.secondaryButtonText}</button></a>
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

export default Service_Managements
