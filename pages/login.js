import React, { useState } from "react";
import Meta from './components/Meta'
import Link from 'next/link'
import {Navbar, Nav, Container, Button, Form, Col} from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

function Login () {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

    setValidated(true);
    };

    return (
    <div>
        <div className="h-full bg-gray-100 w-full py-16 px-4 w-100">
            <Meta />
            <div className='navbar'>
                <Navbar 
                    bg="white" 
                    variant="light" 
                    fixed="top"
                    className='navborder'>
                    <Container>
                    <Navbar.Brand href="/">
                    <img src="https://i.ibb.co/fqKFnPj/logo.png" alt="africanvo" width={110} padding-top={10} layout='responsive' />
                    </Navbar.Brand>
                    <Nav>
                    <Nav.Link href="/signup" style={{color:'#A259FF'}} >Sign up</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white rounded lg:w-1/3  md:w-1/2 w-full p-10 shadow-sm">
                        <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800 text-center py-5">
                            Login to Africanvo
                        </p>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group as={Col} controlId="validationCustom01">
                                <div  className="mt-6  w-full">
                                    <lable className="text-sm font-medium leading-none text-gray-800">Email Address</lable>
                                    <Form.Control type="email" placeholder="Email Address" role="input" className="bg-white border rounded border-gray focus:outline-none text-base font-medium leading-none text-black py-3 w-full pl-3 mt-2"  required />
                                    <Form.Control.Feedback type="invalid" />
                                </div>
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustomPassword">
                                <div className="mt-6  w-full">
                                    <label className="text-sm font-medium leading-none text-gray-800">Password</label>
                                    <div className="relative flex items-center justify-center">
                                        <Form.Control type={passwordShown ? "text" : "password"} role="input" placeholder="Password" className="bg-white border rounded border-gray focus:outline-none text-base font-medium leading-none text-black py-3 w-full pl-3 mt-2" required />
                                        <div className="absolute right-1 mt-2 mr-2 cursor-pointer bg-white" onClick={togglePasswordVisiblity} >
                                            {passwordShown ? <FiEyeOff /> :
                                                <FiEye />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Form.Group>
                            <div className="mt-8">
                                <button role="button" type="submit" aria-label="log into my account" className="text-sm font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded hover:bg-purple-600 py-2.5 w-full">Login</button>
                            </div>
                        </Form>    
                        <div className="w-full flex items-center justify-between py-4">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-0.5 text-gray-400">OR</p>
                            <hr className="w-full bg-gray-400  " />
                        </div>
                        <button aria-label="Continue with google" role="button" className="py-2.5 px-4 bg-googlesignin border rounded-full border-gray-700 flex items-center w-full mt-15" type="submit">
                            <div className="border rounded-full p-1 bg-white shadow-sm"><FcGoogle size={24}/></div>
                            <p className="text-base font-medium ml-8 sm:ml-6 md:ml-6 lg:ml-6 xl:ml-6 text-white text-center">Sign in with Google</p>
                        </button>
                        <p className="text-sm mt-4 font-medium leading-none text-gray-500 text-center">
                            Don't have account yet?{" "}
                            <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            <Link href='/signup'><a> Sign up here</a></Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <footer class="bg-purple-1000  py-12 xl:py-12">
                <div class="mx-auto px-4 sm:px-6 md:px-8 text-white">
                    <ul class="flex flex-col items-center justify-center">
                        <li class="w-1/2 md:w-1/3 lg:w-1/3">
                        </li>
                        <li class="w-1/2 md:w-1/3 lg:w-1/3">
                            <div class="text-center">
                                <ul>
                                    <li class="mb-4 transition-colors duration-200">
                                        <a href="#" className='hover:text-white'>
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li class="mb-4 transition-colors duration-200">
                                        <a href="#" className='hover:text-white'>
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="w-1/2 md:w-1/3 lg:w-1/3">
                        </li>
                    </ul>
                </div>
            </footer>
    </div>
    );
}

export default Login