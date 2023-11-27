import React from 'react';
import img2 from '/src/assets/img-2.png'
import { LuGraduationCap } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { CiVideoOn } from "react-icons/ci";
import { PiUsersThree } from "react-icons/pi";
import { FaStar } from "react-icons/fa";


import '../Difference/Difference.css'
import Dot from './Dot';




const Difference = () => {
    return (
        <div>
        <div className='flex justify-end me-14'>
        <div className='rotate-star mt-12 mb-5 '>
            <span className='text-5xl text-yellow-300 '><FaStar /></span>
        </div>
        </div>
            <div className='flex mt-4 justify-between gap-12'>
            <div>
            <h1 className='title text-5xl mb-8'>What is our <span className='text-violet-300'>difference</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  architecto quo aperiam omnis explicabo, doloribus nesciunt veniam repellendus. Iusto maiores itaque, nobis 
            obcaecati enim est eligendi animi. Beatae modi doloremque exercitationem maiores perferendis dicta deleniti.
             </p>
             <p className='mt-5'>dolores vel iure commodi saepe 
            recusandae optio natus!</p>
            <button className='button-primary mt-8'>Learn More</button>
            </div>
            <img className='w-1/2 ' src={img2} alt="" />
            <div className='flex flex-col gap-14 '>
            <div className='flex items-center gap-4'>
                <div>
                <button className='text-white text-3xl bg-violet-500 p-3 rounded-full'><LuGraduationCap /></button>
                </div>
                <div>
                <p className='text-xl font-bold'>300</p>
                <p className='text-sm'>Instructor</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                <button className='text-white text-3xl bg-violet-500 p-3 rounded-full'><GoPeople /></button>
                </div>
                <div>
                <p className='text-xl font-bold'>20,000+</p>
                <p className='text-sm'>Student</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                <button className='text-white text-3xl bg-violet-500 p-3 rounded-full'><CiVideoOn /></button>
                </div>
                <div>
                <p className='text-xl font-bold'>20,000+</p>
                <p className='text-sm'>Student</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div>
                <button className='text-white text-3xl bg-violet-500 p-3 rounded-full'><PiUsersThree /></button>
                </div>
                <div>
                <p className='text-xl font-bold'>20,000+</p>
                <p className='text-sm'>Student</p>
                </div>
            </div>
            </div>
        </div>


        <Dot></Dot>
        </div>
    );
};

export default Difference; 