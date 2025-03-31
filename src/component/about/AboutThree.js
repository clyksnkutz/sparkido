import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import { FaCheckCircle, FaGraduationCap, FaWrench, FaShieldAlt } from 'react-icons/fa';

const Datas = [
    {
        id: 1,
        icon: <FaCheckCircle style={{ fontSize: '40px', color: '#4CAF50' }} />,
        title: "Free Installation",
        para: "Hassle-free setup by our expert team."
    },
    {
        id: 2,
        icon: <FaGraduationCap style={{ fontSize: '40px', color: '#FF9800' }} />,
        title: "Teacher Training Support",
        para: "Comprehensive guidance for smooth usage."
    },
    {
        id: 3,
        icon: <FaWrench style={{ fontSize: '40px', color: '#03A9F4' }} />,
        title: "Technical Support",
        para: "Reliable assistance when you need it."
    },
    {
        id: 4,
        icon: <FaShieldAlt style={{ fontSize: '40px', color: '#9C27B0' }} />,
        title: "3 Years Onsite Warranty",
        para: "Peace of mind with guaranteed service."
    }
];

const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-light pb--70">
            <div className="container">
                {/* <SectionTitle 
                    subtitle="Our Values"
                    title="Every Sparkiedo smart panel comes with:"
                    textAlignment="heading-left heading-light-left "
                    textColor=""
                /> */}

                <div className="section-heading heading-center">
                    <h3 className="subtitlered">Every Sparkiedo smart panel comes with</h3>
                </div>

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={data.id}>
                            <div className="about-quality text-center p-4" 
                                style={{
                                    borderRadius: '12px',
                                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                                    transition: 'transform 0.3s',
                                    background: '#f9f9f9',
                                    minHeight: '300px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div>{data.icon}</div>
                                <h5 className="title mt-3" style={{ fontSize: '22px', fontWeight: '600', color: '#333' }}>
                                    {data.title}
                                </h5>
                                <p style={{ color: '#555', fontSize: '16px' }}>{data.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutThree;
