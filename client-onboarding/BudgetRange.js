import React from 'react';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';
import { BsFillFileEarmarkPlusFill, BsFillTagsFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { Form, Col } from 'react-bootstrap';
import { FaBalanceScaleRight } from 'react-icons/fa';
import Styledcheckbox from '../components/styles/StyledCheckbox';
import BudgetButton from '../components/styles/BudgetButton';

const BudgetRange = ({ nextStep, prevStep }) => {
    return (
        <div>
            <NavxSearch />
            <div className="flex items-center pt-32 font-inter">
                <div className="grid grid-cols-2 items-center mb-20">
                    <main className="ml-36">
                        <div className="bg-purple-1000 rounded-lg w-4/5 h-[35.5rem]">
                            <div className="pt-4">
                                <div className="mx-4 bg-white rounded-full h-2 mb-2">
                                    <div className="bg-[#75FFB4] h-2 rounded-full w-full">
                                    </div>
                                </div>
                                <div className='flex-row flex'>
                                    <span className="text-xs font-normal text-white px-8">Project Name</span>
                                    <span className="text-xs font-normal text-white px-8">Service</span>
                                    <span className="text-xs font-normal text-white px-8">Details</span>
                                    <span className="text-xs font-medium text-[#75ff84] px-8">Budgets</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='px-4 pt-32'>
                                    <span className='text-left text-3xl font-semibold leading-7 text-white pr-20'>Almost done! Tell us about your budget.</span>
                                </div>
                            </div>
                        </div>
                    </main>
                    <main className="px-4 lg:px-8 mr-[8rem] -ml-[5rem] h-[35.5rem]">
                        <div className="sm:text-center lg:text-left">
                            <div className="text-sm">
                                <span className="font-semibold text-gray-900 block">What type of budget do you have?</span>
                                <span className="font-regular text-[#4F4F4F] block">This will help us match you to talent within your range.</span>
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                {/* <div className='border-2 px-2 py-4 border-purple-1000 rounded-lg w-44 flex flex-col justify-between'> */}
                                <BudgetButton active>
                                    <FaBalanceScaleRight size={24} className='text-purple-1000 mr-2 m-auto'/>
                                    <div className='m-auto mt-2'>
                                        <span className='text-base leading-6 text-gray-900 font-semibold'>Budget Range</span>
                                    </div> 
                                </BudgetButton>   
                                {/* </div> */}
                                <BudgetButton>
                                {/* <div className='border-2 px-2 py-4 border-gray-300 hover:shadow-md hover:border-purple-1000 rounded-lg w-44 flex flex-col justify-between'> */}
                                    <BsFillTagsFill size={24} className='flip text-purple-1000 mr-2 m-auto'/>
                                    <div className='m-auto mt-2'>
                                        <span className='text-base text-center leading-6 text-gray-900 font-semibold'>Fixed Price</span>
                                    </div>
                                {/* </div> */}
                                </BudgetButton>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className="text-sm font-semibold">What’s your budget range?&nbsp;</p>
                            {/* <p className="text-sm font-regular pb-2 text-[#4f4f4f]">Attach your script or related file (max 30mb).</p> */}
                            <fieldset className="flex flex-wrap text-base">
                                <Styledcheckbox>
                                    <input type="radio" value="100-249" name="skill" className="mr-2 w-4 h-4" label="Animation" />$100 - $249
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="250-499" name="skill" className="mr-2 w-4 h-4" />$250 - $499
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="500-749" name="skill" className="mr-2 w-4 h-4" />$500 - $749
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="750-999" name="skill" className="mr-2 w-4 h-4" />$750 - $999
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="1000-1249" name="skill" className="mr-2 w-4 h-4" />$1,000 - $1,249
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="1250-1499" name="skill" className="mr-2 w-4 h-4" />$1,250 - $1,499
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="1500-1749" name="skill" className="mr-2 w-4 h-4" />$1,500 - $1,749
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="1750-1999" name="skill" className="mr-2 w-4 h-4" />$1,750 - $1,999
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="2000-2499" name="skill" className="mr-2 w-4 h-4" />$2,000 - $2,499
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="2500-4999" name="skill" className="mr-2 w-4 h-4" />$2,500 - $4,999
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="5000-7499" name="skill" className="mr-2 w-4 h-4" />$5,000 - $7,499
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="7500-9999" name="skill" className="mr-2 w-4 h-4" />$7,500 - $9,999
                                </Styledcheckbox>
                                <Styledcheckbox>
                                    <input type="radio" value="10000+" name="skill" className="mr-2 w-4 h-4" />$10,000+
                                </Styledcheckbox>
                            </fieldset>
                        </div>
                        <div className="flow-root mt-24">
                            <div className="mr-10 float-right justify-end">
                                <button 
                                    role="button" 
                                    className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-3"
                                    onClick={nextStep}
                                >
                                    Submit &amp; Post Project
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

export default BudgetRange;