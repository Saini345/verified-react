import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import Heading from '../../Component/Heading';
import Pragraph from '../../Component/Pragraph';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Box from '../../Component/Box';
import WalletBox from '../../Component/WalletBox';
import { NavLink } from 'react-router-dom';


function Homepage() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://cms.verified.network/api/homepage?populate=*").then((data) => {
            return data.json();
        }).then((objectdata) => {
            console.log(objectdata);
            setData(objectdata.data.attributes);
        })
    }, []);


    const hero = data === undefined ? {} : data.hero;
    //console.log("hero", hero);
    const news = data ? data.News : [];
    const newsheader = data ? data.NewsHeader : null;
    const downloadCta = data === undefined ? {} : data.downloadCta;
    const ctaCardDetails = data === undefined ? {} : data.ctaCardDetails;
    const AboutWork = data === undefined ? {} : data.AboutWork;
    const UsecaseHeading = data ? data.UsecaseHeading : null;
    const UsecaseParagraph = data ? data.UsecaseParagraph : "";
    const FeaturesTitle = data ? data.FeaturesTitle : "";
    const FeaturesParagraph = data ? data.FeaturesParagraph : "";
    const ServicedByTitle = data ? data.ServicedByTitle : "";

    const UsecaseCard = data === undefined ? [] : data.UsecaseCard;
    const Individuals = UsecaseCard[0] ? UsecaseCard[0] : {};
    const Businesses = UsecaseCard[1] ? UsecaseCard[1] : {};
    const Service_Providers = UsecaseCard[2] ? UsecaseCard[2] : {};

    const FeatureCard = data === undefined ? [] : data.FeatureCard;
    const Payments = FeatureCard[0] ? FeatureCard[0] : {};
    const Financing = FeatureCard[1] ? FeatureCard[1] : {};
    const Investments = FeatureCard[2] ? FeatureCard[2] : {};

    return (
        <div>
            <Header Header={<div className="header_color_skyblue">
                <div class="navbar">
                    <a><img className="margin_left Verified_img" src="images/Verified.png" /></a>
                    <ul className="li-list">
                        <li><NavLink to="/Individuals" className="NavLink color-black">Individuals</NavLink></li>
                        <li><NavLink to="/Businesses" className="NavLink color-black">Businesses</NavLink></li>
                        <li><NavLink to="/Service Providers" className="NavLink color-black">Service Providers</NavLink></li>
                        <li><button className="margin_right login login_button_color">Login</button></li>
                    </ul>
                </div>
                <div className='section_1'>
                    <div className='margin_left'>
                        <Heading className="font-size-60" heading={hero.heading} />
                        <Pragraph pragraph={hero.description} className="margin_top pragraph_hw" />
                        <h4 className="heading_4">{hero.pitch}</h4>
                        <a href={hero.playStoreLink}><img className="google-img" src="images/Group 82.png" /></a>
                        <a href={hero.appStoreLink}><img className=" google-img ml" src="images/Group 83.png" /></a>
                    </div>
                    <div className='margin_right'>
                        <img className="homepage_img" src="images/homepage-Banner.png" />
                    </div>
                </div>
            </div>} />

            <div className='section_1 padding-top'>
                <div className='margin_left'>
                    <Heading heading={UsecaseHeading} className='heading_1 width' />
                    <h2 className='anymore font-size-50 margin_top'>Not anymore.</h2>
                </div>
                <div className='margin_right padding_top_60'>
                    <img src="images/Rectangle.png" />
                    <Pragraph pragraph={UsecaseParagraph} className="margin_top pragraph_hw" />
                </div>
            </div>

            <div className='section_1 padding-top'>
                <div className='margin_left'>
                    <img className='info_1_img' src="images/info_1.png" />
                </div>
                {/* {UsecaseCard.map(UsecaseCard=>{
                    return<div className='margin_right'>
                    <img src="images/Group 161.png" />
                    <div className='font-size-40 margin_top'>For <span className='color-parpule'>{UsecaseCard.title}</span></div>
                    <h4 className='heading_4'>{UsecaseCard.subtitle}</h4>
                    <p className='pragraph'>{UsecaseCard.description}</p>
                    <a href={UsecaseCard.linkUrl}><h4 className='Learn-More_1 color-parpule'>Learn More  <span><img src="images/Group (3).png" /></span></h4></a>
                </div>
})} */}
                <div className='margin_right margin_left'>
                    <img className='margin_left' src="images/Group 161.png" />
                    <div className='font-size-40 margin_top margin_left'>For <span className='color-parpule'>{Individuals.title}</span></div>
                    <h4 className='heading_4 margin_left'>{Individuals.subtitle}</h4>
                    <Pragraph pragraph={Individuals.description} className="margin_left pragraph_hw" />
                    <a className='NavLink' href={Individuals.linkUrl}><h4 className='Learn-More_1 color-parpule margin_left NavLink'>Learn More <span><img src="images/Group (3).png" /></span></h4></a>
                </div>
            </div>

            <div className='section_1 padding-top margin_top'>
                <div className='margin_left'>
                    <img src='images/Group.png' />
                    <div className='font-size-40 margin_top'>For <span className='color-green'>{Businesses.title}</span></div>
                    <h4 className='heading_4'>{Businesses.subtitle}</h4>
                    {/* <p className='pragraph'>{Businesses.description}</p> */}
                    <Pragraph pragraph={Businesses.description} className="pragraph_hw" />
                    <a className='NavLink' href={Businesses.linkUrl}><h4 className='Learn-More_1 color-green'>Learn More <span><img src="images/Group (2).png" /></span></h4></a>
                </div>
                <div className='margin_right'>
                    <img className='start-verification-img' src="images/start-verification.png" />
                </div>
            </div>

            <div className='section_1 padding-top'>
                <div className='margin_left'>
                    <img className='service_Provider-img' src="images/service_Provider.png" />
                </div>
                <div className='margin_right'>
                    <img src="images/Vector.png" />
                    <div className='font-size-40 margin_top'>For <span className='color-blue'>{Service_Providers.title}</span></div>
                    <h4 className='heading_4'>{Service_Providers.subtitle}</h4>
                    {/* <p className='pragraph'>{Service_Providers.description}</p> */}
                    <Pragraph pragraph={Service_Providers.description} className="pragraph_hw" />
                    <a className='NavLink' href={Businesses.linkUrl}><h4 className='Learn-More_1 color-blue'>Learn More<span><img src="images/Group (1).png" /></span></h4></a>
                </div>
            </div>

            <div className='box box-height-510 margin_left margin_right margin_top_100 padding-top'>
                <Heading heading={ServicedByTitle} className="center margin_top font-size-30" />
                {/* <div className='center margin_top font-size-30'>{ServicedByTitle}<span className='color-blue'></span> </div> */}
                <div className='section_1 padding_top_40'>
                    <div className='margin_left'>
                        <img className='padding_top_60' src="images/image 28.png" />
                    </div>
                    <div className='margin_right padding_top_60'>
                        <h2 className='heading_2'>Finimmo</h2>
                        {/* <p className='pragraph'>Finimmo supports the issuance of tokenized notes securitized by assets. Based in Luxembourg, Finimmo manages in excess of EUR 1 billion in asset backed securities</p> */}
                        <Pragraph className="pragraph_hw" pragraph="Finimmo supports the issuance of tokenized notes securitized by assets. Based in Luxembourg, Finimmo manages in excess of EUR 1 billion in asset backed securities" />
                        <img src="images/Group 17353.png" />
                    </div>
                </div>
            </div>

            <div className='section_1 padding-top'>
                <div className='margin_left'>
                    <Heading heading={FeaturesTitle} className='padding-top padding-top heading_1 width margin_top' />
                    <p className='heading_4 width margin_top'>{FeaturesParagraph}</p>
                </div>

                <div className='margin_right'>
                    <div className='box_1 background-color-green'>
                        <img className='feature' src="images/feature-1.svg" />
                        <h3 className='margin color-green'>{Payments.title}</h3>
                        <p className="margin margin_top mr">{Payments.description}</p>
                    </div>
                    <div className='box_1 background-color-parpule'>
                        <img className='feature' src="/images/feature-2.svg" />
                        <h3 className='margin color-parpule'>{Financing.title}</h3>
                        <p className='margin margin_top mr'>{Financing.description}</p>
                    </div>
                    <div className='box_1 background-color-blue margin_top'>
                        <img className='feature' src="/images/feature-3.svg" />
                        <h3 className='margin color-blue'>{Investments.title}</h3>
                        <p className='margin margin_top mr'>{Investments.description}</p>
                    </div>
                </div>
            </div>

            <div className='section_1 padding-top'>
                <div className='margin_left'>
                    <img className='finance-img' src="images/finance.png" />
                </div>
                <div className='margin_right margin_top'>
                    <Heading heading={AboutWork.title} className='Disrupting width ' /><br />
                    <img className='Group_9_img' src="images/Group 278.png" /> <Pragraph pragraph={AboutWork.work1} className="margin_top display_inline ml" /><br /><br />
                    <img className='Group_9_img' src="images/Group 278.png" /> <Pragraph pragraph={AboutWork.work2} className="display_inline ml" /><br /><br />
                    <img className='Group_9_img' src="images/Group 278.png" /><Pragraph pragraph={AboutWork.work3} className="display_inline ml" />

                </div>
            </div>

            <div className='Latest-News'>
                <div className='section_1'>
                    <h1 className='margin_left heading_1 padding-top font-size-40 color-black'>{newsheader}</h1>
                    <p className='margin_right padding-top color-blue see-all'> See all</p>
                </div>
                <div className='section_1 margin_left margin_right margin_top'>
                    {news.map(news => {
                        return <div className='box_4'>
                            <button className='button margin button-text'>{news.date}</button>
                            <h2 className='heading_2 margin text-transform margin_top'>{news.title}</h2>
                            <p className="heading_4 margin">{news.description}</p>
                            <a className='NavLink' href={news.link}><h4 className='margin color-blue'>Read More <span><img src="images/Group (1).png" /></span></h4></a>
                        </div>
                    })}

                </div>
                <div><img className='Group-17353-img' src="images/Group 17353.png" /></div>
                <WalletBox className="Latest-News" WalletBox={<div className='section_1 padding-top'>
                    <div className='margin_left'>
                        <div className='padding-top font-size-40 width'>
                            <Heading heading={downloadCta.heading} className='' />
                        </div>
                        <p className='heading_4'>{downloadCta.subHeading}</p>
                        <a href={downloadCta.playStoreLink}><img className="margin_top google-img" src="images/Group 82.png" /></a>
                        <a href={downloadCta.appStoreLink}><img className="margin_top google-img ml" src="images/Group 83.png" /></a>

                    </div>
                    <div className='margin_right'>
                        <img className='download_Banner-img' src='images/download_Banner.png' />

                    </div>
                </div>} />
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
export default Homepage;
