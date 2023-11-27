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
            <Banner></Banner>
            <CoursePartner></CoursePartner>
        </section>
       

        </div>
    );
};

export default Header;