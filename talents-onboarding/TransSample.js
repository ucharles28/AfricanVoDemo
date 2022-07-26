import Footer from '../components/footer';
import React, { useState, useMemo } from 'react';
import validator from 'validator';
import { Form, Col, Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { RiAddCircleFill, RiEdit2Fill } from 'react-icons/ri';
import Styledcheckbox from '../components/styles/StyledCheckbox';
import CustomAlert from '../components/CustomAlert';
import { IoTrashOutline } from 'react-icons/io5';
import Stepbutton from '../components/styles/StepButton';

// const GridStyles = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   grid-gap: 2rem;
// `;

const TransSample = ({ nextStep, prevStep, translationalSkills, languageList, setTranslationalSkills }) => {
    const industryExpertise = [
        'Advertising',
        'Consumer Products',
        'Education',
        'Entertainment',
        'Financial Services',
        'Food',
        'General',
        'Government',
        'Retail',
        'Health Care',
        'Hospitality',
        'Manufacturing',
        'Media',
        'Professional Services',
        'Real Estate',
        'Social Services',
        'Technology'
    ]

    const [selectedExpertise, setSelectedExpertise] = useState({});
    const [error, setError] = useState(false);
    const [showModalAlert, setShowModalAlert] = useState(false);
    const [modalError, setModalError] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSampleIndex, setCurrentSampleIndex] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            validator.isEmpty
        ) {
            setError(true);
        } else {
            nextStep();
        }
    };

    // state for navbar for sm screens
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const fileChangeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const removeSampleHandler = (key,index) => {
        const list = {...translationalSkills};
        list[key].splice(index, 1);
        setTranslationalSkills(list);
    };

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    // modal
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        resetModalControls();
    };
    const handleSave = () => {
        let skill = translationalSkills?.[currentIndex]
        if (skill !== undefined) {
            if (skill?.[currentSampleIndex]) {//Edit sample
                skill[currentSampleIndex] = {
                    Title: title,
                    Description: description,
                    AudioFile: selectedFile,
                    IndustryExpertises: Object.entries(selectedExpertise).map((entry) => {
                        if (entry[1]) {// If still selected
                            return entry[0]
                        }
                    })
                }
            } else {//Add new sample
                skill.push({
                    Title: title,
                    Description: description,
                    AudioFile: selectedFile,
                    IndustryExpertises: Object.entries(selectedExpertise).map((entry) => {
                        if (entry[1]) {// If still selected
                            return entry[0]
                        }
                    })
                })
            }
        } else {
            skill = [{
                Title: title,
                Description: description,
                AudioFile: selectedFile,
                IndustryExpertises: Object.entries(selectedExpertise).map((entry) => {
                    if (entry[1]) {// If still selected
                        return entry[0]
                    }
                })
            }]
        }
        setTranslationalSkills((prev) => (
            { ...prev, [currentIndex]: skill }
        ))
        resetModalControls();
        console.log(translationalSkills)
    }

    const resetModalControls = () => {
        setDescription('')
        setTitle('')
        setSelectedExpertise({})
        setShowModal(false);
    }
    const handleShow = (key, index) => {
        setCurrentIndex(index)
        setCurrentSampleIndex(currentSampleIndex + 1)
        setShowModal(true);
    }

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
                                        <img src="https://i.ibb.co/X5LP2MZ/avatar.png" alt="avatar" border="0" className="mx-auto object-cover rounded-full h-10 w-10" onClick={() => setShow1(!show1)} />
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
                <div className="lg:w-2/5 md:w-1/2 pt-10 pl-4 pr-4 justify-center mt-5 mb-10">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-3xl font-bold text-gray-800 text-left pt-3 pb-6 block">
                        Lastly, show how great you are, upload your translation sample.
                    </p>
                    <p className="pb-6 text-base text-left text-gray-550">Talent who add portfolios to their profile are more likely to win work. (+20%) </p>
                    <div className="py-3 px-3 mb-2 text-purple-1000 flex flex-col justify-center rounded-xl bg-[#F9F4FF]">
                        {Object.keys(translationalSkills).map((key, index) => (<div className='flex flex-col items-stretch space-y-2 w-full mb-2'>

                            <div className="item w-full">
                                <span className='text-xl font-semibold text-gray-900 text-left'>{`${languageList[index].sourceLanguage} to ${languageList[index].targetLanguage}`}</span>
                            </div>

                            {translationalSkills[key].map((sample, sampleIndex) => (<div className="item w-full">
                                <div className='flex items-stretch space-x-4 h-auto w-full'>
                                    <div className="item w-full bg-[#E6D2FF] rounded-lg py-2 px-2">
                                        <div className="item mb-2">
                                            <span className='text-base font-medium text-gray-900 text-left'>{sample.AudioFile.name}</span>
                                        </div>
                                        <div className='flex flex-row gap-2 flex-wrap'>
                                            {sample.IndustryExpertises.map((expertise) => (<div className='bg-purple-300 px-2 py-0.5 rounded-full'>
                                                <span className='text-[#4F4F4F] font-medium'>{expertise}</span>
                                            </div>))}
                                            {/* <div className='bg-purple-300 px-2 py-0.5 rounded-full'>
                                                <span className='text-[#4F4F4F] font-medium'>Consumer products</span>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="item w-32">
                                        <div className="flex items-center gap-3">
                                            <span className='border-1 rounded-full py-1 px-1 border-purple-1000'><IoTrashOutline onClick={() => removeSampleHandler(key, sampleIndex)} size={20} className='text-purple-1000' /></span>
                                            <span className='border-1 rounded-full py-1 px-1 border-purple-1000'><RiEdit2Fill size={20} className='text-purple-1000' /></span>
                                        </div>
                                    </div>

                                </div>
                            </div>))}

                        </div>))}
                    </div>
                    <div className="py-4 px-3 mb-2 text-purple-1000 flex flex-col items-center justify-center rounded-xl bg-[#F9F4FF] text-center">
                        {languageList.map((singleLanguage, index) => (
                            <div className='flex items-center mt-2'>
                                <span className='mr-4 lg:text-xl text-lg leading-6 font-semibold text-gray-900'>
                                    {`${singleLanguage.sourceLanguage} to ${singleLanguage.targetLanguage}`}
                                </span>
                                <button
                                    type="button"
                                    className="text-purple-1000 font-semibold flex items-center border-2 border-{#E0E0E0} py-2 lg:px-3 px-1 rounded-lg bg-white"
                                    onClick={(e) => { handleShow(index) }}
                                >
                                    <RiAddCircleFill size={24} />
                                    <span className="lg:pl-3 pl-1.5 text-base">Add translation sample</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    <Form onSubmit={handleSubmit} >
                        <Modal show={showModal} onHide={handleClose} centered scrollable className="rounded-xl" size="lg">
                            <Modal.Header closeButton={true}>
                                <Modal.Title className="font-bold text-4xl">English to Yoruba</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="flex flex-col">
                                <div>
                                    <div>
                                        <div className="ml-2">
                                            <p className="text-2xl font-bold pb-2">Title <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                                            <p className="text-base font-medium pb-2 text-gray-550" >Include your languages, industry expertise, and any other descriptive to get your portfolio samples the most views.</p>
                                        </div>
                                        <Form.Group className='flex flex-wrap'>
                                            <Form.Control as="textarea" value={title} onChange={(e) => { setTitle(e.target.value) }} rows={2} maxLength={150} className='rounded-lg text-base ml-2 border-gray-500 placeholder-gray-400 py-2 px-3 flex-1'
                                                placeholder='A title of the translation...' />
                                        </Form.Group>
                                    </div>
                                    <div className='mt-4'>
                                        <div className="ml-2">
                                            <p className="text-2xl font-bold pb-2">Description <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                                            <p className="text-base font-medium pb-2 text-gray-550" >Share some background and more information on this sample and how you contributed to it.</p>
                                        </div>
                                        <Form.Group className='flex flex-wrap'>
                                            <Form.Control value={description} onChange={(e) => { setDescription(e.target.value) }} as="textarea" rows={5} maxLength={350} className='rounded-lg text-base ml-2 border-gray-500 placeholder-gray-400 py-2 px-3 flex-1'
                                                placeholder='A description of the translation...' />
                                        </Form.Group>
                                    </div>
                                    <div className="mt-4">
                                        <div className="ml-2">
                                            <p className="text-2xl font-bold pb-2">Upload Translation Sample File <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                                            <p className="text-base font-semibold pb-2 text-gray-550" >Limited to one file, must be MP3, and maximum 100 MB. </p>
                                        </div>
                                        <fieldset className="flex flex-wrap">
                                            <input type="file" name="audiosample" onChange={fileChangeHandler} accept=".mp3,audio/*" className='ml-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100' />
                                        </fieldset>
                                    </div>
                                    <div className="mt-4">
                                        <div className="ml-2">
                                            <p className="text-2xl font-bold pb-2">Industry Expertise <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                                            <p className="text-base font-semibold pb-2 text-gray-550">Select up to three industries tags this portfolio sample relates to.</p>
                                        </div>
                                        <fieldset className="flex flex-wrap ml-2">
                                            {industryExpertise.map((expertise, index) => (
                                                <Styledcheckbox onClick={(e) => {
                                                    setSelectedExpertise((prev) => {
                                                        return { ...prev, [expertise]: prev[expertise] ? false : true }
                                                    })
                                                }} active={selectedExpertise[expertise] ? 'active' : ''}>
                                                    <Form.Check type="checkbox" checked={selectedExpertise[expertise]} className='accent-purple-1000 checked:bg-purple-1000 mr-2 caret-purple-700' /> {expertise}
                                                </Styledcheckbox>
                                            ))}
                                        </fieldset>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer className="border-t-0">
                                <Button onClick={handleClose} className="bg-[#e0e0e0] text-[#333333] rounded-lg hover:bg-[#333333] border-none border-0 py-2 ml-2">
                                    <span className="px-1">Cancel</span>
                                </Button>
                                <Button onClick={handleSave}
                                    disabled={!title || !description}
                                    className="text-white bg-purple-1000 hover:bg-purple-600 border-none border-0 py-2">
                                    <span className="px-2">Save</span>
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Form>
                </div>
            </div>
            {/* prev & next button starts */}
            <div className="flow-root">
                <div className="ml-10 mb-5 float-left justify-start">
                    {/* <button
                        role="button"
                        className="text-base font-semibold leading-none text-gray-800 hover:text-white focus:outline-none bg-gray-300 border rounded-lg hover:bg-purple-500 py-3 px-6"
                        onClick={prevStep}
                    > */}
                    <Stepbutton onClick={prevStep} color='#111827' backgroundColor='#cfcfcf' hoverBackgroundColor='#c0bebe' hoverColor='#111827'>
                        Back
                    </Stepbutton>
                    {/* </button> */}
                </div>
                <div className="mr-10 mb-5 float-right justify-end">
                    {/* <button
                        role="button"
                        className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-6"
                        onClick={nextStep}
                    > */}
                    <Stepbutton color='#ffffff' backgroundColor='#A259Ff' hoverBackgroundColor='#B175FF'>
                        Next, your professional brief
                    </Stepbutton>
                    {/* </button> */}
                </div>
            </div>
            {/* prev & next button ends */}
            <Footer />
        </div>
    );
};

export default TransSample;