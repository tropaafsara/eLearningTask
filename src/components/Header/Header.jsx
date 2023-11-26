import React from 'react';
import './Header.css';
import banner_img from '/src/assets/banner-img.json'
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import Lottie from 'lottie-react';
const Header = () => {
    return (
        <div className='my-container'>
        {/* navbar */}
            <nav className='flex justify-between items-center'>
            <div>
            <img src="" alt="" />
            <a className='font-bold text-3xl' href="/">Edujar</a>
            </div>
            <div className='flex gap-4'>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/course">Course</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            </div>
            <div className='flex gap-4'>
                <button className='w-28 h-10 rounded-full text-sm text-white bg-opacity-60 bg-transparent border'>Login</button>
                <button className='button-primary '>Get Started</button>
            </div>
        </nav>
        {/* banner */}
        <section>
            <div className='flex'>
            <div>
                <h1 className='text-6xl mr-2 inline'>Best courses  are waiting to enrich your skill <span className='m-2'></span>
                <span className='plusSign'><FaPlus /></span>
                <span className='plusSign'><FaPlus /></span>
                <span className='plusSign'><FaPlus /></span>
                </h1>
                <p>Provides you with the latest online learning system and material
that help your knowledge growing.</p>


{/* explore button */}
<div className='relative'>
            <input className=' w-full h-14 border border-black rounded-full p-3 mt-6 mb-6' 
            type="text" name="" id="" placeholder='Want to learn?'  />
            <button className='absolute button-primary top-8 right-2 ' >Explore</button>
            </div>
            </div>
            {/* banner image */}
            <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={banner_img} loop={true} />
        </div>
            </div>


            {/* our courses partner section */}
            
        </section>

        </div>
    );
};

export default Header;