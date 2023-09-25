import React from "react";
import Homepage from "./Pages/Home/Homepage";
import Individuals from "./Pages/Individual/Individual_Account";
import Individual_Assets from "./Pages/Individual/Individual_Assets";
import Individual_Deposits from "./Pages/Individual/Individual_Deposits";
import Individual_Payments from "./Pages/Individual/Individual_Payments";
import Individual_Investments from "./Pages/Individual/Individual_Investments";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Individual_Account from "./Pages/Individual/Individual_Account";
import Businesses_Accounts from "./Pages/Businesses/Businesses_Accounts";
import Businesses_Asset from "./Pages/Businesses/Businesses_Asset";
 import Businesses_Deposit from "./Pages/Businesses/Businesses_Deposit";
import Businesses_Payments from "./Pages/Businesses/Businesses_Payments";
import Businesses_Finance from "./Pages/Businesses/Businesses_Finance";

import Service_Asset from "./Pages/Service_Provider/Service_Asset";
import Service_Management from "./Pages/Service_Provider/Service_Management";
import Service_Managements from "./Pages/Service_Provider/Service_Managements";
import Service_Payments from "./Pages/Service_Provider/Service_Payments";
import Service_Network_Operator from "./Pages/Service_Provider/Service_Network_Operator";
import About_us from "./Pages/About_us";
import Assets from "./Pages/Assets";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
    
     <BrowserRouter>
      <Routes>
        
        <Route path = "/" element= {<Homepage/>}/>
        <Route path="/Individuals" element={<Individual_Account/>} />
      <Route path="/Businesses" element = {<Businesses_Accounts/>}/>
        <Route path="/Service Providers" element = {<Service_Asset/>}/>
                <Route path="/Account" element = {<Individual_Account/>}/>
        <Route path="/IndividualAssets" element = {<Individual_Assets/>}/> 
        <Route path="/IndividualDeposits" element = {<Individual_Deposits/>}/>
        <Route path="/IndividualPayments" element = {<Individual_Payments/>}/>
        <Route path="/IndividualInvestments" element = {<Individual_Investments/>}/>
  

        <Route path="/BusinessesAccount" element = {<Businesses_Accounts/>}/>
        <Route path="/BusinessesAssets" element = {<Businesses_Asset/>}/> 
        <Route path="/BusinessesDeposits" element = {<Businesses_Deposit/>}/>
        <Route path="/BusinessesPayments" element = {<Businesses_Payments/>}/>
        <Route path="/BusinessesFinance" element = {<Businesses_Finance/>}/>


        <Route path="/ServiceAsset" element = {<Service_Asset/>}/> 
        <Route path="/ServiceManagement" element = {<Service_Management/>}/>
        <Route path="/ServiceManagements" element={<Service_Managements/>}/>
        <Route path="/ServicePayments" element = {<Service_Payments/>}/>
        <Route path="/ServiceNetworkOperator" element = {<Service_Network_Operator/>}/>
        <Route path="about_us" element={<About_us/>}/>
        <Route path="assets" element={<Assets/>}/>
       <Route path="contact" element={<Contact/>}/>
        
      </Routes>
     </BrowserRouter>
      {/* <About_us/> */}
    </>
  );
}

export default App;
