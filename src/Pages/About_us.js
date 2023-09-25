import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer';
import Box from '../Component/Box';
import Heading from '../Component/Heading';
import Pragraph from '../Component/Pragraph';

function About_us() {

    const [data, setData] = useState();

  useEffect(() => {
    fetch("https://cms.verified.network/api/about-us?populate=*").then((data) => {
      return data.json();
    }).then((objectdata) => {
      console.log(objectdata);
      setData(objectdata.data.attributes);
    })
  }, []);  
  
  const attributes = data === undefined ? {} : data;
//   const teamTitle = data === undefined ? {} : data;
  const aboutUsHeader = data === undefined ? {} :data.aboutUsHeader;
  const infoCard = data === undefined ? {} : data.infoCard;
  const ctaCardDetails = data=== undefined ? {} : data.ctaCardDetails;

    return (
        <div>
            <div className='bg-light-blue  box-height-367 pt'>
                <div className='section_1'>
                    <a href="/"><img className="margin_left Verified_img" src="images/Verified.png" /></a>
                    <button className="margin_right login sign_up_color">Sign Up</button>
                </div>
                <h1 className='center line-height-60 font-size-60 font-weight padding-top'>{attributes.title}</h1>
            </div>

            <div className='box-height-350 box-position about_box border-radius-20 margin_right margin_left'>
                <Heading heading={aboutUsHeader.title} className='center font-size-50 padding_top_40' />
                <p className='pragraph bussiness_accounts_img margin_right_23 margin_left_23 center padding_top_40'>{aboutUsHeader.description}</p>
            </div>


            <div className='section_1 padding-top-300'>
                <div className='margin_left'>
                    <img className='Group_17490_img' src="images/Group 17490.png" />
                </div>

                <div className='margin_right margin_left margin_top_60'>
                    <h2 className='heading font-weight font-size-40'>{infoCard.title}</h2><br />
                    <img className='Group_9_img ' src="images/Group (9).png" /><Pragraph className="display_inline ml" pragraph={infoCard.keypoints}></Pragraph><br /><br />
                    <img className='Group_9_img ' src="images/Group (9).png" /><Pragraph className="display_inline ml" pragraph={infoCard.keypoints}></Pragraph><br /><br />
                    <img className='Group_9_img ' src="images/Group (9).png" /><Pragraph className="display_inline ml" pragraph={infoCard.keypoints}></Pragraph>
                </div>
            </div>

            <Box Box={<div className='box box-height-373 margin_right margin_left Invest margin_top_100'>
                <Heading heading={attributes.partnerTitle} className='padding_top_40 font-size-40 padding_right padding_left' />
                <div className='section_1 margin_top_60'>
                    <img className='Group_17041_img margin_left' src="images/Group 17041.png" />
                    <img className='Grey_2_img' src="images/Grey 2.png" />
                    <img className='icici_bank_logo_symbol_2_img' src="images/icici_bank_logo_symbol 2.png" />
                    <img className='KKK_2_img margin_right' src="images/KKK 2.png" />
                </div>
            </div>} />

            <div className='margin_top_100 bg_white_blue height_736'>
                <Heading heading={attributes.teamTitle} className='center padding_top_60 font-weight'></Heading>
                <div className='section_1 padding-top'>
                    <div className='margin_left'>
                        <img className='Mask-Group-img' src="images/Mask Group.png" />
                    </div>
                    <div className='margin_right'>
                        <p className='font-size-24 heading  line-height-27 font-weight_400 margin_top'>Kallol Borah </p>
                        <p className='font-size-18 color-blue font-weight_400'>Founder</p><br/>
                        <p className='pragraph width_557'>Kallol is an entrepreneur with 20 years of experience building businesses across Europe and Asia. He heads products at Verified. Kallol is an alumni of the London School of Economics.</p><br/><br/>
                        <img className='' src ="images/Group 17353.png"/>
                    </div>
                </div>
            </div>

            <div className='margin_top_100 '>
                <Heading heading={attributes.mapTitle} className='font-size-40 font-weight line-height-35 center'></Heading>
                <img className='Group_501_img margin_top_100' src="images/Group 501.png"/>
                <img className='Map_img margin_top_100 margin_right margin_left' src="images/Map.png"/>
            </div>

            

            <Box Box={<div className='box box-height-330 margin_right margin_left Invest margin_top_100'>
                <Heading heading={ctaCardDetails.content} className='padding_top_40 font-size-40 padding_right padding_left' />

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
                                <a href="Contact" className='NavLink'><td className="data color_grey">Contact Us</td></a>

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

export default About_us
