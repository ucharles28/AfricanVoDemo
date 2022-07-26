import React, { useState } from 'react';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';
import { Form } from 'react-bootstrap'

const JobTitle = ({ nextStep, projectName, setProjectName }) => {
    return (
        <div>
            <NavxSearch />
            {/* <div className="grid grid-cols-2 pt-32 mb-10 font-inter"> */}
            <div className="flex items-center pt-32 font-inter">
                <div className="grid grid-cols-2 items-center">
                    <main className="ml-32 items-center flex justify-center">
                        <div className="bg-purple-1000 rounded-lg w-4/5 2xl:w-3/4 h-[32rem]">
                            <div className="pt-4">
                                <div className="mx-4 bg-white rounded-full h-2 mb-2 w-auto">
                                    <div className="bg-[#75FFB4] h-2 rounded-full w-1/4">
                                    </div>
                                </div>
                                <div className='flex-row flex'>
                                    <span className="text-xs font-medium text-[#75FFB4] px-8 2xl:pr-8">Project Name</span>
                                    <span className="text-xs font-normal text-white px-8 2xl:px-10">Service</span>
                                    <span className="text-xs font-normal text-white px-8 2xl:px-10">Details</span>
                                    <span className="text-xs font-normal text-white px-8 2xl:pl-10">Budgets</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='px-4 pt-32'>
                                    <span className='text-left text-3xl font-semibold leading-7 text-white'>Let's start with a strong project name.</span>
                                    <p className='text-white text-sm font-medium leading-5 pt-3'>This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!.</p>
                                </div>
                            </div>
                        </div>
                    </main>
                    <main className="mr-[8rem] 2xl:-ml-[12rem] xl:-ml-[4rem] -ml-[8rem]">
                        <div className="flex items-center justify-center">
                            <Form>
                                <div className='w-full'>
                                    <label className="text-sm font-semibold leading-none text-gray-800">
                                        Write a Project Name for your job post
                                    </label>
                                    <input
                                        className=" bg-white border-2 rounded-lg border-gray-300 text-base text-black py-2 px-2 mt-1 w-3/4"
                                        type="text"
                                        name="title"
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                    />
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
                        disabled={!projectName}
                        className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-3 disabled:opacity-70"
                        onClick={nextStep}
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default JobTitle;