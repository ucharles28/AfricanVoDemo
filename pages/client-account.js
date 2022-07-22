import React, { useState } from 'react';
import Footer from '../components/footer';
import NavxSearch from '../components/navxsearch';
import { RiArrowDownSLine, RiAddCircleFill } from 'react-icons/ri';
import { Form } from 'react-bootstrap';

function ClientAccount() {

    // to open accordion
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')

    const handleImageChange = (e) => {
        const image = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
          setProfileImageSrc(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    // add photo button
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };

  return (
    <div>
      <NavxSearch />
      <div className="flex flex-col bg-purple-50 items-center justify-center font-inter">
        <div className="w-full py-6 flex justify-center align-top flex-col items-center mt-24">
          <div className="w-4/5 mb-12">
            <div className="flex flex-col justify-center items-stretch space-y-4 h-auto w-full">
                <span className='text-4xl font-bold text-gray-900'>
                    Account Settings
                </span>

                <div className="item bg-white text-gray-900 rounded-xl py-4">
                    <div className="flex items-center justify-center flex-row text-gray-900 px-3 pb-2">
                        <div className="lg:w-8/12 w-full mx-auto h-96 overflow-y-scroll scrollbar-thumb-purple-300 scrollbar-thin">

                            <div className="w-full px-6">
                                    <div className="flex justify-between items-center w-full hover:rounded-lg hover:bg-purple-50 focus:bg-purple-300 pt-4 pb-2 border-b-2 px-4" onClick={() => setOpen(!open)}>
                                        <div className="">
                                            <p className="flex justify-center items-center font-medium text-lg leading-6 md:leading-4 text-gray-800">
                                               Business Profile
                                            </p>
                                        </div>
                                        <button className="" onClick={() => setOpen(!open)}>
                                            <RiArrowDownSLine size={24} className={"transform " + (open ? "rotate-180" : "rotate-0")}/>
                                        </button>
                                    </div>
                                    <div className={"mt-2 px-4 w-full " + (open ? "block" : "hidden")}>
                                            <form>
                                                <div className="pt-2 space-y-6">
                                                    <div><span htmlFor="about" className="block text-base font-semibold text-gray-900">About Me</span><p className="text-sm text-[#4f4f4f]">This information is displayed publicly.</p></div>

                                                    <div>
                                                        <div className="flex items-stretch space-x-4 w-full">
                                                            <div className="item w-32">
                                                                <span className='rounded-full flex'>
                                                                    <img src={profileImageSrc} className='h-24 w-24 rounded-full object-cover' />
                                                                </span>
                                                            </div>
                                                            <div className="item w-full">
                                                                <div className='flex'>
                                                                    <span className='font-inter text-base font-medium leading-6 text-[#828282]'>Upload a professional headshot or your company logo. Completing the profile and adding a picture helps establish trust for your interactions on Voices.</span>
                                                                </div>
                                                                <button
                                                                    type="button"
                                                                    className="text-purple-1000 hover:text-white font-semibold flex items-center border-1 border-gray-150 py-2.5 px-3 rounded-lg hover:bg-purple-600 mt-2" 
                                                                    onClick={handleClick}
                                                                    >
                                                                    <RiAddCircleFill size={24}/>
                                                                    <span className="pl-2 text-base">Add Photo</span>
                                                                    <input type="file" name="avatar" className='file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100' onChange={handleImageChange} ref={hiddenFileInput} style={{display: 'none'}}/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className='flex-col flex mt-4'>
                                                            <label className="text-sm font-semibold leading-none text-gray-800">
                                                                Company Name
                                                            </label>
                                                            <input
                                                                className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2"
                                                                type="text"
                                                                name="company name"
                                                            />
                                                        </div>
                                                        <div className='flex-col flex mt-4'>
                                                            <div className=''>
                                                                <label className="text-sm font-semibold leading-none text-gray-800">
                                                                    Overview
                                                                </label>
                                                                <p className='text-sm text-[#4f4f4f] text-normal'>Share a bit about your company.
                                                                </p>
                                                            </div>
                                                            <textarea
                                                                className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-full scrollbar-thumb-purple-300 scrollbar-thin"
                                                                type="text"
                                                                maxlength= "600"
                                                                rows="5" 
                                                                cols="40"
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="py-3 text-right mt-4">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 mr-4"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-purple-1000 hover:bg-purple-600 "
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                    </div>
                            </div>

                            <div className="w-full px-6 ">
                                <div className="cursor-pointer flex justify-between items-center w-full hover:rounded-lg hover:bg-purple-50 pt-4 pb-2 px-4 border-b-2" onClick={() => setOpen2(!open2)}>
                                    <div className="">
                                        <p className="flex justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-gray-800">
                                            General Settings
                                        </p>
                                    </div>
                                    <button className="" onClick={() => setOpen2(!open2)}>
                                        <RiArrowDownSLine size={24} className={"transform " + (open2 ? "rotate-180" : "rotate-0")}/>
                                    </button>
                                </div>
                                <div className={"mt-2 px-4 w-full " + (open2 ? "block" : "hidden")}>
                                    <form>
                                        <div className="pt-2 space-y-6">
                                                <div className='flex-col flex mt-4'>
                                                    <div className="items-center flex">
                                                        <p className="text-sm font-semibold leading-none text-gray-800">Email Address&nbsp;</p> 
                                                        <span className="text-gray-400 text-sm font-regular">(Required)</span>
                                                    </div>
                                                    <input
                                                        className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2"
                                                        type="email"
                                                        name="company email" required
                                                    />
                                                </div>
                                                <div className='flex-col flex mt-4'>
                                                    <label className="text-sm font-semibold leading-none text-gray-800">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2"
                                                        type="tel"
                                                        name="company phone number"
                                                    />
                                                </div>
                                                <div className='flex-col flex mt-4'>
                                                    <label className="text-sm font-semibold leading-none text-gray-800">
                                                        Website
                                                    </label>
                                                    <input
                                                        className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2"
                                                        type="url"
                                                        name="company website"
                                                    />
                                                </div>
                                        </div>

                                        <div className="py-3 text-right mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 mr-4"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-purple-1000 hover:bg-purple-600 "
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="w-full px-6 ">
                                <div className="cursor-pointer flex justify-between items-center w-full hover:rounded-lg hover:bg-purple-50 pt-4 pb-2 px-4 border-b-2" onClick={() => setOpen3(!open3)}>
                                        <div className="">
                                            <p className="flex justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-gray-800">
                                                Notification
                                            </p>
                                        </div>
                                        <button className="" onClick={() => setOpen3(!open3)}>
                                            <RiArrowDownSLine size={24} className={"transform " + (open3 ? "rotate-180" : "rotate-0")}/>
                                        </button>
                                </div>
                                <div className={"mt-2 px-4 w-full " + (open3 ? "block" : "hidden")}>
                                    <form>
                                        <fieldset>
                                            <div className="text-lg font-semibold text-gray-900">
                                                    Email Notification
                                            </div>
                                            <div className="mt-2 space-y-4">
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                name="comments"
                                                                type="checkbox"
                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                                Yes, please keep me updated about Voices news, events, and offers.
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <div className="flex items-center h-5">
                                                            <input
                                                                name="candidates"
                                                                type="checkbox"
                                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                            />
                                                        </div>
                                                        <div className="ml-3 text-sm">
                                                            <label htmlFor="candidates" className="font-medium text-gray-700">
                                                                Yes, send me notifications related to jobs I post
                                                            </label>
                                                            <p className="text-[#828282]">Disabling notifications will prevent you from receiving emails related to your job postings. This includes talent messages and file delivery. However, you will continue to receive emails related to unpaid or overdue invoices. We strongly recommend against disabling this feature.</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </fieldset>
                                        <div className="py-3 text-right mt-4">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 mr-4"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-purple-1000 hover:bg-purple-600 "
                                                    >
                                                        Save Changes
                                                    </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="w-full px-6 ">
                                <div className="cursor-pointer flex justify-between items-center w-full hover:rounded-lg hover:bg-purple-50 focus:bg-purple-400 pt-4 pb-2 px-4 border-b-2" onClick={() => setOpen4(!open4)}>
                                    <div className="">
                                        <p className="flex justify-center items-center font-medium text-lg leading-6 lg:leading-4 text-gray-800">
                                            Change Password
                                        </p>
                                    </div>
                                    <button className="" onClick={() => setOpen4(!open4)}>
                                        <RiArrowDownSLine size={24} className={"transform " + (open4 ? "rotate-180" : "rotate-0")}/>
                                    </button>
                                </div>
                                <div className={"mt-2 px-4 w-full " + (open4 ? "block" : "hidden")}>
                                    <form>
                                        <div className="pt-2 space-y-6">
                                            <div className='flex-col flex mt-4'>
                                                <div className="items-center flex">
                                                    <p className="text-sm font-semibold leading-none text-gray-800">Current Password&nbsp;</p>
                                                </div>
                                                <input
                                                    className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2"
                                                    type="password"
                                                    name="current password"
                                                />
                                            </div>
                                            <div className='flex-col flex mt-4'>
                                                <label className="text-sm font-semibold leading-none text-gray-800">
                                                    New Password
                                                </label>
                                                <input
                                                    className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2"
                                                    type="password"
                                                    name="new password"
                                                />
                                            </div>
                                            <div className='flex-col flex mt-4'>
                                                <label className="text-sm font-semibold leading-none text-gray-800">
                                                    Retype New Password
                                                </label>
                                                <input
                                                    className="p-3 bg-white border-1 rounded-lg border-gray-300 focus:outline-none text-base text-black py-2 pl-3 mt-1 placeholder:text-sm w-1/2"
                                                    type="password"
                                                    name="new password"
                                                />
                                            </div>
                                        </div>

                                        <div className="py-3 text-right mt-4">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 mr-4"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-3 px-3 text-base font-medium rounded-md text-white bg-purple-1000 hover:bg-purple-600 "
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
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

export default ClientAccount;