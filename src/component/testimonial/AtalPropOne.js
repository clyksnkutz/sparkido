import React from 'react';
import AtalData from "../../data/ataldata/AtalData.json";


const allData = AtalData;


const AtalItem = ({colSize, itemShow}) => {
    return (
        <>
            {allData.slice(0, itemShow).map((data, index) => (
                <div className={`${colSize}`} key={index}>
                    <div className="testimonial-grid">
                        <p>{data.title}</p>
                        <span className="social-media">
                            {/* <img src={process.env.PUBLIC_URL + data.from} alt="Yelp" /> */}
                            <p>{data.description}</p>
                        </span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default AtalItem;