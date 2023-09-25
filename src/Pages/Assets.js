import React, { useEffect, useState } from 'react'

import Header from '../Component/Header';
import { NavLink } from 'react-router-dom';
import Footer from '../Component/Footer';
// import Box from '../Component/Box';
import Heading from '../Component/Heading';



function Assets() {
const [data, setData] = useState();
const [data1, setData1] = useState();
const [data2, setData2] = useState();
const [data3, setData3] = useState();
    useEffect(() => {
        fetch("https://cms.verified.network/api/assets/1?populate=*").then((data) => {
          return data.json();
        }).then((objectdata) => {
          console.log(objectdata);
          setData(objectdata.data.attributes);
        })
      }, []);

    useEffect(() => {
        fetch("https://cms.verified.network/api/asset-page?populate=*").then((data) => {
          return data.json();
        }).then((objectdata) => {
          console.log(objectdata);
          setData1(objectdata.data);
        })
      }, []);

      useEffect(() => {
        fetch("https://cms.verified.network/api/countries?populate=*").then((data) => {
          return data.json();
        }).then((objectdata) => {
          console.log(objectdata);
          setData2(objectdata.data);
        })
      }, []);

      useEffect(() => {
        fetch("https://cms.verified.network/api/asset-types?populate=*").then((data) => {
          return data.json();
        }).then((objectdata) => {
          console.log(objectdata);
          setData3(objectdata.data);
        })
      }, []);


    const attributes = data === undefined ? {} : data;
    const country = data === undefined ? {} : data.country.data.attributes;
    const asset_type = data === undefined ? {} : data.asset_type.data.attributes;
    const asset_page = data1 === undefined ? {} : data1.attributes;
     //console.log(asset_page)
     const assets_country = data2 === undefined ? [] : data2;
     //console.log(assets_country)
     const united_kingdom = assets_country[0] ? assets_country[0].attributes : {};
     const germany = assets_country[1] ? assets_country[1].attributes : {};
     const singapore = assets_country[2] ? assets_country[2].attributes : {};
     const india = assets_country[3] ? assets_country[3].attributes : {};
     const switzerland = assets_country[4] ? assets_country[4].attributes : {};
     //console.log(united_kingdom)

     const assets_type = data3 === undefined ? [] : data3;
    // console.log(assets_type)
     const equity = assets_type[0] ? assets_type[0].attributes : {};
     const debt = assets_type[1] ? assets_type[1].attributes : {};
     const structured_products = assets_type[2] ? assets_type[2].attributes : {};
     const real_estate = assets_type[3] ? assets_type[3].attributes : {};
     const funds = assets_type[4] ? assets_type[4].attributes : {};
     console.log(equity)
     

    return (
        <div>
            <Header Header={<div className="bg-light-blue-2  box-height-367">
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
                        <h1 className='font-size-60 line-height-60 font-weight center'>{asset_page.main_heading}</h1><br />
                        {/* <h4 className='heading_4 center'>Browse investment assets on the Verified Network. Sign up to view details, make investments, and trade investments.</h4> */}
                    </div>
                </div>
                <div className="box-height-330 border-radius-20 margin_right margin_left about_box  center">
                    <h1 className="center font-size-50 padding-top ">{asset_page.heading}</h1><br/><br/>
                    <p className=" pragraph ">{asset_page.description}</p>
                </div>
            </div>} />

            <div className='section_1 padding-top-220'>
                <div className='search margin_left  '>
                    <label className='input-height border_color_skyblue-2 border-radius-16 font-size-18'>
                        <img className='Group-502_img' src="images/Group 502.png" />
                        <input type ="search" placeholder='Search Assets'/>
                        {/* <input type="search" placeholder='Search Assets' /> */}
                    </label>
                </div>
                <div className=' ml'>

                    <select className='input-height border_color_skyblue-2 border-radius-16 width-217 font-size-18 color_grey'>
                        <option>All Asset</option>
                        <option>{equity.name}</option>
                        <option>{debt.name}</option>
                        <option>{structured_products.name}</option>
                        <option>{real_estate.name}</option>
                        <option>{funds.name}</option>
                    </select>
                </div>
                <div className='  mr ml'>
                    
                 <select className='input-height border_color_skyblue-2 border-radius-16 width-217 font-size-18 color_grey'>
                        
                     <option>All Countries</option>
                     <option>{united_kingdom.name}</option>
                     <option>{germany.name}</option>
                     <option>{singapore.name}</option>
                     <option>{india.name}</option>
                     <option>{switzerland.name}</option>
                 </select>
                
                   
                </div>
                <div className='  margin_right '>
                    <button className='input-height border-radius-60 data color-white login_button_color Verified_img font-size-18'>Search</button>
                </div>
            </div>

            <div>
                <div className='section_1'>
                <div>
                    <h2 className='font-size-40 margin_left padding-top'>All<span className='color-blue font-weight'> Assets</span></h2>
                </div>
                <div className='margin_right padding-top'>
                        <select className="input-height Verified_img font-size-18 border-radius-16 border_color_skyblue color_grey ">
                            <option>New to Old</option>
                            <option>Old to New</option>
                        </select>
                    </div>
                    </div>
                <div className='section_1 margin_top_100'>

                    <div className=' pl border-radius-16 border_color_skyblue width-363 height-364 hover-shadow margin_left'>
                        <button className=" margin_top font-size-18 line-height-27 background-color-C1F1EE color-C1F1EE border-radius-8 data height-35 width-90">{asset_type.name}</button><br /><br />
                        <h1 className="font-size-24 line-height-35">{attributes.title}</h1><br /><br />
                        <h1 className="Pages_style line-height-27">{attributes.product_name}</h1>
                        <p className=" line-height-27 font-size-18 color_grey">ISIN NO:</p><br /><br />
                        <div className="display-flex">
                            <img className="loction-img" src="images/Group 530.png" />
                            <p className="font-size-18 line-height-27 ml color_grey">{country.name}</p>
                        </div>
                    </div>
                </div>
            </div>
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

export default Assets
