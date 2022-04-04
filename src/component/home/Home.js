import React from 'react';
import image from './image.jpg'
import './Home.css'
import useReview from '../../hook/useReview';
import HomePageReview from '../homePageReview/HomePageReview';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReview] = useReview();
    const slicedReview = reviews.slice(0, 3);
    // console.log(slicedReview);
    return (
        <div>
            <div className=' grid grid-cols-2 '>
                <div>
                    <div className='text-5xl font-extrabold text-center font-sans pt-48'>
                        <h1 className='text-sky-700 '>Ice-Age-2002</h1>
                        <h1 className='text-slate-700'>Dont miss This movie</h1>
                    </div>
                    <p className='text-center pl-7 pt-7 font-sans'>Ice Age is an American media franchise centering on a group of mammals surviving the Paleolithic ice age. It consists of computer-animated films, short films, TV specials and a series of video games. The first five films were produced by Blue Sky Studios.</p>
                </div>
                <div className='main-image pl-24 py-12'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div>
                <h1 className='flex justify-center py-7 font-bold text-2xl font-serif'>Customer review (3) </h1>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        slicedReview.map(homeReview => <HomePageReview
                            key={homeReview.id}
                            homeReview={homeReview}
                        ></HomePageReview>)
                    }
                </div>
                <div className='flex justify-center py-9'>
                    <Link to={'/review'}>
                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            More Review...
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;