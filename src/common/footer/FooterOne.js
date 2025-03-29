import React from 'react';
import { FaEnvelopeOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ServiceData from "../../data/service/ServiceMain.json";

const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                {/* <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to="https://facebook.com/"><FaFacebookF /></Link></li>
                            <li><Link to="https://twitter.com/"><FaXTwitter /></Link></li>
                            <li><Link to="https://www.pinterest.com/"><FaPinterestP /></Link></li>
                            <li><Link to="https://www.linkedin.com/"><FaLinkedin /></Link></li>
                            <li><Link to="https://www.instagram.com/"><FaInstagram /></Link></li>
                            <li><Link to="https://vimeo.com/"><FaVimeoV /></Link></li>
                            <li><Link to="https://dribbble.com/"><FaDribbble /></Link></li>
                            <li><Link to="https://www.behance.net/"><FaBehance /></Link></li>
                            <li><Link to="https://www.tiktok.com/en/"><FaTiktok /></Link></li>
                        </ul>
                    </div>
                </div> */}
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Fusce varius, dolor tempor interdum tristique, dui urna bib endum magna, ut ullamcorper purus</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email address" />
                                            <button className="subscribe-btn" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Address</h6>
                                        <div className="footer-menu-link">
                                            {/* <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul> */}

                                            <p>442, South 2nd Main Road, Kapaleeshwarar Nagar, Neelangarai, Chennai - 600 115</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Contact</h6>
                                        <div className="footer-menu-link">
                                            {/* <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>Case Studies</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Portfolio</Link></li>
                                            </ul> */}
                                            {/* <p>+91 94445 25095   smartkriya.edu@gmail.com     www.smartkriya.com</p> */}
                                            <p>
                                                <span>+91 94445 25095</span> 
                                                <a href="mailto:smartkriya.edu@gmail.com">sparkiedo.edu@gmail.com</a>
                                                <a href="https://www.sparkiedo.com" target="_blank" rel="noopener noreferrer">www.sparkiedo.com</a>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Pages</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled" style={{ fontSize: '8px' }}>
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/home-startup"}>Smart Panel</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/service-details/design"}>ATL</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">Axilthemes</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;