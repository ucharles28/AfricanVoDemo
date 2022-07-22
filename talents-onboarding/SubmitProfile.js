import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { RiEdit2Fill } from 'react-icons/ri';
import validator from 'validator';
import Footer from '../components/footer';
import { postData, get } from '../helpers/ApiRequest'
import { tokenIsValid } from '../helpers/Utils'
import { FaMapMarkerAlt } from 'react-icons/fa';

const SubmitProfile = ({ prevStep, nextStep, translationalSkills, talentType, userBio, languageList, userData, voiceRanges, profileImageSrc, profileImage, voiceOverSamples }) => {
  const router = useRouter();
  //retrieve customer
  // const user = JSON.parse(localStorage.getItem('user'))
  console.log(translationalSkills)

  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState(userData?.country);
  const [city, setCity] = useState(userData?.city);

  const submitPortfolio = async () => {
    // const token = localStorage.getItem('Token')
    // if (talentType === 'Translator') {
    //   const request = {
    //     ...userData,
    //     Bio: userBio,
    //     ProfileImageFile: profileImage,
    //     TranslationalSkills: languageList.map((language, index) => {
    //       return {
    //         SourceLanguage: language.sourceLanguage,
    //         TargetLanguage: language.targetLanguage,
    //         Samples: translationalSkills[index]
    //       }
    //     })
    //   }
    //   const response = await postData('User/Talent/Translator/SetupPortfolio', request, token);
    //   if (response.successful) {

    //     nextStep();
    //   } else {

    //   }

    // } else {
    //   const request = {
    //     ...userData,
    //     Bio: userBio,
    //     ProfileImageFile: profileImage,
    //     Languages: languageList.map((language, index) => {
    //       return {
    //         Name: language.language,
    //         Proficiency: language.proficiency,
    //       }
    //     }),
    //     VoiceOverSamples: voiceOverSamples
    //   }

    //   const response = await postData('User/Talent/Translator/SetupPortfolio', request, token);
    //   if (response.successful) {

    //     nextStep();
    //   } else {

    //   }
    nextStep();
  };

  // state for navbar for sm screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // state for profile hover
  const [show1, setShow1] = useState(false)

  //destructuring the object from values

  // const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')


  return (

    <div>
      {/* Navbar starts */}
      <div className="bg-white fixed w-full z-10 shadow-sm pb-2 mb-16">
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
                    <img src="https://i.ibb.co/X5LP2MZ/avatar.png" alt="avatar" border="0" className="mx-auto object-cover rounded-full h-10 w-10" onClick={() => setShow1(!show1)} />
                    {/* <span className="absolute w-3 border-2 left-3/4 -bottom-1 transform -translate-x-1/2 border-white h-3 bg-purple-1000 rounded-full">
                          </span> */}
                  </a>
                </div>
                {
                  show1 ? <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5">
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
      <div className="flex flex-col items-center justify-center">
        <div className="w-full py-6 flex justify-center align-top flex-col items-center mt-16 mb-16">
          <div className="w-4/5 mb-16">
            <div className="w-full bg-purple-1000 rounded-t-xl py-4">
              <p className="text-white lg:text-2xl w-full font-semibold pl-4 font-inter text-xl">Preview profile</p>
            </div>
            <div className="w-full py-4 px-4 bg-white border-r border-l border-b border-[#828282] rounded-b-xl flex lg:flex-row flex-col items-center">
              <img src="https://i.ibb.co/tBCp0hW/ic-round-thumb-up-alt.png" alt="ic-round-thumb-up-alt" border="0" className="lg:w-44 lg:h-44 w-24 h-24 rounded-xl justify-start flex mr-2 " />
              <div className="ml-2">
                <p className="font-semibold text-3xl text-gray-900 pb-3 font-inter">Looking good, {firstName}{' '}</p>
                <p className="font-medium text-lg text-[#4F4F4F] pb-3 font-inter">Make any edit you want, then submit your profile. you can make more changes after it is live</p>
                <button
                  role="button"
                  className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-6 font-inter"
                  onClick={submitPortfolio}
                >
                  Submit profile
                </button>
              </div>
            </div>

            <div className='flex mt-16 justify-center'>
            <div className="lg:flex lg:items-stretch lg:space-x-2 lg:h-full w-full lg:flex-row lg:gap-4 grid grid-cols-1">
              {/* <div className='w-full lg:flex-row lg:flex lg:gap-4 grid grid-cols-1'> */}
                {/* <div className="grid grid-cols-2 gap-2 rounded-xl"> */}
                <div className="mr-1 lg:w-2/5 sm:w-full bg-purple-50 h-80 text-gray-900 rounded-xl px-6 py-5 mb-2">
                  <div className="flex flex-col items-center justify-center pb-10">
                    <span className="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                      <img src={profileImageSrc} alt="avatar" border="0" />
                    </span>
                    <p className='font-semibold font-inter text-lg leading-6 pt-2'>{lastName}{' '} {firstName}{' '}</p>
                    <div className='flex items-center pr-2 pt-1'>
                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z" />
                      </svg>
                      <span className='font-inter text-base font-medium leading-6 text-[#828282]'>{country}{' '}, {city}{' '}</span>

                    </div>
                    <div className="mt-3 flex justify-center">
                      <button
                        type="button"
                        className="text-purple-1000 font-semibold font-inter flex items-center border-1 border-gray-150 py-2.5 px-3 rounded-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#a259ff" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18ZM15.27 4L18 6.73l-2 1.95L13.32 6Z" /></svg>
                        <span className="pl-2 text-base">Edit photo</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='lg:w-full sm:w-full'>
                  <div className="bg-purple-50 text-gray-900 rounded-xl px-3 py-4">
                    <div className="flex items-center pb-3">
                      <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Professional brief</p>
                      <span className='border-2 rounded-full py-1 px-1 border-[#828282]'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18ZM15.27 4L18 6.73l-2 1.95L13.32 6Z" /></svg>
                      </span>
                    </div>
                    <span className='font-medium text-lg leading-7 text-[#4F4F4F] font-inter'>{userBio}{' '}.</span>
                  </div>
                  {talentType === 'VoiceOver' && <div className="bg-purple-50 text-gray-900 rounded-xl mt-4 px-3 py-4">
                    <div className="flex items-center pb-3">
                      <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Voice Range</p>
                      <span className='border-2 rounded-full py-1 px-1 border-[#828282]'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18ZM15.27 4L18 6.73l-2 1.95L13.32 6Z" /></svg>
                      </span>
                    </div>
                    {voiceRanges.map((voiceRange) => (<span className='font-medium text-lg leading-7 text-[#333333] bg-[#BDBDBD] rounded-full px-3 py-1 font-inter'>{voiceRange}</span>))}
                  </div>}
                  <div className="bg-purple-50 text-gray-900 rounded-xl mt-4 px-3 py-4">
                    <div className="flex items-center pb-3">
                      <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Language</p>
                      <span className='border-2 rounded-full py-1 px-1 border-[#828282]'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18ZM15.27 4L18 6.73l-2 1.95L13.32 6Z" /></svg>
                      </span>
                    </div>
                    {talentType === 'VoiceOver' ? <div><div
                      className="py-2.5 px-3 mb-2 font-inter text-gray-900 border rounded-xl bg-purple-250 grid sm:grid-cols-2 lg:grid-cols-2 w-4/5">
                      <strong className="text-base font-medium leading-6 w-1/2 sm:w-1/2"> Language </strong>
                      <strong className="text-base font-medium leading-6 w-1/2 sm:w-1/2"> Proficiency </strong>
                    </div>
                      {languageList.map((language) => (<div
                        className="py-2.5 px-3 mb-2 font-inter grid sm:grid-cols-2 lg:grid-cols-2 w-4/5">
                        <strong className="text-base font-normal text-gray-900 leading-6 w-1/2 sm:w-1/2"> {language.language} </strong>
                        <strong className="text-base font-medium text-[#6C757D] leading-6 w-1/2 sm:w-1/2"> {language.proficiency} </strong>
                      </div>))}
                    </div> : <div><div
                      className="py-2.5 px-3 mb-2 font-inter text-gray-900 border rounded-xl bg-purple-250 grid sm:grid-cols-2 lg:grid-cols-2 w-4/5">
                      <strong className="text-base font-medium leading-6 w-1/2 sm:w-1/2"> Source Language </strong>
                      <strong className="text-base font-medium leading-6 w-1/2 sm:w-1/2"> Target Language </strong>
                    </div>
                      {languageList.map((language) => (<div
                        className="py-2.5 px-3 mb-2 font-inter grid sm:grid-cols-2 lg:grid-cols-2 w-4/5">
                        <strong className="text-base font-normal text-gray-900 leading-6 w-1/2 sm:w-1/2"> {language.sourceLanguage} </strong>
                        <strong className="text-base font-medium text-[#6C757D] leading-6 w-1/2 sm:w-1/2"> {language.targetLanguage} </strong>
                      </div>))}
                    </div>}
                  </div>
                  <div className="bg-purple-50 text-gray-900 rounded-xl mt-4 px-3 py-4">
                    <div className="flex items-center pb-3">
                      <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Audio Sample</p>
                      <RiEdit2Fill size={20} className='text-[#828282]'/>
                    </div>
                    {talentType !== 'VoiceOver' ? languageList.map((language, index) => (<div
                      className="py-2.5 px-3 mb-2 font-inter grid sm:grid-cols-2 lg:grid-cols-2 w-4/5">
                      <strong className="text-base font-normal text-gray-900 leading-6 w-1/2 sm:w-1/2"> {`${language.sourceLanguage} to ${language.targetLanguage}`} </strong>
                      <strong className="text-base font-medium text-[#6C757D] leading-6 w-1/2 sm:w-1/2"> {`${translationalSkills[index]?.length} ${translationalSkills[index]?.length > 1 ? 'Samples' : 'Sample'}`} </strong>
                    </div>)) : languageList.map((language) => (<div
                      className="py-2.5 px-3 mb-2 font-inter grid sm:grid-cols-2 lg:grid-cols-2 w-4/5">
                      <strong className="text-base font-normal text-gray-900 leading-6 w-1/2 sm:w-1/2"> {`${language.sourceLanguage} to ${language.targetLanguage}`} </strong>
                    </div>))}
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* prev and next button */}
      <div className="flow-root">
        <div className="ml-7 mb-5 float-left justify-start">
          <button
            role="button"
            className="text-base font-semibold leading-none text-gray-800 hover:text-white focus:outline-none bg-gray-300 border rounded-lg hover:bg-purple-500 py-3 px-6"
            onClick={prevStep}
          >
            Back
          </button>
        </div>
        <div className="mr-7 mb-5 float-right justify-end">
          <button
            role="button"
            className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-6"
            onClick={submitPortfolio}
          >
            Submit profile
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
  ;

export default SubmitProfile;