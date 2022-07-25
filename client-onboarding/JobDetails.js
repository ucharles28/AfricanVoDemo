import React, { useState, useMemo, useEffect } from 'react';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';
import { BsFillFileEarmarkPlusFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { Form, Col } from 'react-bootstrap';
import { get } from '../helpers/ApiRequest'
import Select from 'react-select';
import countryList from 'react-select-country-list';

const JobDetails = ({ nextStep, prevStep, setJobDetails }) => {
    const getCategories = async () => {
        const token = localStorage.getItem('token')
        // debugger
        // if (token === "undefined") {
        //     debugger
        //     const tokenResponse = await get('Auth/GetAppToken', '')
        //     debugger
        //     console.log(tokenResponse)
        //     if (tokenResponse.successful) {
        //         token = tokenResponse.data.token
        //         localStorage.setItem('token', token)
        //     }
        // }
        console.log(token)
        const response = await get('JobCategory', '')
        debugger
        console.log(response)
        if (response.successful) {
            const categories = response.data.map((cat) => {
                return { label: cat.name, value: cat.id }
            })
            console.log(categories)
            setJobCategories(categories)
        }
    }

    useEffect(() => {
        if (jobCategories.length < 1){
            getCategories();
        }
    });

    const ageBrackets = [
        'Kids (1 - 10)',
        'Teen (11 - 17)',
        'Older teen (18 - 20)',
        'Young adult (21 - 40)',
        'Older adult (41 - 90)'
    ]
    const options = useMemo(() => countryList().getData(), []);
    const [showSampleScript, setShowSampleScript] = useState(true)
    const [sampleScript, setSampleScript] = useState('')
    const [sampleFile, setSampleFile] = useState()
    const [information, setInformation] = useState('')
    const [deliveryDate, setDeliveryDate] = useState()
    const [responseDeadline, setResponseDeadline] = useState()
    const [projectDeadline, setProjectDeadline] = useState()
    const [language, setLanguage] = useState('')
    const [tone, setTone] = useState('')
    const [selectedCategory, setSelectedCategory] = useState({})
    const [ageBracket, setAgeBracket] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [isHomeStudio, setIsHomeStudio] = useState(false)
    const [jobCategories, setJobCategories] = useState([])

    const goNext = () => {
        setJobDetails({
            CategoryId: selectedCategory.value,
            sampleScript,
            AdditionalInfo: information,
            responseDeadline,
            projectDeadline,
            city,
            country: country.label,
            ageBracket, 
            isHomeStudio,
            deliveryDate,
            tone,
            UploadedSamepleFile: sampleFile
        })
        nextStep();
    }

    const fileChangeHandler = (event) => {
        setSampleFile(event.target.files[0]);
      };

    const changeCategoryHandler = category => {
        setSelectedCategory(category)
    }

    return (
        <div>
            <NavxSearch />
            <div className="flex items-center pt-32 font-inter">
                <div className="grid grid-cols-2 items-center mb-20">
                    <main className="ml-36">
                        <div className="bg-purple-1000 rounded-lg w-4/5 h-[35.5rem]">
                            <div className="pt-4">
                                <div className="mx-4 bg-white rounded-full h-2 mb-2">
                                    <div className="bg-[#75FFB4] h-2 rounded-full w-3/4">
                                    </div>
                                </div>
                                <div className='flex-row flex'>
                                    <span className="text-xs font-normal text-white px-8">Project Name</span>
                                    <span className="text-xs font-normal text-white px-8">Service</span>
                                    <span className="text-xs font-medium text-[#75FFB4] px-8">Details</span>
                                    <span className="text-xs font-normal text-white px-8">Budgets</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='px-4 pt-32'>
                                    <span className='text-left text-3xl font-semibold leading-7 text-white pr-20'>Next! give details of the project</span>
                                </div>
                            </div>
                        </div>
                    </main>
                    <main className="px-4 lg:px-8 mr-[8rem] -ml-[5rem] overflow-y-scroll scroll-smooth h-[35.5rem] scrollbar-thumb-purple-300 hover:scrollbar-thumb-purple-500 scrollbar-thin">
                        <div className="sm:text-center lg:text-left">
                            <div className="text-sm">
                                <span className="font-semibold text-gray-900 block">Script Sample</span>
                                <span className="font-regular text-[#4F4F4F] block">By providing a smaple of your script, you’ll recieve custom response from the talent. If you fon’t have your script yet, provide a generic exaample to their reads.</span>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                <div className='border-2 px-2 py-2 border-gray-300 rounded-lg flex w-64 hover:border-purple-1000 hover:shadow-md' onClick={() => setShowSampleScript(true)}>
                                    <FiEdit size={50} className='text-purple-1000 mr-2' />
                                    <div className=''>
                                        <span className='text-base leading-6 text-gray-900 font-semibold'>Enter Sample Script</span><br></br>
                                        <span className='text-xs font-medium text-[#4f4f4f]'>Type or copy and past a small sample of your script for talent</span>
                                    </div>
                                </div>
                                <div className='border-2 px-2 py-2 border-purple-1000 rounded-lg flex w-64' onClick={() => setShowSampleScript(false)}>
                                    <BsFillFileEarmarkPlusFill size={50} className='text-purple-1000 mr-2' />
                                    <div className=''>
                                        <span className='text-base leading-6 text-gray-900 font-semibold'>Upload Sample Script</span><br></br>
                                        <span className='text-xs font-medium text-[#4f4f4f]'>Type or copy and past a small sample of your script for talent</span>
                                    </div>

                                </div>
                            </div>
                            {!showSampleScript ? <div className='mt-4'>
                                <p className="text-sm font-semibold">Upload Audio File&nbsp;</p>
                                <p className="text-sm font-regular pb-2 text-[#4f4f4f]">Attach your script or related file (max 30mb).</p>
                                <Form.Group className='flex flex-wrap'>
                                    <fieldset className="flex flex-wrap">
                                        <input type="file" name="audiosample" onChange={fileChangeHandler} accept=".mp3,audio/*" className='ml-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100' />
                                    </fieldset>
                                </Form.Group>
                            </div> :
                                <div className='mt-4'>
                                    <p className="text-sm font-semibold">Script Sample&nbsp;</p>
                                    <p className="text-sm font-regular pb-2 text-[#4f4f4f]">Include a small piece of your script you will like voice actors to read</p>
                                    <Form.Group className='flex flex-wrap'>
                                        <Form.Control as="textarea" rows={5} maxLength={350} className='rounded-lg text-base border-gray-500 placeholder-gray-400 py-2 px-3 flex-1'
                                            placeholder='A description of the Project...'
                                            value={sampleScript}
                                            onChange={(e) => setSampleScript(e.target.value)} />
                                    </Form.Group>
                                </div>}
                            <div className='mt-4'>
                                <div className="items-center flex pb-2">
                                    <p className="text-sm font-semibold">Additional information&nbsp;</p>
                                    <span className="text-[#4f4f4f] text-sm font-regular">&nbsp;(Optional)</span>
                                </div>
                                <Form.Group className='flex flex-wrap'>
                                    <Form.Control as="textarea" rows={5} maxLength={350} className='rounded-lg text-base border-gray-500 placeholder-gray-400 py-2 px-3 flex-1'
                                        placeholder='Additional project information...'
                                        value={information}
                                        onChange={(e) => setInformation(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <label className="text-sm font-semibold leading-none text-gray-800">
                                            Delivery Date
                                        </label>
                                        <Form.Control
                                            className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-1/2 pl-3 mt-1 placeholder:text-sm"
                                            type="date"
                                            name="project-delivery-date"
                                            value={deliveryDate}
                                            onChange={(e) => setDeliveryDate(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className="grid grid-cols-1 gap-3 lg:gap-4 sm:grid-cols-2 mt-4">
                                <Form.Group as={Col} controlId="validationCustom01">
                                    <div>
                                        <label className="text-sm font-semibold leading-none text-gray-800">
                                            Response Deadline
                                        </label>
                                        <Form.Control
                                            className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"
                                            placeholder="Select date.."
                                            type="date"
                                            name="response-deadline"
                                            value={responseDeadline}
                                            onChange={(e) => setResponseDeadline(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <label className="text-sm font-semibold leading-none text-gray-800">
                                            Project Deadline
                                        </label>
                                        <Form.Control
                                            className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-full pl-3 mt-1 placeholder:text-sm"
                                            placeholder="Select date.."
                                            type="date"
                                            name="project-deadline"
                                            value={projectDeadline}
                                            onChange={(e) => setProjectDeadline(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <label className="text-sm font-semibold leading-none text-gray-800">
                                            Language
                                        </label>
                                        <Form.Control
                                            className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-1/2 pl-3 mt-1 placeholder:text-sm"
                                            placeholder="Add project language"
                                            type="text"
                                            name="project-language"
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <div className="items-center flex">
                                            <p className="text-sm font-semibold">Tone&nbsp;</p>
                                            <span className="text-[#4f4f4f] text-sm font-regular">&nbsp;(Optional)</span>
                                        </div>
                                        <Form.Control
                                            className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 w-1/2 pl-3 mt-1 placeholder:text-sm"
                                            placeholder="Add project tone"
                                            type="text"
                                            name="project-tone"
                                            value={tone}
                                            onChange={(e) => setTone(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <div className="items-center flex">
                                            <p className="text-sm font-semibold">Country&nbsp;</p>
                                            <span className="text-[#4f4f4f] text-sm font-regular">&nbsp;(Optional)</span>
                                        </div>
                                        <Select
                                            name="country"
                                            placeholder="Country"
                                            className="mt-1 border-gray-300"
                                            value={country}
                                            options={options}
                                            required
                                            onChange={(e) => setCountry(e)}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <div className="items-center flex">
                                            <p className="text-sm font-semibold">City&nbsp;</p>
                                            <span className="text-[#4f4f4f] text-sm font-regular">&nbsp;(Optional)</span>
                                        </div>
                                        <Form.Control
                                            className="mt-1 border-gray-300"
                                            placeholder="Add project city"
                                            type="text"
                                            name="project-city"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <div className="items-center flex">
                                            <p className="text-sm font-semibold">Category&nbsp;</p>
                                            <span className="text-[#4f4f4f] text-sm font-regular">&nbsp;(Optional)</span>
                                        </div>

                                        <Select
                                            name="category"
                                            placeholder="Add job category"
                                            className="mt-1 border-gray-300"
                                            value={selectedCategory}
                                            options={jobCategories}
                                            required
                                            onChange={changeCategoryHandler}
                                        />
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <div className="items-center flex">
                                            <p className="text-sm font-semibold">Age Bracket&nbsp;</p>
                                            <span className="text-[#4f4f4f] text-sm font-regular">&nbsp;(Optional)</span>
                                        </div>
                                        <div className='w-full mt-1'>
                                            {ageBrackets.map((age) => (<div className='inline-flex items-center mr-4'><input checked={age === ageBracket} onChange={() => setAgeBracket(age)} type="radio" value="kids (1 - 10)" name="age-tick" className="mr-1 w-4 h-4" />{age}</div>))}
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                            <div className='mt-4'>
                                <Form.Group as={Col} controlId="validationCustom02">
                                    <div>
                                        <div className="items-center flex">
                                            <p className="text-sm font-semibold">Home Studio&nbsp;</p>
                                            <span className="text-[#4f4f4f] text-sm font-regular">&nbsp;(Optional)</span>
                                        </div>
                                        <div className='w-full mt-1'>
                                            <div className='inline-flex items-center mr-4'><input type="radio" value="yes" name="homestudio" checked={isHomeStudio} className="mr-1 w-4 h-4" onChange={() => setIsHomeStudio(true)} />Yes</div>
                                            <div className='inline-flex items-center mr-4'><input type="radio" value="no" checked={!isHomeStudio} onChange={() =>
                                                setIsHomeStudio(false)} name="homestudio" className="mr-1 w-4 h-4" />No</div>
                                        </div>
                                    </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="flow-root">
                            <div className="mr-10 float-right justify-end">
                                <button
                                    role="button"
                                    className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-3"
                                    onClick={goNext}
                                >
                                    Next
                                </button>
                            </div>
                            <div className="mr-10 mb-10 float-right justify-end">
                                <button
                                    role="button"
                                    className="text-base font-semibold leading-none text-gray-900 focus:outline-none bg-[#E0E0E0] border rounded-lg hover:bg-gray-400 py-3 px-3"
                                    onClick={prevStep}
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default JobDetails;