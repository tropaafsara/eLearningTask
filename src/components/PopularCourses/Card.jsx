import React from 'react';
import { FaPlay } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
import c1 from "/src/assets/courses/1.jpeg"
import c2 from "/src/assets/courses/2.jpeg"
import c3 from "/src/assets/courses/c3.jpeg"
import c4 from "/src/assets/courses/4.jpeg"
import c5 from "/src/assets/courses/5.webp"
import c6 from "/src/assets/courses/6.jpeg"
import image1 from "/src/assets/img.jpeg"
import './Card.css'
const Card = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6 mt-16 '>
        
            <div className=''>
    <div className='card card-design '>

      {/* <img className='object-cover h-2/3 w-full' src={c1} alt="" /> */}
      <img className='card-img' src={c1} alt="" />
        <div className='p-6'>
        <div>       
            <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <button className='bg-violet-500 p-2 rounded-full text-slate-100 text-xs'><FaPlay /></button>
            <p className='text-xs'>10x Lesson</p>
            </div>
            <button className='button-secondary'>Design</button>
            </div>
            <p className='mt-6 text-lg font-bold mb-4 text-slate-200'>Python for Financial Analysis Next and Algorithmic Trading</p>
            <div className='border opacity-20'></div>
            
            <div className='flex justify-between '>
            <div className='flex gap-3 items-center me-6 mt-3 mb-3'>
                <img className='w-8 rounded-full h-8' src={image1} alt="" />
                <div>
                <p className=''>Adam Smith</p>
                <p className='text-xs'>Python Developer</p>
                </div>
            </div>
            <div className='border mt-1 mb-1 opacity-20'></div>
            <p className='text-xs mt-5'>50+ Student</p>
            </div>
            <div className='border opacity-20'></div>


            <div className='flex justify-between mt-4'>
            <div className='flex '>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-stone-300'><RiStarSFill /></span>
            </div>
            <u href="" className='text-slate-300 text-sm'>Enroll now</u>
            </div>
        </div>
      
    </div>
    
</div>
            </div>
            <div className=''>
    <div className='card card-design '>

      {/* <img className='object-cover h-2/3 w-full' src={c1} alt="" /> */}
      <img className='card-img' src={c2} alt="" />
        <div className='p-6'>
        <div>       
            <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <button className='  bg-violet-500 p-2 rounded-full text-slate-100 text-xs'><FaPlay /></button>
            <p className='text-xs'>10x Lesson</p>
            </div>
            <button className='button-secondary'>Design</button>
            </div>
            <p className='mt-6 text-lg font-bold mb-4 text-slate-200'>Python for Financial Analysis Next and Algorithmic Trading</p>
            <div className='border opacity-20'></div>
            
            <div className='flex justify-between '>
            <div className='flex gap-3 items-center me-6 mt-3 mb-3'>
                <img className='w-8 rounded-full h-8' src={image1} alt="" />
                <div>
                <p className=''>Adam Smith</p>
                <p className='text-xs'>Python Developer</p>
                </div>
            </div>
            <div className='border mt-1 mb-1 opacity-20'></div>
            <p className='text-xs mt-5'>50+ Student</p>
            </div>
            <div className='border opacity-20'></div>


            <div className='flex justify-between mt-4'>
            <div className='flex '>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-stone-300'><RiStarSFill /></span>
            </div>
            <u href="" className='text-slate-300 text-sm'>Enroll now</u>
            </div>
        </div>
      
    </div>
    
</div>
            </div>
            <div className=''>
    <div className='card card-design'>
      <img className='card-img' src={c3} alt="" />
        <div className='p-6'>
        <div>       
            <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <button className='  bg-violet-500 p-2 rounded-full text-slate-100 text-xs'><FaPlay /></button>
            <p className='text-xs'>10x Lesson</p>
            </div>
            <button className='button-secondary'>Design</button>
            </div>
            <p className='mt-6 text-lg font-bold mb-4 text-slate-200'>Python for Financial Analysis Next and Algorithmic Trading</p>
            <div className='border opacity-20'></div>
            
            <div className='flex justify-between '>
            <div className='flex gap-3 items-center me-6 mt-3 mb-3'>
                <img className='w-8 rounded-full h-8' src={image1} alt="" />
                <div>
                <p className=''>Adam Smith</p>
                <p className='text-xs'>Python Developer</p>
                </div>
            </div>
            <div className='border mt-1 mb-1 opacity-20'></div>
            <p className='text-xs mt-5'>50+ Student</p>
            </div>
            <div className='border opacity-20'></div>


            <div className='flex justify-between mt-4'>
            <div className='flex '>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-stone-300'><RiStarSFill /></span>
            </div>
            <u href="" className='text-slate-300 text-sm'>Enroll now</u>
            </div>
        </div>
      
    </div>
    
