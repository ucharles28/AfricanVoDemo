import React, { useState } from 'react';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';
import { BsFillFileEarmarkPlusFill, BsFillTagsFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { Form, Col } from 'react-bootstrap';
import { FaBalanceScaleRight } from 'react-icons/fa';
import Styledcheckbox from '../components/styles/StyledCheckbox';
import { get, postData } from '../helpers/ApiRequest';
import { Bars } from 'react-loader-spinner';
import BudgetButton from '../components/styles/BudgetButton';

const BudgetRange = ({ nextStep, prevStep, jobDetails, projectName, talentType }) => {
    const [budgetRange, setBudgetRange] = useState('')
    const [fixedPrice, setFixedPrice] = useState('')
    const [isFixedPrice, setIsFixedPrice] = useState(false)
    const [isLoading, setLoading] = useState(false);
    const budgetRanges = [
        "$100 - $249",
        "$250 - $499",
        "$500 - $749",
        "$750 - $999",
        "$1,000 - $1,249",
        "$$1,250 - $1,499",
        "$1,500 - $1,749",
        "$1,750 - $1,999",
        "$2,000 - $2,499",
        "$2,500 - $4,999",
        "$5,000 - $7,499",
        "$10,000+",
    ]

    const submitJob = async () => {
        setLoading(true)
        const user = JSON.parse(localStorage.getItem('user'))
        console.log(user)
        let token = localStorage.getItem('token')
        // let response = await get(`Auth/RenewToken/${token}`, '')
        // token = response.data.token
        const formData = new FormData()
        Object.keys(jobDetails).map((key, index) => {
            if (index === Object.keys(jobDetails).length - 1) {//last index
                //Assign form file
                if (jobDetails[key]) {
                    formData.append(key, jobDetails[key], jobDetails[key].name)
                }
            } else {
                formData.append(key, jobDetails[key])
            }
        })
        formData.append('IsFixedPrice', isFixedPrice)
        formData.append('FixedPrice', fixedPrice)
        formData.append('BudgetRange', budgetRange)
        formData.append('Name', projectName)
        formData.append('TalentType', talentType)
        formData.append('UserId', user.id)
        // const request = {
        //     ...jobDetails,
        //     isFixedPrice,
        //     fixedPrice,
        //     budgetRange,
        //     name: projectName,
        //     talentType
        // }
        // console.log(request)
        const response = await postData('Job', formData, token)
        console.log(response)
        setLoading(false)
        nextStep();
    }

    return (
        <div>
            <NavxSearch />
            <div className="flex items-center pt-32 font-inter">
                <div className="grid grid-cols-2 items-center mb-20">
                    <main className="ml-36">
                        <div className="bg-purple-1000 rounded-lg w-4/5 h-[32rem]">
                            <div className="pt-4">
                                <div className="mx-4 bg-white rounded-full h-2 mb-2">
                                    <div className="bg-[#75FFB4] h-2 rounded-full w-full">
                                    </div>
                                </div>
                                <div className='flex-row flex'>
                                    <span className="text-xs font-normal text-white px-8">Project Name</span>
                                    <span className="text-xs font-normal text-white px-8">Service</span>
                                    <span className="text-xs font-normal text-white px-8">Details</span>
                                    <span className="text-xs font-medium text-[#75ff84] px-6">Budgets</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center'>
                                <div className='px-4 pt-32'>
                                    <span className='text-left text-3xl font-semibold leading-7 text-white pr-20'>Almost done! Tell us about your budget.</span>
                                </div>
                            </div>
                        </div>
                    </main>
                    <main className="px-4 lg:px-8 mr-[8rem] -ml-[5rem] h-[32rem]">
                        <div className="sm:text-center lg:text-left">
                            <div className="text-sm">
                                <span className="font-semibold text-gray-900 block">What type of budget do you have?</span>
                                <span className="font-regular text-[#4F4F4F] block">This will help us match you to talent within your range.</span>
                            </div>
                            <div className='flex items-center gap-4 mt-3'>
                                <BudgetButton active={!isFixedPrice} onClick={() => setIsFixedPrice(false)}>
                                    <FaBalanceScaleRight size={24} className='text-purple-1000 mr-2 m-auto'/>
                                    <div className='m-auto mt-2'>
                                        <span className='text-base leading-6 text-gray-900 font-semibold'>Budget Range</span>
                                    </div> 
                                </BudgetButton>   
                                {/* </div> */}
                                <BudgetButton active={isFixedPrice} onClick={() => setIsFixedPrice(true)}>
                                    <BsFillTagsFill size={24} className='flip text-purple-1000 mr-2 m-auto'/>
                                    <div className='m-auto mt-2'>
                                        <span className='text-base text-center leading-6 text-gray-900 font-semibold'>Fixed Price</span>
                                    </div>
                                </BudgetButton>
                            </div>
                        </div>
                        {!isFixedPrice ? <div className='mt-4'>
                            <p className="text-sm font-semibold">What’s your budget range?&nbsp;</p>
                            <fieldset className="flex flex-wrap text-base">
                                {budgetRanges.map((range) => (<Styledcheckbox onClick={() => setBudgetRange(range)} active={range === budgetRange ? 'active' : ''}>
                                    <input type="radio" value="100-249" checked={range === budgetRange} name="range" className="mr-2 w-4 h-4" label="Animation" />{range}
                                </Styledcheckbox>))}
                            </fieldset>
                        </div> : <div className='mt-4'>
                            <Form.Group as={Col} controlId="validationCustom02">
                                <div>
                                    <label className="text-sm font-semibold leading-none text-gray-800">
                                        What’s your fixed range?
                                    </label>
                                    <div className='relative'>
                                        <div className="absolute inset-y-0 left-0 pl-3 pr-2 flex items-center pointer-events-none">
                                            <span className="text-gray-900 font-bold text-lg">
                                                $
                                            </span>
                                        </div>
                                        <Form.Control
                                            className="bg-white border-1 rounded-lg border-gray-300 text-base text-black py-2 w-1/2 pl-8 mt-1 placeholder:text-sm"
                                            type="number"
                                            placeholder='0.00 USD'
                                            name="project-fixed-price"
                                            value={fixedPrice}
                                            onChange={(e) => setFixedPrice(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>}
                        <div className="flow-root mt-24">
                            <div className="mr-10 float-right justify-end">
                                <button
                                    role="button"
                                    className="text-base font-semibold leading-none text-white focus:outline-none bg-purple-1000 border rounded-lg hover:bg-purple-500 py-3 px-3 disabled:opacity-70"
                                    onClick={submitJob}
                                >
                                    <div className='flex items-center justify-center'>
                                        {isLoading && <Bars height={22} width={22} color='#ffffff' className='' />}
                                        <span className='pl-2'>Submit &amp; Post Project</span>
                                    </div>
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