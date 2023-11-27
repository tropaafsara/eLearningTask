import React from 'react';
import { GrPersonalComputer } from "react-icons/gr";
import '../Header/Navbar.css'
const Navbar = () => {
    return ( 
        <div className='mb-14'>
            <nav className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
            <button className='text-white bg-violet-500 rounded p-1 text-xl'><GrPersonalComputer /></button>
            <a className='font-bold text-3xl title ' href="/">Edujar</a>
            </div>

            <input type="checkbox" className="toggle-menu" />
            <div className='hamburger'></div>
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
        </div>
    );
};

export default Navbar;