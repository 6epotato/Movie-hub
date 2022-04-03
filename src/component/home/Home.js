import React from 'react';
import image from './image.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className=' grid grid-cols-2'>
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
        </div>
    );
};

export default Home;