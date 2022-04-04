import React from 'react';
import './HomepagaeReview.css'

const HomePageReview = ({ homeReview }) => {
    const { name, rating, description, img } = homeReview;
    return (
        <div className="w-50 h-70 rounded overflow-hidden shadow-lg font-serif">
            <img className="review-img mx-auto" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="font-bold text-sm mb-2">Rating Out of 5 : {rating}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default HomePageReview;