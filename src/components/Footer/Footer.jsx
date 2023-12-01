import { GrPersonalComputer } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { TiSocialPinterest } from "react-icons/ti";


const Footer = () => {
    return (
        <div className="mt-12">
            <div className="hidden lg:flex justify-between items-center gap-7 mb-14">
                {/* 1 */}
                <div className="">
                    <div className='flex items-center gap-3 mb-8 '>
                        <button className='text-white bg-violet-500 rounded p-1 text-xl'><GrPersonalComputer /></button>
                        <a className='font-bold text-3xl title ' href="/">Edujar</a>
                    </div>
                    <p className="text-sm me-16">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum est nesciunt esse natus explicabo architecto consectetur libero,
                        fugit illo obcaecati!</p>
                </div>

                {/* 2 */}
                <div className="me-10">
                    <p className="title font-bold mb-10">Quick Links</p>
                    <div className="flex gap-8 text-xs">
                        <div className="flex flex-col gap-2">
                            <p>About</p>
                            <p>Course</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div>
                    <p className="title font-bold mb-10">Contact us</p>
                    <div className="flex items-center gap-5 text-xs">
                        <span className="text-white"><FiPhone /></span>
                        <p>(209) 555-0104</p>
                    </div>
                    <div className="flex items-center gap-5 text-sm">
                        <span className="text-white "><MdOutlineMailOutline /></span>
                        <p>michelle.rivera@example.com</p>
                    </div>
                </div>
                {/* 4 */}
                <div className="flex flex-row gap-2 text-xs mt-20">
                    <span className="text-white "><CiLocationOn /></span>
                    <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
                </div>
            </div>
            <hr />
            <div className=" flex justify-between text-sm mt-6 ">
                <p>Copyright 2023 | All Rights Reserved</p>
                <div className="text-white flex gap-5">
                    <CiFacebook />
                    <CiTwitter />
                    <FaInstagram />
                    <TiSocialPinterest />
                    <IoIosGlobe />
                </div>
            </div>
        </div>
    );
};

export default Footer;