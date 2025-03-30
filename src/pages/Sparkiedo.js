import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import SmartPanel from '../component/about/SmartPanel';
import BannerOne from '../component/banner/BannerOne';
import SplashCta from '../component/cta/SplashCta';
import ServicePropOne from '../component/service/ServicePropOne';
import AtalOne from '../component/testimonial/AtalOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const Sparkiedo = () => {

    return (
        <>
        <SEO title="Home"/>
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BannerOne />
            <SmartPanel />
            <AtalOne/>
            <div className="section section-padding">
                <div className="container">
                <SectionTitle 
                    subtitle=""
                    title="Why Choose Us?"
                    description=""
                    textAlignment="heading-left mb--20 mb_md--70"
                    textColor=""
                />
                    <div className="row">
                        <ServicePropOne colSize="col-lg-4" serviceStyle="service-style-2" itemShow="3" marginTop="yes"/>
                    </div>
                </div>
                <ul className="shape-group-7 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
            <SplashCta /> 
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default Sparkiedo;

