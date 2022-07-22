import React from 'react';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';
import { Form } from 'react-bootstrap'
import { BsFillMicFill, BsTranslate } from 'react-icons/bs';

const SelectService = ({ nextStep, prevStep }) => {

    return (
        <div>
            <NavxSearch />
            {/* <div className="grid grid-cols-2 pt-32 mb-10 font-inter"> */}
            <div className="flex items-center pt-32 font-inter">
                <div className="grid grid-cols-2 items-center">
                    <main className="ml-36">
                        <div className="bg-purple-1000 rounded-lg w-4/5 h-[35.5rem]">
                            <div className="pt-4">
                                <div className="mx-4 bg-white rounded-full h-2 mb-2">
                                    <div className="bg-[#75FFB4] h-2 rounded-full w-2/4">
                                    </div>
                                </div>
                                <div className='flex-row flex'>
                                    <span className="text-xs font-normal text-white px-8">Project Name</span>
                                    <span className="text-xs font-medium text-[#75FFB4] px-8">Service</span>
                                    <span className="text-xs font-normal text-white px-8">Details</span>
                                    <span className="text-xs font-normal text-white px-8">Budgets</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='px-4 pt-32'>
                                    <span className='text-left text-3xl font-semibold leading-7 text-white'>Great! What service does your work require?</span>
                                    {/* <p className='text-white text-sm font-medium leading-5 pt-3'>This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!.</p> */}
                                </div>
                            </div>
                        </div>
                    </main>
                    <main className="mr-[8rem] -ml-[10rem]">
                        <div className="flex items-center justify-center">
                            <Form>
                                <div className='w-full'>
                                    <div className=''>
                                        <span className="text-sm text-left font-semibold leading-none text-gray-800">
                                            Service
                                        </span>
                                        <p>Choose the service you will like to hire a talent for</p>
                                    </div>
                                    <div className='flex items-center gap-4 mt-1'>
                                        <div className='border-2 px-2 py-2 border-purple-1000 rounded-lg flex w-64'>
                                            <BsFillMicFill size={50} className='text-purple-1000 mr-2'/>
                                            <div className=''>
                                                <span className='text-base leading-6 text-gray-900 font-semibold'>Voice Over</span><br></br>
                                                <span className='text-xs font-medium text-gray-900'>Find a voice for documentary, narration, movie trailers, audio books, and more.</span>
                                            </div>
                                            
                                        </div>
                                        <div className='border-2 px-2 py-2 border-gray-300 rounded-lg flex w-64 hover:border-purple-1000 hover:shadow-md'>
                                            <BsTranslate size={50} className='text-purple-1000 mr-2'/>
                                            <div className=''>
                                                <span className='text-base leading-6 text-gray-900 font-semibold'>Translation</span><br></br>
                                                <span className='text-xs font-medium text-gray-900'>Find a translator for professional conversation, technical document and more.</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </main>
                </div>
            </div>
            <div className="flow-root">
                <div className="mr-10 mb-10 float-right justify-end">
                    <button 
                        role="button" 
                        className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-3"
                        onClick={nextStep}
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
            <Footer />
        </div>
    );
}

export default SelectService;