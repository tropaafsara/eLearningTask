import React from 'react';
import { RiStarSFill } from "react-icons/ri";
import img1 from "/src/assets/people/a.jpeg"
import img2 from "/src/assets/people/ppl1.jpeg"
import img3 from "/src/assets/people/ppl3.jpeg"
import img4 from "/src/assets/people/ppl4.jpeg"
import image1 from "/src/assets/img.jpeg"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import '../Testimonial/Testimonial.css'

const Testimonial = () => {
    return (
        <div>
            <h1 className='title text-center mb-20 text-5xl'>Testimonials</h1>
            
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-12'>
            {/* section-1 */}
            <div className='b bg-violet-700 bg-opacity-50 p-4 col-span-2'>
            <div className='flex justify-between items-center'>
            <div className='flex gap-3 items-center me-6 mt-3 mb-3'>
                <img className='w-8 rounded-full h-8' src={image1} alt="" />
                <div>
                <p className=''>Adam Smith</p>
                <p className='text-xs'>Python Developer</p>
                </div>
            </div>
            <div className='flex'>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-stone-300'><RiStarSFill /></span>
            </div>
            </div>
            <hr />

            <p className='text-sm p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint fugit, provident quibusdam deserunt quidem voluptas aspernatur, dolor ut doloremque ad eum cumque aliquid optio harum magnam quaerat molestias sequi. Sapiente in maxime minus, libero ullam veritatis nostrum exercitationem laborum officiis ipsam! Repellendus dolor tempora itaque id voluptatum repellat perspiciatis!</p>

            <div className='flex gap-2 text-white p-3 justify-end'>
            <span><FaArrowLeft /></span>
            <span><FaArrowRight /></span>
            </div>
            </div>

            {/* section-2 */}
            <div className='relative '>
            <img className='rounded-full w-20 h-20 absolute top-0 left-6' src={img1} alt="" />
            <img className='rounded-full w-12 h-12 absolute bottom-20 left-7' src={img2} alt="" />
            <img className='rounded-full w-24 h-24 absolute top-20 right-16' src={img3} alt="" />
            <img className='w-8 rounded-full h-8 absolute top-5 right-1' src={img4} alt="" />
            <img className='rounded-full w-10 h-10 absolute bottom-4 right-10' src={image1} alt="" />
            </div>



            {/* <div className='relative md:hidden'>
  <img className='rounded-full w-16 h-16 absolute top-0 left-4' src={img1} alt="" />
  <img className='rounded-full w-8 h-8 absolute bottom-12 left-4' src={img2} alt="" />
  <img className='rounded-full w-16 h-16 absolute top-12 right-8' src={img3} alt="" />
  <img className='w-6 rounded-full h-6 absolute top-3 right-1' src={img4} alt="" />
  <img className='rounded-full w-8 h-8 absolute bottom-2 right-6' src={image1} alt="" />
</div> */}


            </div>

        <div className='flex mt-20 mx-20 mb-20'>
        <div>
        <p className='title text-5xl me-8'>Join our <span className='text-violet-400'>world's largest</span> learning platform today</p>
        <p className='mt-5'>Start learning by registering and get 30 days free trail</p>
        </div>

        <div className='flex flex-col gap-7'>
            <button className='bg-red-500 w-56 h-12 rounded-full text-sm text-slate-50 hover:bg-red-900'>Join as Instructor</button>
            <button className='bg-violet-500 w-56 h-12 rounded-full text-sm text-slate-50 hover:bg-violet-900'>Join as student</button>
           
        </div>
        </div>

    
        </div>
    );
};

export default Testimonial;