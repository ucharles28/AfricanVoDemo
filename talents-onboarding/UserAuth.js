import React, { useState, useEffect } from 'react';
import validator from 'validator';
import Footer from '../components/footer';
import { Bars } from 'react-loader-spinner';
import { BsCheckCircleFill } from 'react-icons/bs';


const UserAuth = ({ nextStep, handleformdata, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.authtext) || validator.isEmpty(values.email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        nextStep()
      }, 3000);
  });

  const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')

  // if (loading) return <Bars />;

 return (
  <div>
    {/* Navbar starts */}
    <div className="bg-white fixed w-full z-10 shadow-sm pb-2">
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
                {/* <a
                    href="../login"
                    className="font-semibold hover:text-purple-600 text-purple-1000 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                    Already have an account? Login
                </a> */}
                <div className="relative flex items-center justify-end">
                    <a href="#" className="block relative">
                        <img src={profileImageSrc} alt="avatar" border="0" className="mx-auto object-cover rounded-full h-10 w-10" onClick={()=>setShow1(!show1)} />
                        {/* <span className="absolute w-3 border-2 left-3/4 -bottom-1 transform -translate-x-1/2 border-white h-3 bg-purple-1000 rounded-full">
                        </span> */}
                    </a>
                </div>
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
    {/* Auth begins */}
    <div className="flex flex-col items-center justify-center">
      <div className="lg:w-2/5 md:w-1/2 pt-10 pl-4 pr-4 justify-center my-5">
        {/* Alert starts */}
        <div className="w-full bg-[#34D399] bg-opacity-[15%] px-4 pt-4 pb-1 md:p-3 rounded-lg shadow-sm flex"
        >
          <BsCheckCircleFill size={24} color='#34d399' className="max-w-[36px] w-full h-9 flex items-center justify-center rounded-full mr-3 "/>
          <div className="w-full">
            <h5 className="text-lg font-semibold mb-3 text-dark">
              Your account has been successfully created. Redirecting you... 
            </h5>
          </div>
        </div>
        {/* alert ends */}
        <div className="m-12 pt-14 flex flex-col items-center justify-center">
          <Bars 
            heigth={200} 
            width={200} 
            color="#A259FF" 
            ariaLabel="loading-indicator"
          />
        </div>
      </div>
    </div>
    {/* Auth ends */}
    <Footer />
  </div>
 );
};

export default UserAuth;