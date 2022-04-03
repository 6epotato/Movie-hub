import React from 'react';

const ReviewItem = ({ review }) => {
    const { name } = review;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default ReviewItem;