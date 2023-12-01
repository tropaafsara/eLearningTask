import React from 'react';
import './Header.css';

import Navbar from './Navbar';
import CoursePartner from './CoursePartner';
import Banner from './Banner';
import PopularCourses from '../PopularCourses/PopularCourses';

const Header = () => {
    return (
        <div className=''>
        <Navbar></Navbar>
        <section>
            {/* radial gradient circle */}
            {/* <div className='radial-circle-2 '></div> */}
            <Banner></Banner>
            
            <CoursePartner></CoursePartner>
        </section>
       

        </div>
    );
};

export default Header;