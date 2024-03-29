import React, { useState } from 'react';
import Link from 'next/link';
import { Form, Col } from 'react-bootstrap';
import validator from 'validator';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from '@react-oauth/google';
import Footer from '../components/footer';
import jwt_decode from 'jwt-decode';
import { post } from '../helpers/ApiRequest';

// creating functional component ans getting props from app.js and destucturing them
const UserEmail = ({ nextStep, setParentEmail, accountType }) => {
  // creating error state for validation

  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState('');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGoogleAuth = async (user) => {
    const decodeData = jwt_decode(user.credential);

    const request = {
      email: decodeData.email,
      isGoogleAuth: true,
      firstname: decodeData.given_name,
      lastname: decodeData.family_name,
      accountType,
    };

    // Sign Up
    const response = await post('Auth/SignUp', request, '');
    
    if (response.successful) { 
      localStorage.setItem('token', response.data.Token);
      localStorage.setItem('tokenExpiryDate', response.data.TokenExpiryDate);
      localStorage.setItem('user', JSON.stringify( response.data));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setParentEmail(email);
      nextStep();
    }
    setValidated(true);
  };
  return (
    <div>
      {/* Navbar starts */}
      <div className="bg-white fixed w-full z-10 shadow-sm">
        <div className="px-4 pt-2 pb-2 h-12 mt-2 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a href="/" className="inline-flex items-center">
              <span className="ml-2 fixed text-xl font-bold tracking-wide text-gray-900 uppercase">
                <img
                  src="https://i.ibb.co/yshXSCj/africanvo.png"
                  alt="africanvo"
                  width={120}
                  layout="responsive"
                />
              </span>
            </a>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <a
                  href="../login"
                  className="font-semibold hover:text-purple-600 text-purple-1000 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Already have an account? Login
                </a>
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
                        <a href="/" className="inline-flex items-center">
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            <img
                              src="https://i.ibb.co/yshXSCj/africanvo.png"
                              alt="africanvo"
                              width={120}
                              layout="responsive"
                            />
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-900"
                            viewBox="0 0 24 24"
                          >
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
      <div className="flex flex-col items-center mb-12 p-1 justify-center">
        <div className="w-4/5 lg:w-1/3 md:w-1/2 pt-10 justify-center my-5">
          <p
            tabIndex={0}
            role="heading"
            className="text-3xl lg:text-4xl font-bold text-gray-800 text-center pt-3 pb-4"
          >
            Create your account
          </p>
          <div className="flex flex-col items-center justify-center">
            {/* <button
              role="button"
              className="py-2.5 px-4 bg-googlesignin border rounded-full border-gray-700 flex items-center w-4/5 mt-15"
            >
              <div className="border rounded-full bg-white p-1 shadow-sm">
                <FcGoogle size={26} />
              </div>
              <p className="text-base font-medium ml-8 sm:ml-6 md:ml-6 lg:ml-6 xl:ml-6 text-white text-center flex">
                Sign in with Google
              </p>
            </button> */}
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                handleGoogleAuth(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
          <div className="w-full flex items-center justify-between py-4">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-0.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="validationCustom01">
              <div className="mt-1 w-full">
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Email Address
                </lable>
                <Form.Control
                  type="email"
                  placeholder="Enter email address"
                  role="input"
                  className="bg-white border rounded-lg border-gray text-base font-medium leading-none text-black py-3 w-full pl-3 mt-2"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an email address.
                </Form.Control.Feedback>
              </div>
            </Form.Group>
            <div className="mt-8">
              <button
                role="submit"
                className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 w-full disabled:opacity-70"
              >
                Continue with email
              </button>
            </div>
          </Form>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500 text-center">
            Already have an account?{' '}
            <span
              tabIndex={0}
              role="link"
              aria-label="Sign up here"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer disabled:opacity-70"
            >
              <Link href="../login">
                <a> Login</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      {/* Footer starts */}
      <Footer />
      {/* <footer className="bg-purple-1000 fixed h-full w-full pt-16 xl:pt-12">
        <div className="mx-auto px-4 sm:px-6 md:px-8 text-white">
          <ul className="flex flex-col items-center justify-center">
            <li className="w-1/2 md:w-1/3 lg:w-1/3"></li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
              <div className="text-center">
                <ul>
                  <li className="mb-4 transition-colors duration-200">
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li className="mb-4 transition-colors duration-200">
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3"></li>
          </ul>
        </div>
      </footer> */}
      {/* Footer ends */}
    </div>
  );
};

export default UserEmail;