</div>
            </div>
            <div className=''>
    <div className='card card-design'>

      {/* <img className='object-cover h-2/3 w-full' src={c1} alt="" /> */}
      <img className='card-img' src={c4} alt="" />
        <div className='p-6'>
        <div>       
            <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <button className='  bg-violet-500 p-2 rounded-full text-slate-100 text-xs'><FaPlay /></button>
            <p className='text-xs'>10x Lesson</p>
            </div>
            <button className='button-secondary'>Design</button>
            </div>
            <p className='mt-6 text-lg font-bold mb-4 text-slate-200'>Python for Financial Analysis Next and Algorithmic Trading</p>
            <div className='border opacity-20'></div>
            
            <div className='flex justify-between '>
            <div className='flex gap-3 items-center me-6 mt-3 mb-3'>
                <img className='w-8 rounded-full h-8' src={image1} alt="" />
                <div>
                <p className=''>Adam Smith</p>
                <p className='text-xs'>Python Developer</p>
                </div>
            </div>
            <div className='border mt-1 mb-1 opacity-20'></div>
            <p className='text-xs mt-5'>50+ Student</p>
            </div>
            <div className='border opacity-20'></div>


            <div className='flex justify-between mt-4'>
            <div className='flex '>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-stone-300'><RiStarSFill /></span>
            </div>
            <u href="" className='text-slate-300 text-sm'>Enroll now</u>
            </div>
        </div>
      
    </div>
    
</div>
            </div>
            <div className=''>
    <div className='card card-design'>

      {/* <img className='object-cover h-2/3 w-full' src={c1} alt="" /> */}
      <img className='card-img' src={c5} alt="" />
        <div className='p-6'>
        <div>       
            <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <button className='  bg-violet-500 p-2 rounded-full text-slate-100 text-xs'><FaPlay /></button>
            <p className='text-xs'>10x Lesson</p>
            </div>
            <button className='button-secondary'>Design</button>
            </div>
            <p className='mt-6 text-lg font-bold mb-4 text-slate-200'>Python for Financial Analysis Next and Algorithmic Trading</p>
            <div className='border opacity-20'></div>
            
            <div className='flex justify-between '>
            <div className='flex gap-3 items-center me-6 mt-3 mb-3'>
                <img className='w-8 rounded-full h-8' src={image1} alt="" />
                <div>
                <p className=''>Adam Smith</p>
                <p className='text-xs'>Python Developer</p>
                </div>
            </div>
            <div className='border mt-1 mb-1 opacity-20'></div>
            <p className='text-xs mt-5'>50+ Student</p>
            </div>
            <div className='border opacity-20'></div>


            <div className='flex justify-between mt-4'>
            <div className='flex '>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-stone-300'><RiStarSFill /></span>
            </div>
            <u href="" className='text-slate-300 text-sm'>Enroll now</u>
            </div>
        </div>
      
    </div>
    
</div>
            </div>
            <div className=''>
    <div className='card card-design'>

      {/* <img className='object-cover h-2/3 w-full' src={c1} alt="" /> */}
      <img className='card-img' src={c6} alt="" />
        <div className='p-6'>
        <div>       
            <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
            <button className='  bg-violet-500 p-2 rounded-full text-slate-100 text-xs'><FaPlay /></button>
            <p className='text-xs'>10x Lesson</p>
            </div>
            <button className='button-secondary'>Design</button>
            </div>
            <p className='mt-6 text-lg font-bold mb-4 text-slate-200'>Python for Financial Analysis Next and Algorithmic Trading</p>
            <div className='border opacity-20'></div>
            
            <div className='flex justify-between '>
            <div className='flex gap-3 items-center me-6 mt-3 mb-3'>
                <img className='w-8 rounded-full h-8' src={image1} alt="" />
                <div>
                <p className=''>Adam Smith</p>
                <p className='text-xs'>Python Developer</p>
                </div>
            </div>
            <div className='border mt-1 mb-1 opacity-20'></div>
            <p className='text-xs mt-5'>50+ Student</p>
            </div>
            <div className='border opacity-20'></div>


            <div className='flex justify-between mt-4'>
            <div className='flex '>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-yellow-600 '><RiStarSFill /></span>
            <span className='text-stone-300'><RiStarSFill /></span>
            </div>
            <u href="" className='text-slate-300 text-sm'>Enroll now</u>
            </div>
        </div>
      
    </div>
    
</div>
            </div>
            
            {/* radial gradient circle */}
        <div className='radial-circle-4 '></div>
        </div>
    );
};

export default Card;