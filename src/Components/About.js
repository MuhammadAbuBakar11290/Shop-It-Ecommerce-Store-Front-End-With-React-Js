
import React from "react";
import "./about.css";
import Store1 from "./images/Store1.webp";
import Stats from './images/Stats.gif';
import AbtContent from "./AbtContent";
import Store2 from './images/Store2.jpg'
import Store3 from './images/Store3.jpg'
import Store4 from './images/Store 4.gif'
import Member1 from './images/Member1.jpeg'
import Member2 from './images/Member2.jpeg'
import Member3 from './images/Member3.jpg'

const About = () => {
  return (
    <>
    <div className="main-about-container">
      <div className="abtcontent">
       
       <h2> <em className="abtshopit">SHOP-IT</em> Powers Over 1,700,000 Business World Wide</h2>
       
        {/* <p>The All in One E-Commerce Platform to Start,run and grow a business</p>
        <p>
"Empowering over 1,700,000 businesses worldwide, Shop It stands as the ultimate all-in-one e-commerce platform for entrepreneurs looking to kickstart, manage, and expand their business endeavors. With a comprehensive suite of tools and features, Shop It streamlines the entire journey of establishing and growing a business, providing a seamless online ecosystem for success. Our roots are firmly established in Pakistan, where we proudly operate the biggest store that houses everything you need. Since our inception in the year 2000, we have been at the forefront of innovation, catering to a diverse range of industries and serving as a trusted partner for countless businesses. With a widespread presence, we have branches located strategically to ensure easy accessibility and support for our valued clientele."</p>
<h1>WAN'T TO BECOME SUCCESSFULL !! READ SHOP IT STORY</h1>
<p>"Aspiring for Success? Dive into the Inspiring Shop It Story."</p> */}
      </div>
      <div className="Store1">
        <img src={Store1} alt="" className="storeimg1" />
      </div>
      
    </div>
    <div className="aboutsec-content">
    <div className="heading-container">
    <em style={{ textShadow: "2px 2px red" }}>Shop It Story</em>
  </div>
  <p className="long-paragraph">
    "Unveiling the Shop It Journey: From our roots in Pakistan in 2000 to
    becoming a global force, Shop It was born with a vision to empower
    businesses worldwide. With the largest store of its kind, we've impacted
    over 1.7 million businesses globally. Our strategic branches ensure
    accessibility and support for our community. Join us on this remarkable
    journey of innovation and success."
  </p>
</div>
<div className="stats-gif">
<img src={Stats} alt="" className="stats-image" />
</div>
<div className="Aboutprop">

      
      <AbtContent picture={Store2}heading={"WHO WE ARE ?"} content={"Shop It:All-in-One E-commerce Partner, Empowering Businesses Worldwide since 2000."} />
      <AbtContent picture={Store4} heading={"WHY CHOOSE US ?"} content={ "Unmatched E-commerce Solutions and Support for Your Business Success"} />
      <AbtContent picture={Store3} heading={"WHAT WE DO ?"} content={"Empower Businesses with Comprehensive E-commerce Solutions and Support."} />
     
      
</div>
<div className="TeamMember">
  <h1 style={{ textShadow: "2px 2px LightGray" }}>Our Team Members</h1>

</div>
<div className="TeamMates">

      
      <AbtContent picture={Member3}heading={"CO-FOUNDER"} content={"MUHAMMAD ABUBAKAR"} />
      <AbtContent picture={Member2} heading={"CEO OF SHOP IT "} content={ "SHAFIQ UR REHMAN"} />
      <AbtContent picture={Member1} heading={"MANAGING DIRECTOR"} content={"AHMED AFZAL"} />
     
      
</div>

  </>
    
  );
};

export default About;
