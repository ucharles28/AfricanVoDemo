import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Form, Col } from 'react-bootstrap';
import validator from 'validator';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { post } from '../helpers/Api';
import Footer from '../components/footer';

const UserName = ({ nextStep, email, accountType }) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const request = {
        email,
        isGoogleAuth: false,
        firstname: firstName,
        lastname: lastName,
        accountType,
        country,
        password
      };
      console.log(request);
      // Sign Up
      // const response = await post('Auth/SignUp', request, '');
      // console.log(response);
      // localStorage.setItem('token', response.Token);
      // localStorage.setItem('tokenExpiryDate', response.TokenExpiryDate);
      // localStorage.setItem('user', response);
      nextStep();
    }
    setValidated(true);
  };

  const [validated, setValidated] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = useMemo(() => countryList().getData(), []);
  const [country, setCountry] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const changeHandler = Cvalue => {
    setCountry(Cvalue)
  }

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
      <div className="flex flex-col items-center justify-center">
        <div className="lg:w-2/5 md:w-1/2 pt-10 pl-4 pr-4 justify-center my-5">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-4xl font-bold text-gray-800 text-center pt-3 pb-3"
          >
            Complete your account setup
          </p>
          <p className="text-center pb-2 text-base font-normal text-gray-500">{email}{' '}</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit} >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Form.Group as={Col} controlId="validationCustom01">
                  <div>
                    <label className="text-sm font-semibold leading-none text-gray-800">
                      First Name
                    </label>
                    <Form.Control
                      className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"
                      placeholder="Enter first name"
                      type="text"
                      required
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide an first name.
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                  <div>
                    <label className="text-sm font-semibold leading-none text-gray-800">
                      Last Name
                    </label>
                    <Form.Control
                      className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"
                      placeholder="Enter last name"
                      type="text"
                      required
                      name="firstName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide an last name.
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </div>
              <Form.Group as={Col} controlId="validationCustomPassword">
                <div className="mt-2 w-full">
                  <label className="text-sm font-medium leading-none text-gray-800">
                    Create Password
                  </label>
                  <Form.Control
                    type="password"
                    placeholder="Create password"
                    role="input"
                    className="bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide an valid password.
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustomRepeatpassword">
                <div  className="mt-2 w-full">
                  <label className="text-sm font-medium leading-none text-gray-800">Confirm Password</label>
                    <Form.Control 
                      type="password" 
                      placeholder="Confirm password" 
                      role="input" 
                      className="bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"  
                      required 
                      name="confirmpassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide an valid password.
                    </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustomCountry">
                <div className="col-span-6 sm:col-span-3 mt-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <Select
                    name="country"
                    placeholder="Select your country"
                    className="mt-1 border-gray-300"
                    value={country}
                    options={options}
                    required
                    onChange={changeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please select a country.
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group as={Col} controlId="validationCustomTerms">
                <div className="flex items-start mt-2 ml-1">
                  <div className="flex items-center h-5">
                    <Form.Check
                      name="term"
                      type="checkbox"
                      // className="focus:ring-indigo-500 bg-purple-1000 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      // required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <p className=" ">
                      Yes, I understand and agree to the Africanvo{' '}
                      <span className="text-purple-1000">Terms of Service,</span>
                      including the{' '}
                      <span className="text-purple-1000">
                        User Agreement
                      </span> and{' '}
                      <span className="text-purple-1000">Privacy Policy.</span>
                    </p>
                  </div>
                </div>
              </Form.Group>
              <div className="mt-8">
                <button
                  role="submit"
                  className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 w-full"
                >
                  Create my account
                </button>
                {/* <button
                  role="button"
                  className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 w-full"
                  onClick={prevStep}
                >
                  Go Back
                </button> */}
              </div>
          </Form>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500 text-center">
            Already have an account?{' '}
            <span
              tabIndex={0}
              role="link"
              aria-label="Sign up here"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
            >
              <Link href="../login">
                <a> Login</a>
              </Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
      {/* Footer ends */}
    </div>
  );
};

export default UserName;
