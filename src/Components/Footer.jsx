import React from "react";

function Footer(){
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick Links</h3>
          <a href="#">
            <i className="fas fa-arrow-right"></i> Overview
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> Why Recruit
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> Director's Message
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> Recruitment Process
          </a>
          <a href="#">
            <i className="fas fa-arrow-right"></i> Contact Us
          </a>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +123-456-7890
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +111-222-3443
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> chenna@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> prem@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> sitharam@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> Tirupati, India - 400401
          </a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          <a href="#">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
