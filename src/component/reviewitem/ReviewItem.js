import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ review }) => {
    const { name, rating, description, img } = review;
    return (
        <div class="w-50 h-70 rounded overflow-hidden shadow-lg font-serif">
            <img class="review-img mx-auto" src={img} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{name}</div>
                <div class="font-bold text-sm mb-2">Rating Out of 5 : {rating}</div>
                <p class="text-gray-700 text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ReviewItem;