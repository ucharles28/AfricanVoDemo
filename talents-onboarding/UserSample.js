import Footer from '../components/footer';
import React, { useState, useMemo, useEffect } from 'react';
// import validator from 'validator';
import { Form, Col, Modal, Button } from 'react-bootstrap';
// import Select from 'react-select';
import countryList from 'react-select-country-list';
import { RiAddCircleFill } from 'react-icons/ri';
import Styledcheckbox from '../components/styles/StyledCheckbox';
import { RiEdit2Fill } from 'react-icons/ri';
import { IoTrashOutline } from 'react-icons/io5';

const UserSample = ({ nextStep, prevStep, voiceOverSamples, audioFiles, setVoiceOverSamples, setAudioFiles }) => {
  const voiceSkills = [
    'Animation',
    'AudioBooks',
    'Business',
    'Documentaries',
    'E-Learning',
    'Online-Video',
    'Movie Trailer',
    'Podcasting',
    'Radio',
    'Telephone',
    'Television',
    'Video Games',
    'Commercial'
  ]

  const ageTicks = [
    'Kids (1 - 10)',
    'Teen (11 - 17)',
    'Older teen (18 - 20)',
    'Young adult (21 - 40)',
    'Older adult (41 - 90)'
  ]

  const [error, setError] = useState(false);
  // state for navbar for sm screens
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // country select
  const options = useMemo(() => countryList().getData(), []);
  const [language, setLanguage] = useState('');
  const [voiceOverSkill, setVoiceOverSkill] = useState('');
  const [ageTick, setAgeTick] = useState('');
  const [title, setTitle] = useState('');
  const [tone, setTone] = useState('');
  const [genre, setGenre] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileSrc, setSelectedFileSrc] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);


  const [show1, setShow1] = useState(false)

  // modal
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = (isEdit, index) => {
    if (isEdit) {
      setCurrentIndex(index);
      const voiceSampleToEdit = voiceOverSamples[index]
      console.log(voiceSampleToEdit)
      setTitle(voiceSampleToEdit.title)
      setAgeTick(voiceSampleToEdit.ageTick)
      setTone(voiceSampleToEdit.tone)
      setGenre(voiceSampleToEdit.genre)
      setVoiceOverSkill(voiceSampleToEdit.voiceOverSkill)
      setLanguage(voiceSampleToEdit.language)
    }
    else {
      setCurrentIndex(currentIndex + 1)
    }
    setShowModal(true);
  }

  const handleSampleRemove = (index) => {
    const list = [...voiceOverSamples];
    list.splice(index, 1);
    setVoiceOverSamples(list);
  };

  const fileChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = function (e) {
      setSelectedFileSrc(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSave = () => {
    if (voiceOverSamples[currentIndex]) {
      const newState = voiceOverSamples.map((sample, index) => {
        if (index === currentIndex) {
          const list = [...audioFiles]
          list[index] = selectedFile;
          setAudioFiles(list)
          return {
            voiceOverSkill,
            title,
            language,
            ageTick,
            tone,
            genre,
            fileSrc: selectedFileSrc,
            fileName: selectedFile.name,
          }
        }
      })
      setVoiceOverSamples(newState);
    } else {
      const newSample = {
        voiceOverSkill,
        title,
        language,
        ageTick,
        tone,
        genre,
        fileSrc: selectedFileSrc,
        fileName: selectedFile.name,
      }
      setVoiceOverSamples((prev) => [...prev, newSample])
      setAudioFiles((prev) => [...prev, selectedFile])
    }
    resetModalControls();
    console.log(voiceOverSamples)
  }

  const resetModalControls = () => {
    setVoiceOverSkill('')
    setTitle('')
    setLanguage('')
    setAgeTick('')
    setTone('')
    setGenre('')
    setShowModal(false);
    setSelectedFile('')
  }

  // play mp3 file
  // const playAudio = () => { 
  //   const audioEl = document.getElementsByClassName("audio-element")[0]
  //   audioEl.play()
  // }

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
                      {
                        show1 ? <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5">
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
                        </div> : null
                      }
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
                          </div>)}
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
          <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-3xl font-bold text-gray-800 text-left pt-3 pb-6 block">
            Lastly, show how great you are, upload an audio sample.
          </p>
          <p className="pb-6 text-base text-left text-gray-550">Talent who add portfolios to their profile are more likely to win work. (+20%) </p>
          {voiceOverSamples.map((sample, index) => (<div className="py-3 px-3 mb-2 text-purple-1000 flex flex-col justify-center rounded-xl bg-[#F9F4FF]">
            <div className='flex flex-col items-stretch space-y-2 w-full'>

              <div className="item w-full">
                <span className='text-base font-medium text-gray-900 text-left'>{sample.fileName}</span>
              </div>

              <div className="item w-full">
                <div className='flex flex-row flex-wrap'>
                  <div className='bg-[#E0E0E0] px-2 py-0.5 rounded-full'>
                    <span className='text-[#4F4F4F] font-medium'>{sample.voiceOverSkill}</span>
                  </div>
                </div>
              </div>

              <div className="item w-full">
                <div className='flex items-stretch space-x-4 h-auto w-full'>

                  <div className="item w-full">
                    <audio src={sample.fileSrc} controls controlsList="nodownload" />
                    {/* <button onClick={playAudio}></button> */}
                  </div>

                  <div className="item w-32">
                    <div className="flex items-center gap-3">
                      <span className='border-1 rounded-full py-1 px-1 border-purple-1000 hover:cursor-pointer'><IoTrashOutline onClick={() => handleSampleRemove(index)} size={20} className='text-purple-1000' /></span>
                      <span className='border-1 rounded-full py-1 px-1 border-purple-1000 hover:cursor-pointer'><RiEdit2Fill onClick={() => handleShow(true, index)} size={20} className='text-purple-1000' /></span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>))}
          <div className="py-5 px-3 mb-2 text-purple-1000 flex flex-col items-center justify-center rounded-xl bg-[#F9F4FF] text-center">
            <button
              type="button"
              className="text-purple-1000 font-semibold flex items-center border-2 border-{#E0E0E0} py-2 px-3 rounded-lg bg-white"
              onClick={() => handleShow()}
            >
              <RiAddCircleFill size={24} />
              <span className="pl-3 text-base">Add a demo</span>
            </button>
          </div>

          <Modal show={showModal} onHide={handleClose} centered scrollable className="rounded-xl" size="lg">
            <Modal.Header closeButton>
              <Modal.Title className="font-bold text-4xl">Add a voice demo</Modal.Title>
            </Modal.Header>
            <Modal.Body className="flex flex-col">
              <div>
                <div>
                  <div className="ml-2">
                    <p className="text-2xl font-bold pb-2">Voice over skill <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                    <p className="text-base font-semibold pb-2 text-gray-550" >Select one skill this voice over sample relates to.</p>
                  </div>
                  <fieldset className="flex flex-wrap ml-2">
                    {voiceSkills.map((skill, index) => (
                      <Styledcheckbox onClick={(e) => {
                        setVoiceOverSkill(skill)
                      }} active={voiceOverSkill === skill ? 'active' : ''}>
                        {/* <Form.Check type="checkbox" className='accent-purple-1000 checked:bg-purple-1000 mr-2 caret-purple-700' />  */}
                        <input type="radio" checked={voiceOverSkill === skill} value="vo-skills" name="skill" className="mr-2 w-4 h-4" /> {skill}
                      </Styledcheckbox>
                    ))}
                  </fieldset>
                </div>
                <div className="mt-4">
                  <div className="ml-2">
                    <p className="text-2xl font-bold pb-2">Age tick <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                  </div>
                  <fieldset className="flex flex-wrap ml-2">
                    {ageTicks.map((agetick, index) => (
                      <Styledcheckbox onClick={(e) => {
                        setAgeTick(agetick)
                      }} active={ageTick === agetick ? 'active' : ''}>
                        {/* <Form.Check type="checkbox" className='accent-purple-1000 checked:bg-purple-1000 mr-2 caret-purple-700' />  */}
                        <input type="radio" checked={ageTick === agetick} value="age-tick" name="age-tick" className="mr-2 w-4 h-4" /> {agetick}
                      </Styledcheckbox>
                    ))}
                  </fieldset>
                </div>
                <div className="mt-4">
                  <div className="ml-2">
                    <p className="text-2xl font-bold pb-2">Title <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                    <p className="text-base font-semibold pb-2 text-gray-550" >Include your languages, industry expertise, and any other descriptive to get your portfolio samples the most views.</p>
                  </div>
                  <fieldset className="flex flex-wrap">
                    <textarea
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-3 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base ml-2"
                      maxlength="70"
                      minlength="40"
                      name="title of sample"
                      rows="3"
                      cols="40"
                      value={title}
                      onChange={(e) => { setTitle(e.target.value) }}
                    >
                    </textarea>
                  </fieldset>
                </div>
                <div className="mt-4">
                  <div className="ml-2">
                    <p className="text-2xl font-bold pb-2">Language <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                  </div>
                  <fieldset className="flex flex-wrap">
                    <input
                      className="p-3 bg-white border-2 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2 ml-2"
                      placeholder="Enter language"
                      type="text"
                      name="language"
                      value={language}
                      onChange={(e) => { setLanguage(e.target.value) }}
                    />
                  </fieldset>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="ml-2">
                    <p className="text-2xl font-bold pb-2">Tone <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                    <div>
                      <input
                        className="p-3 bg-white border-2 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"
                        placeholder="Enter sample tone"
                        type="text"
                        name="tone"
                        value={tone}
                        onChange={(e) => { setTone(e.target.value) }}
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold pb-2">Genre <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                    <input
                      className="p-3 bg-white border-2 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"
                      placeholder="Enter sample genre"
                      type="text"
                      name="genre"
                      value={genre}
                      onChange={(e) => { setGenre(e.target.value) }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="ml-2">
                    <p className="text-2xl font-bold pb-2">Upload audio file <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                    <p className="text-base font-semibold pb-2 text-gray-550" >Limited to one file, must be MP3, and maximum 5 MB. </p>
                  </div>
                  <fieldset className="flex flex-wrap">
                    <input type="file" name="audiosample" onChange={fileChangeHandler} accept=".mp3,audio/*" className='ml-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100' />
                  </fieldset>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-t-0">
              <Button onClick={handleClose} className="bg-[#e0e0e0] text-[#333333] rounded-lg hover:bg-[#333333] border-none border-0 py-2 ml-2">
                <span className="px-1">Cancel</span>
              </Button>
              <Button onClick={handleSave}
                disabled={(!voiceOverSkill || !ageTick || !title || !tone || !genre || !selectedFile)}
                className="text-white bg-purple-1000 hover:bg-purple-600 border-none border-0 py-2 disabled:bg-purple-1000 disabled:opacity-70">
                <span className="px-2">Save</span>
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      {/* prev & next button starts */}
      <div className="flow-root">
        <div className="ml-10 mb-5 float-left justify-start">
          <button
            role="button"
            className="text-base font-semibold leading-none text-gray-800 hover:text-white focus:outline-none bg-gray-300 border rounded-lg hover:bg-purple-500 py-3 px-6"
            onClick={prevStep}
          >
            Back
          </button>
        </div>
        <div className="mr-10 mb-5 float-right justify-end">
          <button
            role="button"
            className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-6 disabled:opacity-70"
            onClick={nextStep}
            disabled={voiceOverSamples.length < 1}
          >
            Review profile
          </button>
        </div>
      </div>
      {/* prev & next button ends */}
      <Footer />
    </div>
  );
};

export default UserSample;