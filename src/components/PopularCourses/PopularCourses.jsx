import React, { useState } from 'react';
import './PopularCourses.css'
import Card from './Card';

const PopularCourses = () => {
    const storedActiveTab = localStorage.getItem('activeTab') || 'design';
    const [activeTab, setActiveTab] = useState(storedActiveTab)
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        localStorage.setItem('activeTab', tabName);
      };

    return (
        <div className='mt-8'>
            <div className='flex justify-between items-center'>
            <h1 className=' text-5xl title'>Popular <span className='text-violet-300'>Courses</span></h1>
            {/* tab category */}
            <div className='tab-option '>
            <div
              onClick={() => handleTabClick("design")}
              className={`tab tab2 remote ms-7 ${
                activeTab === "design" ? "activetab" : ""
              } `}
            >
              Design
            </div>
            <div
              onClick={() => handleTabClick("development")}
              className={`tab tab2 remote  ${
                activeTab === "development" ? "activetab" : ""
              }`}
            >
              Development
            </div>
            <div
              onClick={() => handleTabClick("business")}
              className={`tab tab2 remote  ${
                activeTab === "business" ? "activetab" : ""
              }`}
            >
              Business
            </div>
            <div
              onClick={() => handleTabClick("data-science")}
              className={`tab tab2 remote  ${
                activeTab === "data-science" ? "activetab" : ""
              }`}
            >
              Data Science
            </div>
            <div
              onClick={() => handleTabClick("marketing")}
              className={`tab tab2 remote me-1 ${
                activeTab === "marketing" ? "activetab" : ""
              }`}
            >
              Marketing
            </div>
            
            </div>
        </div>
        <div>
                

        {/* courses card */}

            <Card></Card>

            <div className='text-center mt-8'>
            <button className='py-3 px-8 text-sm bg-violet-500 rounded-full text-slate-200 mt-8'>Explore All Courses</button>
            </div>
            </div>
            {/* radial gradient circle */}
        {/* <div className='radial-circle-9 '></div> */}
        </div>
    );
};

export default PopularCourses;


