import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Accordion from 'react-bootstrap/Accordion';
import { FaCode, FaCompress, FaGlobe } from 'react-icons/fa';


const SmartPanel = () => {
    return (
        // <div className="section-padding">
        <div className="section section-padding bg-color-light pb--70">
            <div className="container">
                <div className="section-heading heading-center">
                    {/* <span className="subtitle">Our Products</span> */}
                    <h3 className="subtitlered">Sparkiedo Smart Panels</h3>
                    <p>Transform your classroom with interactive, AI-powered technology</p>
                </div>
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> 4K Clarity & Immersive Sound</Accordion.Header>
                                    <Accordion.Body>
                                    Crystal-clear visuals and rich audio for enhanced learning experiences
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> AI Integration</Accordion.Header>
                                    <Accordion.Body>
                                    Tailored content based on student progress
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Multi-Touch Functionality</Accordion.Header>
                                    <Accordion.Body>
                                    Encourages real-time collaboration in the classroom.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><FaGlobe /> Seamless Connectivity</Accordion.Header>
                                    <Accordion.Body>
                                    Easy integration with laptops, phones, and more
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header><FaGlobe />Cloud-Based Tools</Accordion.Header>
                                    <Accordion.Body>
                                    Access lessons, share content, and collaborate across devices
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box">
                            {/* <h3 className="title"></h3> */}
                            <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/window.png"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                        </div>
                        </div>

                    </div>
                    {/* <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/window.png"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div> */}
                </div>
            </div>
            <ul className="shape-group-17 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" /></li>
                {/* <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} alt="Bubble" /></li> */}
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>

            </ul>
        </div>
    )
}

export default SmartPanel;