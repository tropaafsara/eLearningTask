import React from 'react';
import banner_img from '/src/assets/banner-img.json';
import Lottie from 'lottie-react';
import { FaPlus } from "@react-icons/all-files/fa/FaPlus";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
    return (
        <div className='flex '>
            <div className='me-24'>
                <h1 className='banner-text mr-2 inline'><span className='text-violet-300'>Best courses</span>  are waiting to enrich your skill <span className='m-2'></span>
                <span className='plusSign'><FaPlus /></span>
                <span className='plusSign'><FaPlus /></span>
                <span className='plusSign'><FaPlus /></span>
                </h1>
                <p className='me-24 mt-8'>Provides you with the latest online learning system and material
that help your knowledge growing.</p>


{/* explore button */}
<div className='relative mt-4 mb-12'>
            <input className=' w-full h-14 border border-black rounded-full p-7 mt-6 mb-6' 
            type="text" name="" id="" placeholder=''  />

            <div className='hidden flex gap-2 items-center absolute top-10 ms-3 '>
            <span className='text-slate-600 text-2xl'><CiSearch /></span>
                <p className='text-slate-600 text-sm'>Want to learn?</p>
            </div>


            <button className='absolute button-primary top-8 right-2 ' >Explore</button>


            </div>
            </div>
            {/* banner image */}
            <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
          <Lottie animationData={banner_img} loop={true} />
        </div>
        </div>
    );
};

export default Banner;