import React, { useState } from 'react';
import validator from 'validator';
import Footer from '../components/footer';
import Link from 'next/link';
import Image from 'next/image';
import pana from '../assets/img/pana.png';

const SetupComplete = ({ prevStep, nextStep }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [error, setError] = useState(false);
    // define firstName
    const [firstName, setFirstName] = useState(user?.firstName);

    const submitFormData = (e) => {
        e.preventDefault();

        if (
        validator.isEmpty( values )
        ) {
        setError(true);
        } else {
        nextStep();
        }
    };


    // state for navbar for sm screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state for profile hover
  const [show1, setShow1] = useState(false)

const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')


    return (
        <div>
            {/* Navbar starts */}
            <div className="bg-white fixed w-full z-10 shadow-sm pb-2 mb-16">
                <div className="px-4 pt-2 pb-2 h-12 mt-2 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                    <a
                        href="/"
                        className="inline-flex items-center"
                    >
                        <span className="ml-2 fixed text-xl font-bold tracking-wide text-gray-900 uppercase">
                        <img src="https://i.ibb.co/yshXSCj/africanvo.png" alt="africanvo" width={120} layout='responsive' />
                        </span>
                    </a>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                        <div className="relative flex items-center justify-end">
                            <a href="#" className="block relative">
                                <img src={profileImageSrc} alt="avatar" border="0" className="mx-auto object-cover rounded-full h-10 w-10" onClick={()=>setShow1(!show1)} />
                                {/* <span className="absolute w-3 border-2 left-3/4 -bottom-1 transform -translate-x-1/2 border-white h-3 bg-purple-1000 rounded-full">
                                </span> */}
                            </a>
                        </div>
                        { 
                        show1?<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                    <span className="flex flex-col">
                                        <span>
                                           Account Settings
                                        </span>
                                    </span>
                                </a>
                                <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                    <span className="flex flex-col">
                                        <span>
                                            Logout
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>: null
                        }
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(true)}
                        >
                        <svg className="w-5 text-gray-900" viewBox="0 0 24 24">
                            <path
                            fill="currentColor"
                            d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                            fill="currentColor"
                            d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                            fill="currentColor"
                            d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                        </button>
                        {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white rounded shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                <a
                                    href="/"
                                    className="inline-flex items-center"
                                >
                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                    <img src="https://i.ibb.co/yshXSCj/africanvo.png" alt="africanvo" width={120} layout='responsive' />
                                    </span>
                                </a>
                                </div>
                                <div>
                                <button
                                    className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <svg className="w-5 text-gray-900" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                    />
                                    </svg>
                                </button>
                                </div>
                            </div>
                            <nav>
                                <ul className="space-y-4">
                                <li>
                                    <a
                                    href="../login"
                                    className="inline-flex items-center justify-center text-center text-wrap w-full h-12 px-1 py-1 font-medium tracking-wide text-base text-white transition duration-200 rounded bg-purple-1000 hover:bg-purple-500"
                                    >
                                        Already have an account? Login
                                    </a>
                                </li>
                                </ul>
                            </nav>
                            </div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
            </div>
            {/* Navbar ends */}
            <div className="flex flex-col items-center justify-center font-inter">
                <div className="lg:w-2/5 md:w-1/2 pt-20 pl-4 pr-4 justify-center mt-10 mb-10">
                    {/* <img src="https://i.ibb.co/jHMjYSF/pana.png" width={300} height={300} className="flex flex-col items-center justify-center m-auto pb-4"
                    /> */}
                    <div className="w-72 h-72 flex flex-col items-center justify-center m-auto">
                        <Image src={pana} />
                    </div>
                    <p className="text-4xl font-semibold text-gray-800 text-center lg:pb-2 pb-4 -mt-4">
                    Nice work, {firstName}{' '} James!<br></br> Your profile is ready
                    </p>
                    <p  className="text-center pb-2 text-base font-medium text-[#4F4F4F]" >Congratulations! with thousands to choose from, it is time to start auditioning for voice over roles and translation roles that fit your skills.</p>
                    <div className="my-3 flex flex-row items-center justify-center">
                        <button 
                            role="button" 
                            className="text-base font-semibold leading-6 text-purple-1000 border-purple-500 border-2 rounded-lg hover:bg-purple-600 hover:text-white py-2.5 px-3 mr-4" 
                            // onClick={prevStep}
                        >
                           <Link href='#'><a className='hover:text-white'>View my profile</a></Link>
                        </button>
                        <button 
                            role="button" 
                            className="text-base font-semibold leading-6 text-white bg-purple-1000 border rounded-lg hover:bg-purple-600 py-2.5 px-3" 
                            // onClick={nextStep}
                        >
                            <Link href='#'><a className='hover:text-white'> Browse Jobs</a></Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SetupComplete;