import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyData from '../../data/casestudy/CaseStudyData.json';
import Tilty from 'react-tilty';

const allData = CaseStudyData.slice(0, 4);  // Only show 4 items

const CaseStudyProp = () => {

    const CaseLeftThumb = ({ data }) => {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className={`case-study-featured-thumb thumb-${data.id}`}>
                        <Tilty perspective={2000}>
                            <img src={process.env.PUBLIC_URL + data.thumb} alt="Case Study" />
                        </Tilty>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-6 offset-xl-1">
                    <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <h3 className="title">{data.title}</h3>
                            {data.points.map((point, index) => (
                                <p key={index}><strong>{point.icon} {point.title}:</strong> {point.description}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const CaseRightThumb = ({ data }) => {
        return (
            <div className="row">
                <div className="col-lg-6 offset-xl-1 order-lg-2">
                    <div className={`case-study-featured-thumb thumb-${data.id}`}>
                        <Tilty perspective={2000}>
                            <img src={process.env.PUBLIC_URL + data.thumb} alt="Case Study" />
                        </Tilty>
                    </div>
                </div>
                <div className="col-lg-5 order-lg-1">
                    <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <h3 className="title">{data.title}</h3>
                            {data.points.map((point, index) => (
                                <p key={index}><strong>{point.icon} {point.title}:</strong> {point.description}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {allData.map((data, index) => (
                <div key={data.id}>
                    {/* Alternate between Left and Right */}
                    {index % 2 === 0 ? (
                        <CaseLeftThumb data={data} />
                    ) : (
                        <CaseRightThumb data={data} />
                    )}
                </div>
            ))}
        </>
    );
};

export default CaseStudyProp;
