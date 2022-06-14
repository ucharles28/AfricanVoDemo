import React, { useState } from "react";
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
        <div className="h-full bg-gray-100 w-full py-16 px-4 w-100">
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
                                <button role="button" type="submit" aria-label="create my account" className="text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Login</button>
                            </div>
                        </Form>    
                        <div className="w-full flex items-center justify-between py-4">
                            <hr className="w-full bg-gray-400" />
                            <p className="text-base font-medium leading-4 px-0.5 text-gray-400">OR</p>
                            <hr className="w-full bg-gray-400  " />
                        </div>
                        <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt--15">
                            <FcGoogle size={24}/>
                            <p className="text-base font-medium ml-4 text-gray-700">Sign in with Google</p>
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
    );
}

export default Login