import React, { useState } from 'react';
import validator from 'validator';
import { Form, Col } from 'react-bootstrap';
import Select from 'react-select';
import Footer from '../components/footer';
import Activebutton from '../components/styles/ActiveButton';
import router from 'next/router';

const TalentType = ({ nextStep, setParentTalentType, languageList, voiceRanges, setLanguageList, setVoiceRanges }) => {
    const [error, setError] = useState(false);
    const [talentType, setTalentType] = useState('VoiceOver');
    const [voiceOverButttonActive, setVoiceOverButttonActive] = useState('active');
    const [translatorButttonActive, setTranslatorButttonActive] = useState('');
    const voiceRangeChangeHandler = value => {
      const result = value.map(function (obj) {
        return obj.label;
      });
      setVoiceRanges(result)
    }

    const handleLanguageRemove = (index) => {
      const list = [...languageList];
      list.splice(index, 1);
      setLanguageList(list);
    };
  
    const handleLanguageChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...languageList];
      list[index][name] = value;
      setLanguageList(list);
      console.log(list);
    };
  
    const handleLanguageAdd = () => {
      setLanguageList([...languageList, { sourceLanguage: "", targetLanguage: "" }]);
    };
    
    const handleSetTalentType = (value) => {
      setTalentType(value);
      setParentTalentType(value);
      setVoiceOverButttonActive(value === 'Translator' ? '' : 'active');
      setTranslatorButttonActive(value === 'Translator' ? 'active' : '');
    };

    const submitFormData = (e) => {
      e.preventDefault();
    };

    // state for navbar for sm screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // state for change avatar dropdown
    const [show1, setShow1] = useState(false)

    const options = [
      { label: "Kids", value: "kids" },
      { label: "Teens", value: "teens" },
      { label: "Young adults", value: "young adults" },
      { label: "Adults", value: "adults" }
    ];
    
    const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')

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
                                <img src={profileImageSrc} alt="avatar" border="0" className="mx-auto object-cover rounded-full h-10 w-10" onClick={()=>setShow1(!show1)} />
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
                                           Account Settings
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
            <div className="flex flex-col items-center justify-center">
              <div className="lg:w-2/5 md:w-1/2 pt-10 pl-4 pr-4 justify-center mt-5 mb-10">
                <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-3xl font-bold text-gray-800 text-left pt-3 pb-6">
                  Voice over artist or Translator? <br></br>What is your voice range(s)
                </p>
                <p className="pb-6 text-base text-gray-550 font-medium">Choose the categories that best describe the type of work you do so we can show you to the right type of clients in search results.</p>
                <p className="text-2xl font-bold text-gray-900 text-left pb-2">I am a:</p>
                <div className="flex flex-row items-center justify-center ml-4">
                  {/* <button 
                    name="Voice over artist" 
                    className="bg-purple-1000 transition duration-150 ease-in-out hover:bg-purple-600 border-2 rounded-lg border-purple-1000 hover:border-purple-600 text-center text-white px-3 py-3 sm:px-2 sm:py-1 font-semibold text-base w-2/3"
                    // defaultValue={values.client} 
                  >
                    <a href='' className='hover:text-white'>Voice over artist</a>
                  </button> */}
                  <Activebutton active={voiceOverButttonActive} onClick={() => handleSetTalentType('VoiceOver')} width='66.6%'>Voice over artist</Activebutton>
                  <Activebutton active={translatorButttonActive} onClick={() => handleSetTalentType('Translator')} width='66.6%'>Translator</Activebutton>
                  {/* <button 
                    name="Translation" 
                    className="sm:ml-2 md:ml-7 ml-7 hover:bg-purple-1000 transition duration-150 ease-in-out hover:border-purple-1000 border-2 rounded-lg border-gray-400 text-gray-400 hover:text-white px-3 sm:px-5 py-3 sm:py-2 text-base font-semibold text-center w-2/3"
                    // defaultValue={values.talent} 
                  >
                    <a href='' className='hover:text-white'>Translator</a>
                  </button> */}
                </div>
                {talentType === 'Translator' ? languageList.map((singleLanguage, index) => (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-3 border-b-2 border-gray-200 pb-2.5">
                        <div>
                            <label className="text-sm font-semibold leading-none text-gray-800">
                            Source Language
                            </label>
                            <input
                            className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-4/5 pl-3 mt-1 placeholder:text-sm"
                            placeholder="English"
                            type="text"
                            name="sourceLanguage"
                            onChange={(e) => handleLanguageChange(e, index)}
                            />
                        </div>
                        <div>
                            <div>
                            <label className="text-sm font-semibold leading-none text-gray-800">
                            Target Language
                            </label>
                                <div className='flex items-center'>
                                    <input
                                    className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-4/5 mr-2 pl-3 mt-1 placeholder:text-sm"
                                    placeholder="Yoruba"
                                    type="text"
                                    name="targetLanguage"
                                    onChange={(e) => handleLanguageChange(e, index)}
                                    />
                                    {languageList.length !== 1 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#bdbdbd" d="M10 5h4a2 2 0 1 0-4 0ZM8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5H8.5Zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM14.25 9a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75Z" onClick={() => handleLanguageRemove(index)} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                        {languageList.length - 1 === index && languageList.length < 100 && (
                            <button
                            type="button"
                            onClick={handleLanguageAdd}
                            className="text-purple-1000 ml-2 font-semibold flex items-center"
                            >
                                Add additional translation skill
                            </button>
                        )}
                    </div> 
                    )) : <div className="">
                    <label className="mt-4 font-bold text-gray-900">Voice Range(s)</label>
                    <Select 
                    options={options}
                    isMulti
                    isClearable={true}
                    isSearchable={true}
                    closeMenuOnSelect={true}
                    placeholder="Select your voice range"
                    className="mt-1 rounded-lg border-gray-300 focus:outline-none" 
                    name="voicerange"
                    onChange={voiceRangeChangeHandler}
                    />
                  </div>}
              </div>                         
            </div>
            <div className="flow-root">
              <div className="ml-7 mb-5 float-left justify-start">
                <button 
                  role="button" 
                  className="text-base font-semibold leading-none text-gray-800 hover:text-white focus:outline-none bg-gray-300 border rounded-lg hover:bg-purple-500 py-3 px-6" 
                  onClick={() => router.back()}
                >
                  Back
                </button>
              </div>
              <div className="mr-7 mb-5 float-right justify-end">
                <button 
                  role="button" 
                  className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-6" 
                  onClick={nextStep}
                  disabled={(languageList.length === 1 && (!languageList[0].sourceLanguage || !languageList[0].targetLanguage)) && voiceRanges.length < 1}
                >
                  {talentType === 'VoiceOver' ? 'Next, your professional brief' : 'Add Translation Skills'}
                </button>
              </div>
            </div>
          <Footer />
        </div>
    );
};
export default TalentType;