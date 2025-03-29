import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { FaCode, FaCompress, FaGlobe } from 'react-icons/fa';


const AtalLabs = () => {
    return (
        <div className="section-padding">
            <div className="container">
                <div className="section-heading heading-center">
                                {/* <span className="subtitle">Our Products</span> */}
                    <h3 className="subtitlered">Sparkiedo Atal Tinkering Labs (ATL)</h3>
                    <p>Hands-on robotics learning to shape the next generation of innovators</p>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        
                    </div>
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

                </div>
            </div>
        </div>
    )
}

export default AtalLabs;