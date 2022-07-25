import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';

function TalentSearch () {

    const [showsearch, setShowSearch] = useState(false)
    const [showgenre, setShowGenre] = useState(false)
    const [showgender, setShowGender] = useState(false)
    const [showvoicerange, setVoiceRange] = useState(false)
    const [showlanguage, setLanguage] = useState(false)
    const [showtone, setTone] = useState(false)
    const [showlocation, setLocation] = useState(false)

    return (
        <div>
            <NavxSearch />
            <div className="flex flex-col bg-purple-50 items-center justify-center font-inter">
                <div className="w-full py-6 flex justify-center align-top flex-col items-center mt-24">
                    <div className="w-10/12 mb-12">
                        <div className="flex flex-col justify-center items-stretch space-y-4 h-auto w-full">
                            <span className='text-4xl font-bold text-gray-900'>
                                Search result for ' ' 
                            </span>

                            <div className="item bg-white rounded-xl py-3 px-3 h-[64.25rem]">
                                <div className='flex items-stretch space-x-4 w-full'>

                                    <div className="item w-80 scrollbar-thumb-purple-300 scrollbar-thin overflow-y-scroll h-[54.9rem] border-r-2 pr-3">
                                        <span className='text-gray-900 text-left text-xl font-semibold leading-6'>
                                            Refine results
                                        </span>
                                        <div className="flex flex-col items-stretch space-y-2 w-full mt-3">

                                            <div className='cursor-pointer border-b'>
                                                <div className="px-2 py-2 item my-2 hover:bg-gray-100 rounded-lg">
                                                    <div className='flex justify-between items-center w-ful'  onClick={() => setShowSearch(!showsearch)}>
                                                        <p className='text-base font-medium leading-6 text-gray-900'>Service</p>
                                                        <button className="" onClick={() => setShowSearch(!showsearch)}>
                                                        <RiArrowDownSLine size={24} className={"transform " + (showsearch ? "rotate-180" : "rotate-0")}/>
                                                        </button>
                                                    </div>
                                                    <div className={"mt-2 px-2 pb-3 w-full " + (showsearch ? "block" : "hidden")}>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="all-service" name="filter-service" className="mr-2 w-4 h-4 " /> All Services
                                                        </div>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="voice-over" name="filter-service" className="mr-2 w-4 h-4 " /> Voice Over
                                                        </div>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="translator" name="filter-service" className="mr-2 w-4 h-4 " /> Translator
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className='cursor-pointer border-b'>
                                                <div className="px-2 py-2 item my-2 hover:bg-gray-100 rounded-lg">
                                                    <div className='flex justify-between items-center w-ful'  onClick={() => setShowGenre(!showgenre)}>
                                                        <p className='text-base font-medium leading-6 text-gray-900'>Genre</p>
                                                        <button className="" onClick={() => setShowGenre(!showgenre)}>
                                                        <RiArrowDownSLine size={24} className={"transform " + (showgenre ? "rotate-180" : "rotate-0")}/>
                                                        </button>
                                                    </div>
                                                    <div className={"mt-2 px-2 w-full " + (showgenre ? "block" : "hidden")}>
                                                        <p className='text-[#828282]'>Hello</p>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className='cursor-pointer border-b'>
                                                <div className="px-2 py-2 item my-2 hover:bg-gray-100 rounded-lg">
                                                    <div className='flex justify-between items-center w-ful'  onClick={() => setShowGender(!showgender)}>
                                                        <p className='text-base font-medium leading-6 text-gray-900'>Gender</p>
                                                        <button className="" onClick={() => setShowGender(!showgender)}>
                                                        <RiArrowDownSLine size={24} className={"transform " + (showgender ? "rotate-180" : "rotate-0")}/>
                                                        </button>
                                                    </div>
                                                    <div className={"mt-2 px-2 pb-3 w-full " + (showgender ? "block" : "hidden")}>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="male" name="filter-gender" className="mr-2 w-4 h-4 " /> Male
                                                        </div>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="female" name="filter-gender" className="mr-2 w-4 h-4 " /> Female
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className='cursor-pointer border-b'>
                                                <div className="px-2 py-2 item my-2 hover:bg-gray-100 rounded-lg">
                                                    <div className='flex justify-between items-center w-ful'  onClick={() => setVoiceRange(!showvoicerange)}>
                                                        <p className='text-base font-medium leading-6 text-gray-900'>Voice range</p>
                                                        <button className="" onClick={() => setVoiceRange(!showvoicerange)}>
                                                        <RiArrowDownSLine size={24} className={"transform " + (showvoicerange ? "rotate-180" : "rotate-0")}/>
                                                        </button>
                                                    </div>
                                                    <div className={"mt-2 px-2 w-full " + (showvoicerange ? "block" : "hidden")}>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="kids" name="filter-vo" className="mr-2 w-4 h-4 " /> Kids
                                                        </div>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="teens" name="filter-vo" className="mr-2 w-4 h-4 " /> Teens
                                                        </div>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="older-teens" name="filter-vo" className="mr-2 w-4 h-4 " /> Older teens
                                                        </div>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="young-adults" name="filter-vo" className="mr-2 w-4 h-4 " /> Young adult
                                                        </div>
                                                        <div className='flex items-center text-sm leading-6 font-normal text-[#828282]'>
                                                            <input type="checkbox" value="older-adults" name="filter-vo" className="mr-2 w-4 h-4 " /> Older adults
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className='cursor-pointer border-b'>
                                                <div className="px-2 py-2 item my-2 hover:bg-gray-100 rounded-lg">
                                                    <div className='flex justify-between items-center w-ful'  onClick={() => setLanguage(!showlanguage)}>
                                                        <p className='text-base font-medium leading-6 text-gray-900'>Language</p>
                                                        <button className="" onClick={() => setLanguage(!showlanguage)}>
                                                        <RiArrowDownSLine size={24} className={"transform " + (showlanguage ? "rotate-180" : "rotate-0")}/>
                                                        </button>
                                                    </div>
                                                    <div className={"mt-2 px-2 w-full " + (showlanguage ? "block" : "hidden")}>
                                                        <p className='text-[#828282]'>Hello</p>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className='cursor-pointer border-b'>
                                                <div className="px-2 py-2 item my-2 hover:bg-gray-100 rounded-lg">
                                                    <div className='flex justify-between items-center w-ful'  onClick={() => setTone(!showtone)}>
                                                        <p className='text-base font-medium leading-6 text-gray-900'>Tone</p>
                                                        <button className="" onClick={() => setTone(!showtone)}>
                                                        <RiArrowDownSLine size={24} className={"transform " + (showtone ? "rotate-180" : "rotate-0")}/>
                                                        </button>
                                                    </div>
                                                    <div className={"mt-2 px-2 w-full " + (showtone ? "block" : "hidden")}>
                                                        <p className='text-[#828282]'>Hello</p>
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className='cursor-pointer border-b'>
                                                <div className="px-2 py-2 item my-2 hover:bg-gray-100 rounded-lg">
                                                    <div className='flex justify-between items-center w-ful'  onClick={() => setLocation(!showlocation)}>
                                                        <p className='text-base font-medium leading-6 text-gray-900'>Location</p>
                                                        <button className="" onClick={() => setLocation(!showlocation)}>
                                                        <RiArrowDownSLine size={24} className={"transform " + (showlocation ? "rotate-180" : "rotate-0")}/>
                                                        </button>
                                                    </div>
                                                    <div className={"mt-2 px-2 w-full " + (showlocation ? "block" : "hidden")}>
                                                        <p className='text-[#828282]'>Hello</p>
                                                    </div> 
                                                </div>
                                            </div>

                                            <button className="item w-full py-3 px-2 text-center mt-4 text-base font-semibold hover:bg-purple-500 bg-purple-1000 text-white rounded-lg">Clear All</button>
                                        </div>
                                    </div>

	                                <div className="item w-full">
                                        <div class="flex flex-col items-stretch space-y-2 h-auto w-full">
                                            <div class="item w-full h-full">Talent #1</div>
                                            <div class="item w-full h-full">Talent #2</div>
                                            <div class="item w-full h-full">Talent #3</div>
                                            <div class="item w-full h-full">Talent #4</div>
                                            <div class="item w-full h-full">Talent #5</div>
                                            <div class="item w-full text-center">Pagination</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TalentSearch;