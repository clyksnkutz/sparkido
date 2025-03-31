import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CaseStudyProp from '../component/casestudy/CaseStudyProp';
import DisplayTouchTech from '../component/about/DisplayTouchTech';
// import SmartPanel from '../component/about/SmartPanel';




const SmartPanel = () => {

    return (
        <>
        <SEO title="Smart Panel" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BcrumbBannerOne 
                title="Student Interaction and Engagement "
                paragraph ="We design and develop web and mobile applications for our clients worldwide."
                styleClass="thumbnail-3"
                mainThumb="/images/smartpanel/students.png"
                />
                <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area">
                    <div className="container">
                        <CaseStudyProp />
                    </div>
                </div>
                {/* <SmartPanel /> */}
                <DisplayTouchTech/>
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default SmartPanel;