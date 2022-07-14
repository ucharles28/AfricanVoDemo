import Footer from '../components/footer';
import React, { useState, useMemo } from 'react';
import validator from 'validator';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import {Modal, Button} from 'react-bootstrap';


const UserProfile = ({ nextStep, prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.avatar) || validator.isEmpty(values.country) || validator.isEmpty(values.city) || validator.isEmpty(values.DOB) || validator.isEmpty(values.genderm) || validator.isEmpty(values.genderf) || validator.isEmpty(values.tel)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  // state for navbar for sm screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state for change email
  const [show1, setShow1] = useState(false)

  const options = useMemo(() => countryList().getData(), []);

  const [country, setCountry] = useState("");

  const changeHandler = Cvalue => {
    // console.log(Cvalue)
    values.country = Cvalue
    // setCountry(Cvalue)
  }

  // modal
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);

  return (
      <div>
          {/* Navbar starts */}
          <div className="bg-white fixed w-full z-10 shadow-sm pb-2 mb-16 font-inter">
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
                              <img alt="profile" src="https://i.ibb.co/bvxhMZJ/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png" className="mx-auto object-cover rounded-full h-10 w-10" onClick={()=>setShow1(!show1)} />
                              {/* <span className="absolute w-3 border-2 left-3/4 -bottom-1 transform -translate-x-1/2 border-white h-3 bg-purple-1000 rounded-full">
                              </span> */}
                          </a>
                      </div>
                      { 
                      show1?<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5">
                          <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                              <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                  <span className="flex flex-col">
                                      <span>
                                          Settings
                                      </span>
                                  </span>
                              </a>
                              <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                  <span className="flex flex-col">
                                      <span>
                                          Account
                                      </span>
                                  </span>
                              </a>
                              <a href="#" className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                  <span className="flex flex-col">
                                      <span>
                                          Logout
                                      </span>
                                  </span>
                              </a>
                          </div>
                      </div>: null
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
          <div className="flex flex-col items-center justify-center font-inter">
            <div className="lg:w-3/5 md:w-3/5 pt-10 pl-4 pr-4 justify-center mt-5 mb-10">
              <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-3xl font-bold text-gray-800 text-left pt-3 pb-6 block">
              A few last details - then you can check and publish your profile.
              </p>
              <p className="pb-6 text-base text-left text-gray-550">A professional photo helps you build trust with your clients. To keep things safe and simple, which is why we need your personal information.</p>
              <div className="py-3 px-3 text-gray-900 rounded-xl grid sm:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col items-center align-top lg:border-r lg:border-gray-300 pb-10">
                  <span className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                    <img src="https://i.ibb.co/X5LP2MZ/avatar.png" alt="avatar" border="0" />
                  </span>
                  <div className="mt-3 flex justify-center">
                    <button
                      type="button"
                      className="text-purple-1000 hover:text-white font-semibold flex items-center border-1 border-gray-150 py-2.5 px-3 rounded-lg hover:bg-purple-600"
                      onClick={handleShow}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#a259ff" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22ZM7 11v2h4v4h2v-4h4v-2h-4V7h-2v4H7Z"/></svg>
                      <span className="pl-2 text-base">Add Photo</span>
                    </button>
                  </div>

                  <Modal show={show2} onHide={handleClose} centered className="rounded-xl" size="lg">
                    <Modal.Header closeButton>
                      <Modal.Title className="font-bold text-4xl">Add Photo</Modal.Title>
                    </Modal.Header>
                    <div className="bg-[#F2F2F2] items-center flex justify-center py-10 px-12">
                      <img src='https://i.ibb.co/X5LP2MZ/avatar.png' alt="avatar" border="0" width="264" height="264" />
                    </div>
                    <Modal.Body className="text-[#828282] text-base">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                          <path fill="#a259ff" d="M13.839 17.525c-.006.002-.559.186-1.039.186c-.265 0-.372-.055-.406-.079c-.168-.117-.48-.336.054-1.4l1-1.994c.593-1.184.681-2.329.245-3.225c-.356-.733-1.039-1.236-1.92-1.416a4.776 4.776 0 0 0-.958-.097c-1.849 0-3.094 1.08-3.146 1.126a.5.5 0 0 0 .493.848c.005-.002.559-.187 1.039-.187c.263 0 .369.055.402.078c.169.118.482.34-.051 1.402l-1 1.995c-.594 1.185-.681 2.33-.245 3.225c.356.733 1.038 1.236 1.921 1.416c.314.063.636.097.954.097c1.85 0 3.096-1.08 3.148-1.126a.5.5 0 0 0-.491-.849z"/><circle cx="13" cy="6.001" r="2.5" fill="#a259ff"/>
                        </svg>
                        <p className="ml-4">Must be an actual photo of you. Logos, clip-art, group photos, and digitally-altered images are not allowed </p>
                      </div>
                      <div className="mt-3 flex justify-center">
                        {/* <button
                          type="file"
                          role="button"
                          className="text-purple-1000 hover:bg-purple-600 hover:text-white font-semibold flex items-center border-1 border-gray-150 py-2 px-3 rounded-lg"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#a259ff" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22ZM7 11v2h4v4h2v-4h4v-2h-4V7h-2v4H7Z"/></svg>
                          <span className="pl-3 text-base">Add Photo</span>
                        </button> */}
                        <input type="file" name="avatar" accept="image/*" />
                      </div>
                    </Modal.Body>
                    <Modal.Footer className="border-t-0">
                      <Button variant="secondary" onClick={handleClose} className="bg-[#e0e0e0] text-[#333333] rounded-lg hover:bg-[#333333] border-none border-0 py-2 px-2 ml-2">
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={handleClose} className="text-white bg-purple-1000 hover:bg-purple-600 border-none border-0 py-2 px-2">
                        Save
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="ml-4">
                  <div className="flex items-center justify-between">
                    <div className='w-full md:w-1/2 px-3 mb-2'>
                      <label className='block font-medium text-gray-700 text-sm mb-2' >Country</label>
                      <Select
                        name="country"
                        className="mt-1 rounded-lg border-gray-300"
                        value={values.country}
                        options={options}
                        onChange={changeHandler}
                      />
                    </div>
                    <div className='w-full md:w-1/2 pl-3 mb-2'>
                      <label className="text-sm font-medium leading-none text-gray-700">City</label>
                      <input
                        className="p-2 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-base"
                        placeholder="Enter your city"
                        type="text"
                        name="city"
                        defaultValue={values.city}
                        onChange={handleFormData("city")}
                      />
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 pl-3 mb-2'>
                      <label className='block font-medium text-gray-700 text-sm mb-2' >Gender</label>
                      <div className="inline-flex items-center mr-4">
                        <input type="radio" name="male" className="h-4 w-4 text-red-600" defaultValue={values.genderm} onChange={handleFormData("genderm")} />
                        <span className="ml-2 text-gray-700">
                          Male
                        </span>
                      </div>
                      <div className="inline-flex items-center">
                        <input type="radio" name="female" className="h-4 w-4 text-red-600" defaultValue={values.genderf} onChange={handleFormData("genderf")} />
                        <span className="ml-2 text-gray-700">
                          Female
                        </span>
                      </div>
                  </div>
                  <div className='w-full md:w-1/2 pl-3 mb-2'>
                    <label className='block font-medium text-gray-700 text-sm mb-2' >Date of birth</label>
                    <input type="date" name="dob" className="text-gray-700 py-2 pl-3 pr-4 border rounded-lg border-gray-300 w-full placeholder-gray-400 flex-1" defaultValue={values.DOB} onChange={handleFormData("DOB")} />
                  </div>
                  <div className='w-full md:w-1/2 pl-3 mb-2'>
                    <label className="text-sm font-medium leading-none text-gray-700">Phone Number</label>
                    <input
                      className="bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 pr-4 mt-1 placeholder:text-sm placeholder-gray-400"
                      placeholder="000-000-000-000"
                      type="text"
                      name="tel"
                      defaultValue={values.tel}
                      onChange={handleFormData("tel")}
                    />
                  </div>
                </div>
              </div>                         
            </div>
          </div>
          {/* prev & next button starts */}
          {/* progess bar */}
          {/* <div className="flex items-center w-full mb-1">
                    <div className="w-1/3 bg-purple-700 h-1 rounded-tl rounded-bl mr-1" />
                    <div className="w-1/3 bg-gray-200 h-1 mr-1 relative">
                        <div className="h-1 w-1/6 bg-purple-700" />
                    </div>
                    <div className="w-1/3 bg-gray-200 h-1 rounded-tr rounded-br" />
                </div> */}
                {/* progress bar ends */}
          <div className="flow-root font-inter">
            <div className="ml-5 lg:ml-10 mb-5 float-left justify-start">
              <button 
                role="button" 
                className="text-base font-semibold leading-none text-gray-800 hover:text-white focus:outline-none bg-gray-300 border rounded-lg hover:bg-purple-500 py-3 px-6" 
                onClick={prevStep}
              >
                Back
              </button>
            </div>
            <div className="mr-5 lg:mr-10 mb-5 float-right justify-end">
              <button 
                role="button" 
                className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-3" 
                onClick={nextStep}
              >
                Lastly, Your audio samples
              </button>
            </div>
          </div>
          {/* prev & next button ends */}
        <Footer />
      </div>
  );
};

export default UserProfile;