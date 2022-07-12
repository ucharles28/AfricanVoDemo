import React, { useState } from 'react';
import Link from 'next/link';
import jwt_decode from 'jwt-decode';
import { Navbar, Nav, Container, Button, Form, Col } from 'react-bootstrap';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from '@react-oauth/google';
import Meta from '../components/meta';
import { post } from '../Helpers/api';

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  const [validated, setValidated] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const request = {
      email,
      password,
      isGoogleAuth: false,
    };

    // Sign In
    const response = await post('Auth/SignIn', request, '');
    if (response.successful) {
      // Request is successful
      localStorage.setItem('token', response.Token);
      localStorage.setItem(
        'tokenExpiry',
        JSON.stringify(response.TokenExpiryDate)
      );
      localStorage.setItem('user', JSON.stringify(response));
    }
  };

  const handleGoogleAuth = async (user) => {
    const decodeData = jwt_decode(user.credential);
    const request = {
      email: decodeData.email,
      isGoogleAuth: true,
    };

    // Sign In
    const response = await post('Auth/SignIn', request, '');
    console.log(response);
    localStorage.setItem('token', response.Token);
    localStorage.setItem('tokenExpiry', response.TokenExpiryDate);
    localStorage.setItem('user', response);
  };

  return (
    <div>
      {/* Navbar starts */}
      <div className="bg-white fixed w-full z-10 shadow-sm font-inter ">
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
                  href="../signup"
                  className="font-semibold hover:text-purple-600 text-purple-1000 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Sign Up
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
                            href="../signup"
                            className="inline-flex items-center justify-center text-center text-wrap w-full h-12 px-1 py-1 font-medium tracking-wide text-base text-white transition duration-200 rounded bg-purple-1000 hover:bg-purple-500"
                          >
                            Sign Up
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
      <div className="h-full bg-gray-100 shadow-sm w-full py-16 px-4 w-100 font-inter ">
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded lg:w-1/3  md:w-1/2 w-full mt-12 p-10 shadow-sm">
              <p
                tabIndex={0}
                role="heading"
                aria-label="Login to your account"
                className="text-3xl font-extrabold leading-6 text-gray-800 text-center pt-3 pb-3"
              >
                Login to Africanvo
              </p>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationCustom01">
                  <div className="mt-3  w-full">
                    <lable className="text-sm font-medium leading-none text-gray-800">
                      Email Address
                    </lable>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      role="input"
                      className="bg-white border rounded border-gray focus:outline-none text-base font-medium leading-none text-black py-3 w-full pl-3 mt-2"
                      required
                    />
                    <Form.Control.Feedback type="invalid" />
                  </div>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustomPassword">
                  <div className="mt-6  w-full">
                    <label className="text-sm font-medium leading-none text-gray-800">
                      Password
                    </label>
                    <div className="relative flex items-center justify-center">
                      <Form.Control
                        type={passwordShown ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        role="input"
                        placeholder="Password"
                        className="bg-white border rounded border-gray focus:outline-none text-base font-medium leading-none text-black py-3 w-full pl-3 mt-2"
                        required
                      />
                      <div
                        className="absolute right-1 mt-2 mr-2 cursor-pointer bg-white"
                        onClick={togglePasswordVisiblity}
                      >
                        {passwordShown ? <FiEyeOff /> : <FiEye />}
                      </div>
                    </div>
                  </div>
                </Form.Group>
                <div className="mt-8">
                  <button
                    role="button"
                    type="submit"
                    aria-label="log into my account"
                    className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded hover:bg-purple-500 py-3 w-full"
                  >
                    Login
                  </button>
                </div>
              </Form>
              <div className="w-full flex items-center justify-between py-4">
                <hr className="w-full bg-gray-400" />
                <p className="text-base font-medium leading-4 px-0.5 text-gray-400">
                  OR
                </p>
                <hr className="w-full bg-gray-400  " />
              </div>
              <button
                role="button"
                className="py-2.5 px-4 bg-googlesignin border rounded-full border-gray-700 flex items-center w-full mt-15"
                type="submit"
              >
                <div className="border rounded-full p-1 bg-white shadow-sm">
                  <FcGoogle size={24} />
                </div>
                <p className="text-base font-medium ml-8 sm:ml-6 md:ml-6 lg:ml-6 xl:ml-6 text-white text-center">
                  Sign in with Google
                </p>
              </button>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleAuth(credentialResponse);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              
              <p className="text-sm mt-4 font-medium leading-none text-gray-500 text-center">
                Don't have account yet?{' '}
                <span
                  tabIndex={0}
                  role="link"
                  aria-label="Sign up here"
                  className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
                >
                  <Link href="/signup">
                    <a> Sign up here</a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer starts */}
      <footer className="bg-purple-1000  py-12 xl:py-12 font-inter ">
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
      </footer>
      {/* Footer ends */}
    </div>
  );
}

export default Login;
