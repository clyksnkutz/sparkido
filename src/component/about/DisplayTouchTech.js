import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Accordion from 'react-bootstrap/Accordion';
import { FaTv, FaMicrochip, FaPlug, FaLock, FaShareAlt } from 'react-icons/fa';

const DisplayTouchTech = () => {
    return (
        <div className="section section-padding bg-color-light pb--70">
            <div className="container">
                <div className="section-heading heading-center">
                    <h3 className="subtitlered">Display & Touch Technology</h3>
                    <p>Experience next-level precision and performance with cutting-edge display and touch capabilities.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaTv /> Display & Touch Technology</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>7H Touch Surface Hardness</li>
                                            <li>Infrared Touch Technology</li>
                                            <li>40 Point Touch</li>
                                            <li>4K Ultra HD Resolution (3840 x 2160)</li>
                                            <li>Smooth 5~8ms response time for optical touch</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaMicrochip /> System & Performance</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Built-in Android System with Optional Pluggable Module</li>
                                            <li>Operating System: Android 14</li>
                                            <li>Processor: Octacore</li>
                                            <li>Supports APK Installation</li>
                                            <li>AI-based Pen for Auto Suggestion</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaPlug /> Design & Connectivity</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Front Audio Stereophonic Speaker</li>
                                            <li>Metal Housing with 4mm AG Anti-glare Tempered Glass</li>
                                            <li>Ultra-thin and Ultra-narrow Appearance</li>
                                            <li>Wireless Screen Sharing for Presentations</li>
                                            <li>Optional: OPS Slot</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><FaLock /> Security & Protection</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Password / Pattern Lock Protection</li>
                                            <li>Secure Wireless Screen Sharing</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box">
                            <div className="banner-thumbnail">
                                <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                    <div className="large-thumb">
                                        <img src={process.env.PUBLIC_URL + "/images/DisplayTouchTech/displaytech.png"} alt="Tech Display" />
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
            </ul>
        </div>
    )
}

export default DisplayTouchTech;

// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import { FaTv, FaMicrochip, FaPlug, FaLock } from 'react-icons/fa';
// // import styles from './YourFileName.module.scss';


// const DisplayTouchTech = () => {
//     return (
//         <div className="section section-padding bg-color-light pb--70">
//             <div className="container">
//                 <div className="section-heading heading-center">
//                     <h3 className="subtitlered">Display & Touch Technology</h3>
//                     <p>Experience next-level precision and performance with cutting-edge display and touch capabilities.</p>
//                 </div>

//                 <div className="row justify-content-center">
//                     <div className="col-lg-8">
//                         <div className="why-choose-us">
//                             <Accordion defaultActiveKey="1">
//                                 <Accordion.Item eventKey="1">
//                                     <Accordion.Header><FaTv /> Touch Surface & Resolution</Accordion.Header>
//                                     <Accordion.Body>
//                                         <ul>
//                                             <li>7H Touch Surface Hardness</li>
//                                             <li>Infrared Touch Technology</li>
//                                             <li>40 Point Touch</li>
//                                             <li>4K Ultra HD Resolution (3840 x 2160)</li>
//                                             <li>Smooth 5~8ms response time for optical touch</li>
//                                         </ul>
//                                     </Accordion.Body>
//                                 </Accordion.Item>

//                                 <Accordion.Item eventKey="2">
//                                     <Accordion.Header><FaMicrochip /> System & Performance</Accordion.Header>
//                                     <Accordion.Body>
//                                         <ul>
//                                             <li>Built-in Android System with Optional Pluggable Module</li>
//                                             <li>Operating System: Android 14</li>
//                                             <li>Processor: Octacore</li>
//                                             <li>Supports APK Installation</li>
//                                             <li>AI-based Pen for Auto Suggestion</li>
//                                         </ul>
//                                     </Accordion.Body>
//                                 </Accordion.Item>

//                                 <Accordion.Item eventKey="3">
//                                     <Accordion.Header><FaPlug /> Design & Connectivity</Accordion.Header>
//                                     <Accordion.Body>
//                                         <ul>
//                                             <li>Front Audio Stereophonic Speaker</li>
//                                             <li>Metal Housing with 4mm AG Anti-glare Tempered Glass</li>
//                                             <li>Ultra-thin and Ultra-narrow Appearance</li>
//                                             <li>Wireless Screen Sharing for Presentations</li>
//                                             <li>Optional: OPS Slot</li>
//                                         </ul>
//                                     </Accordion.Body>
//                                 </Accordion.Item>

//                                 <Accordion.Item eventKey="4">
//                                     <Accordion.Header><FaLock /> Security & Protection</Accordion.Header>
//                                     <Accordion.Body>
//                                         <ul>
//                                             <li>Password / Pattern Lock Protection</li>
//                                             <li>Secure Wireless Screen Sharing</li>
//                                         </ul>
//                                     </Accordion.Body>
//                                 </Accordion.Item>
//                             </Accordion>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <ul className="shape-group-17 list-unstyled">
//                 <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" /></li>
//                 <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
//                 <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
//             </ul>
//         </div>
//     )
// }

// export default DisplayTouchTech;

