import React, { useState } from 'react';
import Footer from '../components/Footer';
import NavxSearch from '../components/navxsearch';
import { RiEdit2Fill, RiAddCircleFill } from 'react-icons/ri';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function UserAccount() {

  const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')

  return (
    <div>
      <NavxSearch />
      {/* <div className="mx-4 mb-16 pt-16"> */}
      <div className="flex flex-col bg-purple-50 items-center justify-center">
        <div className="w-full py-6 flex justify-center align-top flex-col items-center mt-24">
          <div className="w-4/5 mb-12">
            <div className="flex flex-col justify-center items-stretch space-y-4 h-auto w-full">

              <div className="item bg-white text-gray-900 rounded-xl py-4">
                <div className="flex items-center justify-center flex-row text-gray-900 px-3 pb-2">
                    <span className="rounded-full bg-gray-100">
                      <img src={profileImageSrc} className='h-32 w-32 rounded-full object-cover' />
                    </span>
                    <div className="block flex-col items-center justify-center ml-6">
                      <div className="flex items-center w-full">
                        <span className='font-semibold font-inter text-2xl leading-6 pt-2 mr-2'>Duke Samuel</span>
                        <span className='border-2 rounded-full py-1 px-1 border-[#828282]'>
                          <RiEdit2Fill size={16} className='text-[#828282]'/>
                        </span>
                      </div>
                      <div className='flex items-center pt-2'>
                        <FaEnvelope size={20} className='text-[#828282]'/>
                        <span className='font-inter text-base font-medium leading-6 ml-2 text-[#828282]'>Dukesamuel@africanvo.com</span>
                      </div>
                      <div className='flex items-center pt-2'>
                        <FaMapMarkerAlt size={20} className='text-[#828282]'/>
                        <span className='font-inter text-base font-medium leading-6 ml-2 text-[#828282]'>Lagos, Nigeria</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='bg-purple-300 rounded-lg py-1 px-10'>
                      <span className='text-gray-900 font-medium text-2xl'>Voice Over</span>
                    </div>
                  </div>
              </div>

              <div className="item bg-white text-gray-900 rounded-xl">
                <div className="text-gray-900 px-3 py-4">
                  <div className="flex items-center pb-2 w-full border-b-2">
                    <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Professional Brief</p>
                    <span className='border-2 rounded-full py-1 px-1 border-[#828282]'>
                      <RiEdit2Fill size={20} className='text-[#828282]'/>
                    </span>
                  </div>
                  <div className="mt-2">
                  <span className='font-medium text-base leading-7 text-[#4F4F4F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat urna, sapien purus gravida erat donec sit pellentesque aliquam. Quis in fringilla eget nibh purus rutrum. Eget amet scelerisque fames eleifend integer a enim. Sapien molestie consectetur ultrices luctus justo, ut enim. Consequat pretium, integer accumsan, justo, etiam odio. Ullamcorper cras a euismod tellus sed eget amet eget viverra. Vel euismod semper dolor augue nunc pretium dignissim.</span></div>
                </div>
              </div>

              <div className="item bg-white text-gray-900 rounded-xl">
                <div className="text-gray-900 px-3 py-4">
                  <div className="pb-2 w-full border-b-2">
                    <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Profile Link</p>
                    <span className='py-1 text-base font-medium text-[#828282]'>
                      Your username will be used to create your profile link.
                    </span>
                  </div>
                  <div className="mt-2 pb-2">
                    <p className="text-base font-semibold">Username <span className="text-gray-400 text-sm font-normal">(Required)</span></p>
                    <p className="text-base font-medium text-gray-550" >This is currently an auto-generated username. You can update it one time, after which it cannot be changed.</p>
                  </div>
                  <div className="">
                    <div className="flex bg-white border-2 rounded-lg w-2/4 border-gray-300">
                      <div className="bg-purple-100 rounded-bl-lg rounded-tl-lg py-2 px-3">
                        <span className='font-medium text-lg text-purple-1000'>africanvo.com/profile/</span>
                      </div>
                      <div className="py-2 px-2 w-1/2 inline-block">
                        <span className='font-medium text-lg'>Duke-Samuel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item bg-white text-gray-900 rounded-xl">
                <div className="text-gray-900 px-3 py-4">
                  <div className="flex items-center pb-2 w-full border-b-2">
                    <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Voice Range</p>
                    <span className='border-2 rounded-full py-1 px-1 border-[#828282]'>
                      <RiEdit2Fill size={20} className='text-[#828282]'/>
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className='font-medium text-lg leading-7 text-[#333333] bg-[#BDBDBD] rounded-full px-3 py-1 font-inter'>Kids</span>
                    <span className='ml-2 font-medium text-lg leading-7 text-[#333333] bg-[#BDBDBD] rounded-full px-3 py-1 font-inter'>Young adult</span>
                  </div>
                </div>
              </div>

              <div className="item bg-white text-gray-900 rounded-xl">
                <div className="text-gray-900 px-3 py-4">
                  <div className="flex items-center pb-2 w-full border-b-2">
                    <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Language</p>
                    <span className='border-2 rounded-full py-1 px-1 border-[#828282]'>
                      <RiEdit2Fill size={20} className='text-[#828282]'/>
                    </span>
                  </div>
                  <div className="mt-3">
                    <div
                      className="py-2.5 px-3 mb-2 font-inter text-gray-900 border rounded-xl bg-purple-250 grid sm:grid-cols-2 lg:grid-cols-2 w-3/5">
                      <strong className="text-base font-medium leading-6 w-1/2 sm:w-1/2"> Language </strong>
                      <strong className="text-base font-medium leading-6 w-1/2 sm:w-1/2"> Proficiency </strong>
                    </div>
                    <div
                      className="py-2.5 px-3 mb-2 font-inter grid sm:grid-cols-2 lg:grid-cols-2 w-3/5">
                      <strong className="text-base font-normal text-gray-900 leading-6 w-1/2 sm:w-1/2"> English </strong>
                      <strong className="text-base font-medium text-[#6C757D] leading-6 w-1/2 sm:w-1/2"> Basic </strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item bg-white text-gray-900 rounded-xl">
                <div className="text-gray-900 px-3 py-4">
                  <div className="pb-2 w-full border-b-2">
                    <p className='font-semibold text-2xl leading-6 pr-2 text-[#333333] font-inter'>Audio Sample</p>
                    <span className='py-1 text-base font-medium text-[#828282]'>
                      Minimum one sample is required. You can rearrange the order with the drag icons by the side.
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="py-5 px-3 mb-2 text-purple-1000 flex flex-col items-center justify-center rounded-xl w-1/2 bg-[#F9F4FF] text-center">
                      <button
                        type="button"
                        className="text-purple-1000 font-semibold flex items-center border-2 border-{#E0E0E0} py-2 px-3 rounded-lg bg-white"
                      >
                        <RiAddCircleFill size={24}/>
                        <span className="pl-2 text-base">Add a demo</span>
                      </button>
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

export default UserAccount;