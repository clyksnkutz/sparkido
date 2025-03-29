import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import AtalPropOne from './AtalPropOne';

const AtalOne = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <SectionTitle 
                    // subtitle="Testimonial"
                    title="Sparkiedo Atal Tinkering Labs (ATL)"
                    description="Hands-on robotics learning to shape the next generation of innovators"
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <AtalPropOne colSize="col-lg-4" itemShow="5"/>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default AtalOne;