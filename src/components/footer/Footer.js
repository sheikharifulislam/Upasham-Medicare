import React from 'react';
import './footer.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return(
        <footer>
           <section className="footer-section">
               <div className="container-fluid">
                   <div className="all-information-list">
                       <div className="some-description">
                           <div className="description-section-image">
                               <img src={logo} alt="" />
                           </div>
                           <div className="description-section-info">
                               <p>Upasham medicare has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.</p>
                           </div>
                       </div>
                       <div className="quick-links">
                           <h3>QUICK LINKS</h3>
                          <li>
                              <a href="/#"><i class="fas fa-arrow-alt-circle-right"></i>Service</a>
                              <hr />
                          </li>
                          <li>
                              <a href="/#"><i class="fas fa-arrow-alt-circle-right"></i>Feedback</a>
                              <hr />
                          </li>
                          <li>
                              <a href="/#"><i class="fas fa-arrow-alt-circle-right"></i>Make Appoinmnet</a>
                              <hr />
                          </li>
                          <li>
                              <a href="/#"><i class="fas fa-arrow-alt-circle-right"></i>Contack</a>
                              <hr />
                          </li>
                          <li>
                              <a href="/#"><i class="fas fa-arrow-alt-circle-right"></i>Immunizatin (vaccination)</a>
                              <hr />
                          </li>
                       </div>
                       <div className="subscribe-newsletter">
                            <h3>Subscribeer</h3>
                            <input type="email" placeholder="Enter Your E-mail"/>
                            <button>Subscribe</button>
                        </div>
                        <div className="get-us">
                            <h3>Get In Touch</h3>
                            <p><i className="fas fa-map-marker-alt"></i>House 2B, Road 12,Mirpur Road, Dhanmondi, Dhaka, Bangladesh
                            Post Code: 1209</p>
                            <p><i className="fas fa-envelope"></i> info@bsdi-bd.org</p>
                            <p><i className="fas fa-phone-alt"></i>01729527451</p>
                            <hr />
                           <div className="flow-us">
                                <a href="https://www.facebook.com/Shopping-Sundarbans-103892974579771"><i className="fab fa-facebook-square"></i></a>
                                <a href="/#"><i className="fab fa-twitter-square"></i></a>
                                <a href="/#"><i className="fab fa-youtube"></i></a>
                                <a href="/#"><i className="fab fa-instagram"></i></a>
                                <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                           </div>
                        </div>
                   </div>
               </div>
           </section>
        </footer>
    )
};

export default Footer;