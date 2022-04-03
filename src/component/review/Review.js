import React from 'react';
import useReview from '../../hook/useReview';
import ReviewItem from '../reviewitem/ReviewItem'

const Review = () => {
    const [reviews, setReview] = useReview();

    return (
        <div>
            {
                reviews.map(review => <ReviewItem
                    key={review.id}
                    review={review}
                ></ReviewItem>)
            }
        </div>
    );
};

export default Review;