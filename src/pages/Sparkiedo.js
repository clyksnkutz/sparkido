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
            {/* <div className="section section-padding-2 bg-color-dark">
                <div className="container">
                    <SectionTitle 
                        subtitle="What We Can Do For You"
                        title="Services we can help you with"
                        description="Nulla facilisi. Nullam in magna id dolor 
                        blandit rutrum eget vulputate augue sed eu imperdiet."
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className='row'>
                        <ServicePropOne colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
                    </div>
                </div>
                <ul className="list-unstyled shape-group-10">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                </ul>
            </div> */}
            <SmartPanel />
            <AtalOne/>
            {/* <ProjectOne /> */}
            {/* <CounterUpOne /> */}
            {/* <TestimonialOne /> */}
            {/* <div className="section bg-color-light section-padding">
                <div className="container">
                    <SectionTitle 
                        subtitle="Pricing Plan"
                        title="We’ve built solutions for..."
                        description="Flexible pricing options for freelancers
                        and design teams."
                        textAlignment=""
                        textColor=""
                    />
                    <PricingOne />
                </div>
                <ul className="list-unstyled shape-group-3">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} alt="shape" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="shape" /></li>
                </ul>
            </div>
            <BrandOne />
            <BlogOne /> */}
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

