import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Tilty from 'react-tilty';


const BannerFour = () => {
    return (
        <div className="banner banner-style-4">
            <div className="container">
                <div className="banner-content">
                    <h1 className="title">Student interaction and engagement</h1>
                    <p>Our state-of-the-art interactive panels are designed to transform any classroom into
an engaging, interactive learning environment that improves student interaction and
engagement.
With AI integrated features, intuitive multi-touch functionality, stunning 4K Ultra High
Definition display quality, Android OS, and seamless connectivity, our panels help
teachers bring out the inherent capabilities of the students.
</p>
                    {/* <div>
                        <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-primary btn-large">View Showcase</Link>
                    </div> */}
                </div>
                <div className="banner-thumbnail">
                    <div className="large-thumb">
                        <Tilty perspective={3000}>
                            <img src={process.env.PUBLIC_URL + "/images/banner/banner-thumb-7.png"} alt="Shape" />
                        </Tilty>
                    </div>
                </div>
                {/* <div className="banner-social"> */}
                {/* <   div className="border-line" />
                    <ul className="list-unstyled social-icon">
                        <li><a href="https://facebook.com/"><FaFacebookF /> Facebook</a></li>
                        <li><a href="https://twitter.com/"><FaXTwitter /> twitter</a></li>
                        <li><a href="https://www.linkedin.com/"><FaLinkedinIn /> Linkedin</a></li>
                    </ul>
                </div> */}
            </div>
            <ul className="list-unstyled shape-group-19">
                <li className="shape shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-29.png"} alt="Bubble" />
                </li>
                <li className="shape shape-2">
                    <img src={process.env.PUBLIC_URL + "/images/others/line-7.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default BannerFour;