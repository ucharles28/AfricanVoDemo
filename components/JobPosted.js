import React from 'react';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';
import { IoMdChatbubbles } from 'react-icons/io';

function JobPosted () {
    return (
        <div>
            <NavxSearch />
            <div className="flex items-center pt-32 font-inter">
                <div className="grid grid-cols-2 items-center mb-20">
                    <main className="ml-36">
                        <div className="bg-purple-1000 rounded-lg w-4/5 h-[35.5rem]">
                            <div className='flex items-center justify-center'>
                                <div className='px-4 pt-36'>
                                    <div className="text-center mb-4">
                                        <img src="https://i.ibb.co/RY4fJ16/Group-19.png" className='w-24 h-24 mx-auto'/>
                                    </div>
                                    <div className="text-center">
                                        <span className='text-3xl font-semibold leading-7 text-white'>Success! your job’s been posted.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <main className="px-4 lg:px-8 mr-[8rem] -ml-[5rem] h-[35.5rem]">
                        <div className="sm:text-center lg:text-left mt-24 ">
                            <div className="mb-5 px-8 lg:mt-32">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-2xl leading-6 font-semibold text-gray-900">
                                        <span className="block xl:inline">What Happens next?</span>
                                    </h1>
                                    <div className="w-4/5 mt-4">
                                        <div className=" mx-auto">
                                            <div className="flex items-center pb-4 border-b-2">
                                                <svg width="64" height="64" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M29 22C31.66 22 34.1 21.056 36 19.486V29C36 30.3261 35.4732 31.5979 34.5355 32.5355C33.5979 33.4732 32.3261 34 31 34H9C7.67392 34 6.40215 33.4732 5.46447 32.5355C4.52678 31.5979 4 30.3261 4 29V14.746L19.494 23.862C19.6477 23.9524 19.8227 24.0001 20.001 24.0001C20.1793 24.0001 20.3543 23.9524 20.508 23.862L24.968 21.238C26.2521 21.7433 27.62 22.0018 29 22ZM9 8H18.414C17.7788 10.2368 17.8694 12.6174 18.6726 14.7995C19.4758 16.9816 20.9502 18.8528 22.884 20.144L20 21.84L4.03 12.446C4.16632 11.2233 4.74865 10.0937 5.66559 9.27348C6.58253 8.45321 7.76971 7.99981 9 8Z" fill="#A259FF"/>
                                                    <path d="M29 1.83341C27.187 1.83341 25.4147 2.37103 23.9072 3.37827C22.3998 4.38552 21.2249 5.81716 20.5311 7.49215C19.8373 9.16714 19.6557 11.0102 20.0094 12.7884C20.3631 14.5666 21.2362 16.1999 22.5182 17.4819C23.8001 18.7639 25.4335 19.6369 27.2116 19.9906C28.9898 20.3443 30.8329 20.1628 32.5079 19.469C34.1829 18.7752 35.6145 17.6003 36.6218 16.0928C37.629 14.5854 38.1666 12.8131 38.1666 11.0001C38.1666 8.56893 37.2009 6.23735 35.4818 4.51827C34.6306 3.66706 33.62 2.99185 32.5079 2.53118C31.3957 2.07051 30.2037 1.83341 29 1.83341ZM32.3825 12.7051L29.6325 15.3267C29.5927 15.3655 29.5461 15.3966 29.495 15.4184C29.4518 15.4573 29.4022 15.4884 29.3483 15.5101C29.2386 15.5586 29.1199 15.5836 29 15.5836C28.88 15.5836 28.7614 15.5586 28.6516 15.5101C28.5391 15.4665 28.4363 15.401 28.3491 15.3176L25.5991 12.5676C25.4265 12.395 25.3295 12.1609 25.3295 11.9167C25.3295 11.6726 25.4265 11.4385 25.5991 11.2659C25.7717 11.0933 26.0059 10.9963 26.25 10.9963C26.4941 10.9963 26.7282 11.0933 26.9008 11.2659L28.0833 12.4576L28.0833 7.33341C28.0833 7.0903 28.1799 6.85714 28.3518 6.68523C28.5237 6.51332 28.7568 6.41674 29 6.41674C29.2431 6.41674 29.4762 6.51332 29.6481 6.68523C29.82 6.85714 29.9166 7.0903 29.9166 7.33341L29.9166 12.5217L31.1175 11.3759C31.2937 11.2082 31.5294 11.1173 31.7726 11.1233C32.0159 11.1293 32.2468 11.2317 32.4145 11.408C32.5823 11.5843 32.6732 11.8199 32.6671 12.0632C32.6611 12.3064 32.5587 12.5373 32.3825 12.7051Z" fill="#E6D2FF"/>
                                                </svg>
                                                <p className="text-base font-normal ml-4 leading-7 text-[#4F4F4F]">Invitation will be sent to qualified talent. once responses come in, you’ll be notified by email.</p>
                                            </div>
                                            <div className="flex items-center pt-4">
                                                <IoMdChatbubbles size={46} className='text-purple-1000'/>
                                                <div>
                                                    <p className="text-base font-normal leading-7 ml-4 text-[#4F4F4F]">Once the talent has responded, you’ll be able to message them directly</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flow-root mt-44">
                            <div className="mr-10 float-right justify-end">
                                <button 
                                    role="button" 
                                    className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-3"
                                >
                                    View My Jobs
                                </button>
                            </div>
                            <div className="mr-10 mb-10 float-right justify-end">
                                <button 
                                    role="button" 
                                    className="text-base font-semibold leading-none text-gray-900 focus:outline-none bg-[#E0E0E0] border rounded-lg hover:bg-gray-400 py-3 px-3"
                                >
                                    Home
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobPosted;