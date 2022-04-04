import React from 'react';

const HomePageReview = ({ homeReview }) => {
    const { name, rating, description, img } = homeReview;
    return (
        <div className='pl-7 review-item font-serif '>
            <div className='px-9 py-5'>
                <img src={img} alt="" />
                <h1 className='font-medium text-2xl'>{name}</h1>
                <p><span className='text-xs'>Rating Out of 5 :</span> <span className='font-bold'>{rating}</span></p>
                <p>{description}</p></div>
        </div>
    );
};

export default HomePageReview;