import React from "react";
import "./contact.css";
import profilePic from "./images/ProfilePic.jpg";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Founder of SHOP IT !</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:abubakar11290@gmail.com">
        abubakar11290@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a className="mail-links" href="https://www.linkedin.com/in/mabubakar78/">
          User Name: Muhammad AbuBakar
        </a>

        {/* <i class="fa fa-github"></i>
        <a class="mail-links" href="">
          AbuBakar
        </a> */}

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/mh_abubakar3/">
         mh_abubakar3
        </a>

        <i className="fa fa-whatsapp" style={{ color: 'green' }}></i>      
          <a class="mail-links" href="tel:+92 300-0463146">
          +92 300-0463146
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={profilePic} />
      </div>
    </div>
  );
};

export default Contact;
