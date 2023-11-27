import React from 'react';
import { FaAngleLeft } from "@react-icons/all-files/fa/FaAngleLeft";
import { FaAngleRight } from "@react-icons/all-files/fa/FaAngleRight";

import { SiLoom } from "react-icons/si";
import { FaHubspot } from "react-icons/fa";
import { PiGitlabLogoDuotone } from "react-icons/pi";
import { SiLivechat } from "react-icons/si";
import monday from '/src/assets/Logo/monday.png';
const CoursePartner = () => {
    return (
        <div className='flex items-center justify-between border p-6 rounded-lg border-gray-500'>
            <div className='text-2xl text-white me-6'>
            <FaAngleLeft />
            </div>
            {/* <div className='text-3xl grid lg:grid-cols-5 md:grid-cols-2 ms-10 gap-6 mt-8 '> */}
            <div className='flex text-3xl justify-between text-white font-bold'>
                <div className='flex items-center'>
                Hubsp<span className='text-orange-600 '><FaHubspot /></span>t
                </div>
                <div className='flex items-center'>
                <span className='text-purple-800'><SiLoom /></span>loom
                </div>
                <div className='flex items-center'>
                <span className='text-orange-600'><PiGitlabLogoDuotone /></span>Gitlab
                </div>
                <div className='flex items-center'>
                <span className='text-orange-600'><SiLivechat /></span>LiveChat
                </div>
                <img className='object-cover w-3/12' src={monday} alt="" />
                
            </div>
            <div className='text-2xl text-white ms-4'>
            <FaAngleRight />
            </div>
        </div>
    );
};

export default CoursePartner;