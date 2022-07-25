import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import validator from 'validator';
import { Form, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { post } from '../helpers/ApiRequest';
import { simulateNetworkRequest } from '../helpers/Utils'

const UserAuth1 = ({ email, setParentEmail }) => {
    const router = useRouter();

    const [error, setError] = useState(false);
    // state for navbar for sm screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // state for change email
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleResendEmail = async () => {
        if (newEmail !== email) { //If email was change
            const request = {
                oldEmail: email,
                newEmail,
            };
            const response = await post('Auth/ChangeEmail', request, '');

            if (response.successful) {
                setParentEmail(newEmail);
                setShow(false)
            } else {
                setShowAlert(true)
                setErrorMessage(response.data)
            }
        } else {
            const request = {
                email
            };

            const response = await post('Auth/ResendEmail', request, '');
            if (response.successful) {
                setParentEmail(newEmail);
                setShow(false)
            } else {
                setShowAlert(true)
                setErrorMessage(response.data)
            }
        }
    }

    const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')


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
                                <div className="relative flex items-center justify-end">
                                    <a href="#" className="block relative">
                                        <img src={profileImageSrc} alt="avatar" border="0" className="mx-auto object-cover rounded-full h-10 w-10" onClick={() => setShow1(!show1)} />
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
                                                        Account Settings
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
            <div className="flex flex-col items-center justify-center pl-4 pr-4 pt-5">
                <div className="lg:w-2/5 md:w-1/2 pt-10 justify-center my-5">
                    <img src="https://i.ibb.co/pdHkwJ8/Group-12.png" width={100} height={100} className="flex flex-col items-center justify-center m-auto pb-4"
                    />
                    <p tabIndex={0} role="heading" className="text-3xl font-semibold text-gray-800 text-center pt-3 pb-4">
                        Verify your email to proceed
                    </p>
                    <p className="text-center pb-2 text-base text-gray-500" >We just sent a link to your email address <b>{email}</b> please check your mail and click on the link provided to verify your address.
                    </p>
                    <div className="flex flex-col items-center justify-center py-2">
                        <div className="whitespace-no-wrap text-center font-bold text-sm flex inline-flex relative text-purple-1000">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" className="align-middle"><path fill="#a259ff" d="M22 11.26V7.608l-9.652 5.056a.75.75 0 0 1-.696 0L2 7.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 19h6.467c.184-.422.445-.807.773-1.135l5.903-5.903A3.287 3.287 0 0 1 22 11.26ZM18.75 3H5.25l-.186.005a3.25 3.25 0 0 0-3.048 2.919L12 11.154l9.984-5.23A3.25 3.25 0 0 0 18.75 3Zm.35 9.67l-5.903 5.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67Z" /></svg>
                            <span
                                // className="text-center pt-4 pb-2 text-base font-bold text-purple-1000 truncate"
                                onClick={() => setShow(!show)} className="hover:cursor-pointer">Change email</span>
                        </div>
                    </div>
                    <Form
                    >
                        {
                            show ? <div className="items-center flex justify-center flex-col">
                                <Form.Group as={Col} controlId="validationCustom01" className="w-4/5">
                                    <div>
                                        <label className="text-sm font-medium leading-none text-gray-800">Email Address</label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email address"
                                            role="input"
                                            className="bg-white border rounded-lg border-gray focus:outline-none text-base font-medium leading-none text-black py-3 pl-3 mt-2"
                                            required
                                            name="email"
                                            defaultValue={newEmail}
                                            onChange={(e) => setNewEmail(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid" />
                                    </div>
                                </Form.Group>
                            </div> : null
                        }
                        <div className="my-3 items-center flex justify-center flex-col">
                            <button
                                role="button"
                                className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 w-4/5"
                                onClick={handleResendEmail}
                            >
                                <div className='flex items-center justify-center'>
                                    {isLoading && <Bars height={22} width={22} color='#ffffff' className='' />}
                                    <span className='pl-2'>Resend email verification</span>
                                </div>

                            </button>
                        </div>
                    </Form>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default UserAuth1;