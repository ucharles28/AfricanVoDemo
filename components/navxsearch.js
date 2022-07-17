import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoSettings } from 'react-icons/go';

function NavxSearch () {
    // state for navbar for sm screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // state for change email
    const [show1, setShow1] = useState(false)

    return (
        <div className="bg-white fixed w-full z-10 shadow-sm pb-2 mb-16 font-inter">
            <div className="px-4 pt-2 pb-2 h-12 mt-2 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="w-full relative flex items-center justify-between">
                    <a
                        href="/"
                        className="inline-flex items-center"
                    >
                        <span className="ml-2 fixed text-xl font-bold tracking-wide text-gray-900 uppercase">
                        <img src="https://i.ibb.co/yshXSCj/africanvo.png" alt="africanvo" width={120} layout='responsive' />
                        </span>
                    </a>
                    <div className="flex items-center justify-center ml-24">
                        {/* <form className="hidden lg:flex"> */}
                            <div className="relative mx-auto lg:block hidden">
                                <form className='="hidden lg:flex"'>
                                    <span className='absolute inset-y-0.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600 mr-2'>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M3 5h4m14 0H11m-8 7h12m6 0h-2M3 19h2m16 0H9"/><circle cx="9" cy="5" r="2"/><circle cx="17" cy="12" r="2"/><circle cx="7" cy="19" r="2"/></g></svg> */}
                                        <GoSettings size={20}/>
                                    </span>
                                    <span className='absolute inset-y-0.5 left-7 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                                    {/* <span className='absolute inset-y-0.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span> */}
                                    <input
                                        className="block h-10 pl-16 pr-9 text-base text-gray-90 rounded-xl placeholder-gray-550 w-96 focus:z-10 bg-[#F3F3F3] focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-2"
                                        placeholder="Search for jobs"
                                        type="search"
                                    />
                                    <button type="submit" className="text-white bg-purple-1000 rounded-lg inset-y-0 absolute -right-0.5 p-2.5 mr-px items-center">Search</button>
                                </form>
                            </div>
                        {/* </form> */}
                    </div>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li className='flex items-center'>
                            <a
                                href="#"
                                className="font-medium text-xs hover:text-gray-900 tracking-wide text-gray-550 transition-colors duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M19 6h-3V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H5C3.3 6 2 7.3 2 9v9c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3zm-9-1h4v1h-4V5zm10 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-5.6L8.7 14H15c.1 0 .2 0 .3-.1l4.7-1.6V18z"/></svg>
                                <span className='pt-2'>Jobs</span>
                            </a>
                        </li>
                        <li className='flex items-center'>
                            <a
                                href="#"
                                className="font-medium text-xs hover:text-gray-900 tracking-wide text-gray-550 transition-colors duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459c-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174c.195-.195.437-.393.691-.599c.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 0 0-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z"/></svg>
                                <span className='pt-2'>Help</span>
                            </a>
                        </li>
                        <li className='flex items-center align-middle'>
                            <a
                                href="#"
                                className="font-medium text-xs hover:text-gray-900 tracking-wide text-gray-550 transition-colors duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="m8.5 18l3.5 4l3.5-4H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.5zM7 7h10v2H7V7zm0 4h7v2H7v-2z"/></svg>
                                <span className='pt-2'>Messages</span>
                            </a>
                        </li>
                        <li>
                            <div className="relative flex items-center justify-end">
                                <a href="#" className="block relative">
                                    <img src="https://i.ibb.co/X5LP2MZ/avatar.png" alt="avatar" border="0" className="mx-auto object-cover rounded-full h-8 w-8" onClick={()=>setShow1(!show1)} />
                                </a>
                            </div>
                            { 
                            show1?<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        <span className="flex flex-col">
                                            <span>
                                                Settings
                                            </span>
                                        </span>
                                    </a>
                                    <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                        <span className="flex flex-col">
                                            <span>
                                                Account
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
    );
};

export default NavxSearch;