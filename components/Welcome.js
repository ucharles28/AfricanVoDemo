import React, { useState, useEffect } from 'react';
import Footer from './footer';
import validator from 'validator';
import { Form, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { FaUser } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';

const Welcome = ({ firstName }) => {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // state for change email
    const [show1, setShow1] = useState(false)

    const handleGetStarted = () => {
        router.push('/portfolio')
    }

    return (
        <div>
            {/* Navbar starts */}
            <div className="bg-white fixed w-full z-10 shadow-sm pb-2 mb-14">
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
                                        <img alt="profile" src="https://i.ibb.co/bvxhMZJ/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png" className="mx-auto object-cover rounded-full h-10 w-10" onClick={() => setShow1(!show1)} />
                                        {/* <span className="absolute w-3 border-2 left-3/4 -bottom-1 transform -translate-x-1/2 border-white h-3 bg-purple-1000 rounded-full">
                                </span> */}
                                    </a>
                                </div>
                                {
                                    show1 ? <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                        <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                <span className="flex flex-col">
                                                    <span>
                                                        Settings
                                                    </span>
                                                </span>
                                            </a>
                                            <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                <span className="flex flex-col">
                                                    <span>
                                                        Account
                                                    </span>
                                                </span>
                                            </a>
                                            <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                                <span className="flex flex-col">
                                                    <span>
                                                        Logout
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div> : null
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
            {/* <div className="flex flex-col items-center justify-center pt-16"> */}
            <section className="grid lg:grid-cols-2 gap-3 pt-32 mb-10">
                <main className="mt-2 mb-5 max-w-7xl lg:m-auto px-4 sm:px-6 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-5xl leading-10 font-bold sm:text-5xl md:text-5xl text-purple-1000"> Hello {firstName}{''}
                        </h1>
                        <h1 className="text-4xl leading-10 font-semibold sm:text-4xl md:text-4xl text-gray-900 pt-2">Welcome to Africanvo!
                        </h1>
                    </div>
                </main>
                <main className="mt-4 mb-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-2xl leading-10 font-medium text-gray-900 sm:text-3xl md:text-3xl">
                            <span className="block xl:inline">Ready for your next big opportunity?</span>
                        </h1>
                        <div className="container mx-auto mt-8 rounded bg-gray-100 xl:w-full">
                            <div className="container mx-auto">
                                <div className="flex items-center my-4 py-4 border-b-2 pr-8">
                                    <FaUser className='text-[#4F4F4F]'/>
                                    <p className="text-base font-medium ml-4 text-gray-550">Answer a few question and start building your portfolio</p>
                                </div>
                                <div className="pb-4 pr-8 border-b-2 ">
                                    <div className="flex items-center">
                                        <IoMdMailOpen className='text-[#4F4F4F]'/>
                                        <p className="text-base font-medium ml-4 text-gray-550">Apply or audition for jobs rolls posted by clients</p>
                                    </div>
                                </div>
                                <div className="flex items-center py-4 pr-8 mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48">
                                        <path fill="#4F4F4F" fill-rule="evenodd" d="M24.04 6c-4.517 0-8.633 1.492-11.068 2.711c-.22.11-.425.218-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768l2.62-3.829a15.503 15.503 0 0 0-1.69-.957C32.489 7.437 28.472 6 24.04 6Zm-6.443 4.616a24.579 24.579 0 0 1-2.901-.728C16.977 8.875 20.377 7.8 24.039 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081Zm15.96 5.064l-.245.124c-5.607 2.828-13.043 2.828-18.65 0l-.232-.118C6.008 24.927-.422 41.997 24.04 41.997c24.46 0 17.873-17.389 9.517-26.317ZM23 24a2 2 0 0 0 0 4v-4Zm2-2v-1h-2v1a4 4 0 0 0 0 8v4a2 2 0 0 1-1.886-1.333a1 1 0 1 0-1.886.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 1 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4.001 4.001 0 0 0 25 22Zm0 8v4a2 2 0 1 0 0-4Z" clip-rule="evenodd" />
                                    </svg>
                                    <p className="text-base font-medium ml-4 text-gray-550">Get hired and get payed</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-2 pr-8">
                            <div className="flex items-center">
                                <p className="text-base ml-4 font-medium text-gray-550">It only takes 5-10 minutes and you can edit it later, we&#39;ll save as you go.</p>
                            </div>
                        </div>
                        <div className="items-center flex justify-center flex-col mb-4">
                            <button
                                role="button"
                                className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 w-full"
                                onClick={handleGetStarted}
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </main>
            </section>
            {/* </div> */}
            <Footer />
        </div>
    );
};
export default Welcome;