<<<<<<< HEAD
import { Navbar } from 'react-bootstrap';
import Link from "next/Link";
=======
import { IoIosFlag, IoIosArrowDown } from 'react-icons/io';
import { FaFacebookSquare, FaGooglePlusG, FaTwitter } from 'react-icons/fa';
import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';
>>>>>>> 6db3e5de7a4aabd84d9dc3d25d008b148869575e
import { ImFacebook2, ImTwitter, ImGoogle} from 'react-icons/im'

function Footer() {
    return (
        <div className="bg-purple-1000 text-white">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Navbar.Brand href="/">
                            <img src="https://i.ibb.co/hf41gnJ/logo.png" alt="africanvo" width={150} layout='responsive' />
                        </Navbar.Brand>
                        <p className="max-w-xs mt-0 text-sm text-white">
                        Be sure to take a look at our Terms of Use and Privacy Policy
                        </p>
                        <div className="flex mt-8 space-x-6 text-white">
                            <a className="hover:text-white" href="" target="_blank" rel="noreferrer">
                                <ImFacebook2 className='hover:text-white' />
                            </a>
                            <a className="hover:text-white" href="" target="_blank" rel="noreferrer">
                                <ImTwitter className='hover:text-white' />
                            </a>
                            <a className="hover:text-white" href="" target="_blank" rel="noreferrer">
                                <ImGoogle className='hover:text-white' />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-4 lg:grid-cols-4">
                        <div>
                        <p className="font-bold text-base leading-none">
                            Products
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                            <Link href="#" ><a className="hover:text-white"> Voices</a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Translators</a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Join AVO as a Voice Over talent </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Join AVO as a Translators </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Post a VO Project </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Membership Options </a></Link>
                        </nav>
                        </div>

                        <div>
                        <p className="font-bold text-base leading-none">
                            Resources
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                            <Link href="#" ><a className="hover:text-white" href=""> Help Center </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> FAQ </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Rates </a></Link>
                        </nav>
                        </div>

                        <div>
                        <p className="font-bold text-base leading-none">
                            Helpful Links
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                            <Link href="#" ><a className="hover:text-white" href=""> Careers </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> About Us </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Contact Us </a></Link>
                        </nav>
                        </div>

                        <div>
                        <p className="font-bold text-base leading-none">
                            Legal
                        </p>
                        <nav className="flex flex-col mt-4 space-y-2 text-sm text-white">
                            <Link href="#"><a className="hover:text-white"> Privacy Policy </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Terms &#38; Conditions </a></Link>
                            <Link href="#" ><a className="hover:text-white" href=""> Accessibility </a></Link>
                        </nav>
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-sm text-white">
                &copy; 2022 Africanvo
                </p>
            </div>
        </div>
    )
}
export default Footer