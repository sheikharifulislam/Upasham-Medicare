import React from 'react';
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="all_information_list">
                <div className="informatio_list">
                    <div className="address">
                        <h3>Get In Touch</h3>
                        <p><i className="fas fa-map-marker-alt"></i>21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</p>
                        <p><i className="fas fa-envelope"></i> upasham@gmail.com</p>
                        <p><i className="fas fa-phone-alt"></i>01729527451</p>
                    </div>
                    <div className="follow">
                        <h3>Follow Us</h3>
                        <a href="https://www.facebook.com/Shopping-Sundarbans-103892974579771"><i className="fab fa-facebook-square"></i></a>
                        <a href="/#"><i className="fab fa-twitter-square"></i></a>
                        <a href="/#"><i className="fab fa-youtube"></i></a>
                        <a href="/#"><i className="fab fa-instagram"></i></a>
                        <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="important-links">
                        <h3>Important Links</h3>
                        <a href="/#">
                            <p>Service</p>
                        </a>
                        <a href="/#">
                            <p>Feedback</p>
                        </a>
                        <a href="/#">
                            <p>Make Appoinment</p>
                        </a>
                        <a href="/#">
                            <p>Immunization (vaccination)</p>
                        </a>
                    </div>
                    <div className="subscribe-newsletter">
                        <h3>Subscribe Our Newsletter</h3>
                    <input type="email" placeholder="Enter Your E-mail"/>
                    <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;