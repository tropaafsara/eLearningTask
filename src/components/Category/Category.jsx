import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaBuffer } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FaDatabase } from "react-icons/fa6";
import { FiPieChart } from "react-icons/fi";
import { FaChartLine } from "react-icons/fa6";
import { IoMusicalNotesOutline } from "react-icons/io5";
import './Category.css'


const Category = () => {
    return (
        <div>
            <h1 className='title text-5xl'>Most Popular Category</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-6 mt-8'>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white text-xl ms-2'><AiOutlineAntDesign /></span>
                    <p>Design</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white text-xl ms-2'><FaBuffer /></span>
                    <p>Development</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white text-l ms-2'><GrNotes /></span>
                    <p>Professional Dev.</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white text-xl ms-2'><HiOutlinePhoto /></span>
                    <p>Photography</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white ms-2'><FaDatabase /></span>
                    <p>Data Science</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white ms-2'><FiPieChart /></span>
                    <p>Business</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white ms-2'><FaChartLine /></span>
                    <p>Marketing</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
                <div className='flex items-center justify-between  p-3 rounded-lg bg-violet-300 bg-opacity-30'>
                    <div className='flex items-center gap-3'>
                    <span className='text-white ms-2 text-xl'><IoMusicalNotesOutline /></span>
                    <p>Music</p>
                    </div>
                    <button className='text-orange-300 bg-violet-500 p-1 rounded p-3 text-2xl'><GoArrowUpRight /></button>
                </div>
            </div>
        </div>
    );
};

export default Category;