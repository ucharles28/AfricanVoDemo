// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import validator from 'validator';
import UserEmail from '../talents-onboarding/UserEmail';
import UserName from '../talents-onboarding/UserName';
import UserAuth from '../talents-onboarding/UserAuth';
import UserAuth1 from '../talents-onboarding/UserAuth1';
import UserAuth2 from '../talents-onboarding/UserAuth2';
import UserVoiceRange from '../talents-onboarding/UserVoiceRange';
import UserBio from '../talents-onboarding/UserBio';
import UserLang from '../talents-onboarding/UserLang';
import UserProfile from '../talents-onboarding/UserProfile';
import UserReview from '../talents-onboarding/SetupComplete';
import UserSample from '../talents-onboarding/UserSample';
import SubmitProfile from '../talents-onboarding/SubmitProfile';
import Activebutton from '../components/activebutton';
import Disabledbutton from '../components/disabledbutton';
import Footer from '../components/footer';

const Signup = ({ values }) => {
  // Nav Open
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // state for steps
  const [step, setstep] = useState(10);
  const [accountType, setAccountType] = useState('Client');
  const [email, setEmail] = useState('');

  // state for form data
  const [formData, setFormData] = useState({
    talent: '',
    client: '',
    term: '',
    firstName: '',
    lastName: '',
    age: '',
    genderm: '',
    genderf: '',
    DOB: '',
    tel: '',
    email: '',
    authtext: '',
    password: '',
    confirmpassword: '',
    bio: '',
    country: '',
    city: '',
    role: '',
    voicerange: '',
    sourcelang: '',
    targetlang: '',
    langstrength: '',
    spokenlang: '',
    avatar: '',
    audiosample: '',
  });

  const updatePageState = (state) => {
    setPageState(state);
  } 

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    console.log(step);
    if (step === 1) {
      console.log(accountType);
    }

    setstep(step + 1);

    // if (
    //   validator.isEmpty(values.client) ||
    //   validator.isEmpty(values.talent)
    // ) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    console.log(input);
    // input value from the form
    const { value } = e.target;

    // updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 1:
      return (
        <div className=" font-inter ">
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
          <div className="flex flex-col items-center mb-28 p-4 justify-center">
            <div className="lg:w-2/5  md:w-1/2 w-full pt-10 justify-center my-5">
              <p
                tabIndex={0}
                className="text-5xl font-extrabold leading-10 text-gray-800 text-left pt-5"
              >
                I want to:
              </p>
              <p className="pb-5 font-medium text-base pt-2 text-gray-500">
                Select what type of user you want to be on Africanvo
              </p>
              
                <div className="flex justify-center items-center">
                  {/* <button
                    name="client"
                    className="hover:bg-purple-1000 transition duration-150 ease-in-out border-2 hover:border-purple-1000 rounded-lg text-gray-400 hover:text-white px-4 sm:px-4 border-gray-400 py-2 sm:py-2 text-sm font-semibold text-center"
                    onClick={() => setAccountType('Client')}
                    // defaultValue={values.client}
                  >
                    
                      Hire a voice talent/translator
                    
                  </button> */}
                  <Disabledbutton 
                    bg='#ffffff' 
                    color='#9CA3AF' 
                    width='50%' 
                    margin-right='12px' 
                    name='client'
                    onClick={() => setAccountType('Client')}
                  >
                    Hire a voice talent/translator
                  </Disabledbutton>
                  <Activebutton 
                    bg='#A259FF' 
                    color='#fff' 
                    width='50%'
                    name='talent'
                    onClick={() => setAccountType('Talent')}
                  >
                    Work as voice talent/translator
                  </Activebutton>
                  {/* <button
                    name="talent"
                    className="bg-purple-1000 sm:ml-2 md:ml-7 ml-7 transition duration-150 ease-in-out hover:bg-purple-600 border-2 border-purple-1000 hover:border-purple-600 text-center flex rounded-lg text-white px-4 sm:px-2 py-2 sm:py-2 font-semibold text-sm"
                    onClick={() => setAccountType('Talent')}
                    // defaultValue={values.talent}
                  >
                    
                      Work as voice talent/translator
                    
                  </button> */}
                </div>
                <div className="mt-16">
                  <button
                    label="Continue"
                    name="continue"
                    role="button"
                    className="text-base font-semibold leading-none text-white bg-purple-1000 rounded-lg hover:bg-purple-600 py-4 w-full"
                    onClick={nextStep}
                  >
                    Continue
                  </button>
                </div>
            </div>
          </div>
          {/* footer starts */}
          <Footer />
          {/* <footer className="bg-purple-1000 fixed h-full w-full pt-16 xl:pt-12">
            <div className="mx-auto px-4 sm:px-6 md:px-8 text-white">
              <ul className="flex flex-col items-center justify-center">
                <li className="w-1/2 md:w-1/3 lg:w-1/3" />
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
                <li className="w-1/2 md:w-1/3 lg:w-1/3" />
              </ul>
            </div>
          </footer> */}
          {/* footer ends */}
          {/* <button onClick={nextStep} handleFormData={handleInputData} values={formData}>Continue</button> */}
        </div>
      );
    case 2:
      return (
        <div>
          <UserEmail
            nextStep={nextStep}
            handleFormData={handleInputData}
            accountType={accountType}
            setParentEmail={setEmail}
            values={formData}
          />
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the form
    case 3:
      return (
        <div>
          <UserName
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
            email={email}
            accountType={accountType}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <UserAuth
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 5:
      return (
        <div>
          <UserAuth1
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 6:
      return (
        <div>
          <UserAuth2
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 7:
      return (
        <div>
          <UserVoiceRange
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 8:
      return (
        <div>
          <UserBio
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 9:
      return (
        <div>
          <UserLang
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 10:
      return (
        <div>
          <UserProfile
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 11:
      return (
        <div>
          <UserSample
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 12:
      return (
        <div>
          <SubmitProfile
            values={formData}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        </div>
      );
    case 13:
      return (
        <div>
          <UserReview
            nextStep={nextStep}
            prevStep={prevStep}
            values={formData}
          />
        </div>
      );
  }
};

// array of number of steps

export default Signup;
