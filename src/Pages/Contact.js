import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Component/Header'
import Box from '../Component/Box'
import Heading from '../Component/Heading'
import Pragraph from '../Component/Pragraph'
import Footer from '../Component/Footer'
import { useFormik } from 'formik';
import { signUpSchema } from './Schema';



const initialValues = {
    first_name: "",
    last_name: "",
    country: "",
    email: "",
    phone_number: "",
    query_type: "",
    message: "",
}
function Contact() {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema : signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });
    
    console.log(errors);
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
                        <h1 className='font-size-60 line-height-60 font-weight center'>Contact Us</h1><br />
                        {/* <h4 className='heading_4 center'>Browse investment assets on the Verified Network. Sign up to view details, make investments, and trade investments.</h4> */}
                    </div>
                </div>
               
            </div>} />
             
            
            <form onSubmit={handleSubmit}>
                <div className='about_box box-position height-1280 margin_right margin_left border-radius-20'>
                    <div>
                        <Pragraph className="padding_top_40 center" pragraph="Have questions? The quickest way to get in touch with us is by filling form below." />
                    </div>
                    <div className='margin_right margin_left margin_top_100'>
                        <div className='section_1'>
                            <div className=''>
                                <lable className="mr heading_4">First Name</lable><br />
                                <input
                                    className="pragraph border-radius-20 border_color_skyblue  width-459 height-60 mr pl"
                                    type="name"
                                    name="first_name"
                                    placeholder="Enter your first name"
                                    value={values.first_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onSubmit={handleSubmit}
                                />
                                {errors.first_name && touched.first_name ?(<p className='form-error'>{errors.first_name}</p>):null}
                                <br/>
                            </div>
                            <div className=''>
                                <lable className="ml heading_4">Last Name</lable><br />
                                <input
                                    className="pragraph border-radius-20 border_color_skyblue width-459 height-60 ml pl"
                                    id=""
                                    type="name"
                                    name="last_name"
                                    placeholder="Enter your last name"
                                    value={values.last_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onSubmit={handleSubmit}
                                />
                                {errors.last_name && touched.last_name ?(<p className='form-error'>{errors.last_name}</p>) :null}
                                <br /><br /><br />
                            </div>
                        </div>
                        <div className='section_1'>
                            <div className=''>
                                <lable className="mr heading_4">Country</lable><br />
                                <select
                                    className='pragraph border-radius-20 border_color_skyblue width-459 height-60 mr pl'
                                    name='country'
                                    value={values.country}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onSubmit={handleSubmit}
                                ><br /><br /><br />
                                    <option>Select Country</option>
                                    <option>India</option>
                                    <option>Pakistan</option>
                                    <option>Bangladesh</option>
                                </select>
                                {errors.country && touched.country ?(<p className='form-error'>{errors.country}</p>):null}
                            </div>
                            <div className=''>
                                <lable className="ml heading_4">Email</lable><br />
                                <input
                                    className="pragraph pl border-radius-20 border_color_skyblue ml width-459 height-60"
                                    type="email"
                                    name='email'
                                    placeholder="Eg: robin@gmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onSubmit={handleSubmit}
                                />
                                {errors.email && touched.email ?(<p className='form-error'>{errors.email}</p>):null}
                                <br /><br /><br />

                            </div>
                        </div>
                        <div className='section_1'>
                            <div className=''>
                                <lable className="mr heading_4">Phone Number</lable><br />
                                <input
                                    className="pragraph pl border-radius-20 border_color_skyblue mr width-459 height-60"
                                    type="phone"
                                    name='phone_number'
                                    placeholder="Enter 10 digit phone number"
                                    value={values.phone_number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onSubmit={handleSubmit}
                                />
                                {errors.phone_number && touched.phone_number ?(<p className='form-error'>{errors.phone_number}</p>):null}
                                <br /><br /><br />
                            </div>
                            <div className=''>
                                <label className="ml heading_4">Query Type </label><br />
                                <select
                                    className='pragraph pl border-radius-20 border_color_skyblue ml width-459 height-60'
                                    name='query_type'
                                    value={values.query_type}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    onSubmit={handleSubmit}
                                ><br /><br /><br />
                                    <option>Select Query Type</option>
                                    <option>Test1</option>
                                    <option>Test2</option>
                                    <option>Test3</option>
                                </select>
                                {errors.query_type && touched.query_type ?(<p className='form-error'>{errors.query_type}</p>):null}
                            </div>
                        </div>
                        <div>
                            <label className="mr heading_4">Message</label><br />
                            <textarea
                                className='height-206 width-942 pragraph pl border-radius-20 mr height-60 border_color_skyblue'
                                placeholder='Type your message here'
                                name ="message"
                                value = {values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onSubmit={handleSubmit}
                            />
                            {errors.message && touched.message ?(<p className='form-error'>{errors.message}</p>):null}
                            <br /><br /><br />
                        </div>
                        <div className='center'>
                            <button type="submit" className='Started-but'>Submit</button>
                        </div>

                    </div>
                </div>
            </form>

            <Box Box={<div className='box box-height-330 margin_right margin_left Invest margin-top-105'>
                <Heading heading="Need Help? Verified Networks Help Desk" className='padding_top_40 font-size-40 padding_right padding_left' />
                <Pragraph pragraph="Ask Questions, Browse Articles, Find Answers" />
                <a href=""><button className='Started-but'>Explore Help Desk</button></a>
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

export default Contact