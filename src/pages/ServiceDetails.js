import React from 'react';
import Tilty from 'react-tilty';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import PricingOne from '../component/pricing/PricingOne';
import ProjectPropOne from '../component/project/itemProp/ProjectPropOne';
import ProjectData from "../data/project/ProjectData.json";
import ServiceData from "../data/service/ATLSolutions.json";
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

const allServiceData = ServiceData;
const getProjectData = ProjectData;

const ServiceDetails = () => {

    // const params = useParams();
    // const serviceSlug = params.slug;

    // const getServiceData = allServiceData.filter(data => slugify(data.title) === serviceSlug);
    const getServiceData = allServiceData.filter(data => data.title);
    const detailsService = getServiceData[0];

    
    return (
        <>
        <SEO title="Service Details" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne
            title={detailsService.title}
            paragraph ={detailsService.description}
            styleClass=""
            mainThumb="/images/banner/atal.png"
            />
            {/* <AboutTwo /> */}
           
            <div className="section section-padding bg-color-light pb--70">
                <SectionTitle 
                    subtitle={detailsService.process.sectionSub}
                    title={detailsService.process.sectionTitle}
                    description={detailsService.process.para}
                    textAlignment=""
                    textColor="mb--90"
                />
                <div className="container">
                    {detailsService.process.steps.map((data, index) => (
                        <div key={index} className={`process-work ${(index % 2  === 1) ? "content-reverse" : ""}`}>
                            <Tilty perspective={2000}>
                                <div className="thumbnail">
                                    <img src={process.env.PUBLIC_URL + data.thumb} alt="Thumbnail" />
                                </div>
                            </Tilty>
                        {/* <div className="content">
                            <span className="subtitle">{data.subtitle}</span>
                            <h3 className="title">{data.title}</h3>
                            <p>{data.paragraph}</p>
                        </div> */}
                        <div className="content">
                            <span className="subtitle">{data.subtitle}</span>
                            <h3 className="title">{data.title}</h3>
                            {data.id === 4 ? (
                                <ul>
                                    {data.paragraph.split('. ').map((sentence, index) => (
                                        <li key={index}>{sentence.trim()}.</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{data.paragraph}</p>
                            )}
                        </div>
                    </div>
                    ))}

                </div>
                <ul className="shape-group-17 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} alt="Bubble" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                    <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
                    <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                    <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
                </ul>
            </div>
            <div className="section section-padding">
                        <div className="container">
                            <SectionTitle 
                                subtitle=""
                                title="ATL packages."
                                description="Choose the right package for you."
                                textAlignment="mb-0"
                                textColor=""
                            />
                            <PricingOne />
                        </div>
                        <ul className="shape-group-3 list-unstyled">
                            <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="shape" /></li>
                        </ul>
                    </div>
            <div className="section section-padding">
                <div className="container">
                    <SectionTitle
                        subtitle="Our Project"
                        title="Featured Designs"
                        description=""
                        textAlignment=""
                        textColor=""
                    />
                    <div className="row row-35">
                        {getProjectData.slice(0, 2).map((data) => (
                            <div className="col-md-6" key={data.id}>
                                <ProjectPropOne projectStyle="" portfolio={data}/>
                            </div>
                        ))}
                    </div>
                </div>
                <ul className="shape-group-16 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                </ul>
            </div>
            <CtaLayoutOne />
        <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default ServiceDetails;