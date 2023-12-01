import React from 'react';
import { GrPersonalComputer } from "react-icons/gr";
import '../Header/Navbar.css'
import { FaBars } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className='mb-14 '>

            <nav className='flex justify-between items-center '>
                <ul className='nav-bar'>
                    <input type='checkbox' id='check' />
                    <div className='flex items-center gap-3'>
                        <button className='text-white bg-violet-500 rounded p-1 text-xl'><GrPersonalComputer /></button>
                        <a className='font-bold text-3xl title ' href="/">Edujar</a>
                    </div>

                    <span className=' menu'>
                        {/* <div className='flex gap-4 '> */}
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/course">Course</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <label htmlFor="check" className='close-menu text-white '>X</label>
                    </span>
                    <label htmlFor="check" className='open-menu text-white '><FaBars /></label>
                    <div className='hidden lg:flex flex-row gap-4 '>
                        <button className='w-28 h-10 rounded-full text-sm text-white bg-opacity-60 bg-transparent border'>Login</button>
                        <button className='button-primary '>Get Started</button>
                    </div>
                </ul>

            </nav>
        </div>


    );
};

export default Navbar;