import React from 'react';
import useReview from '../../hook/useReview';
import ReviewItem from '../reviewitem/ReviewItem'

const Review = () => {
    const [reviews, setReview] = useReview();

    return (
        <div className='grid grid-cols-3 gap-6 pt-24 pl-9 pb-9'>
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