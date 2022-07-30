import React, { useState } from 'react';
import NavxSearch from '../components/navxsearch';
import Footer from '../components/footer';
import { Tabs } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineMic } from 'react-icons/md';
import { BsChatSquareTextFill } from 'react-icons/bs';
import { Pagination } from 'antd';
import { MdArrowForwardIos } from 'react-icons/md';

function JobBoard () {

  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log(key);
  };

  const [filterParam, setFilterParam] = useState(["All"]);

  const [profileImageSrc, setProfileImageSrc] = useState('https://i.ibb.co/X5LP2MZ/avatar.png')
  
  return (
    <div>
      <NavxSearch />
      <div className='px-8 lg:px-24 bg-purple-50 pb-20 font-inter'>
        <div className="flex pt-24">
          <div className="flex">
            <p role="heading" className="text-3xl lg:text-4xl font-semibold text-gray-900 block">
              Jobs
            </p>
          </div>      
        </div>
        <div className='font-inter'>
          <Tabs defaultActiveKey="jobs" onChange={onChange} >
            <TabPane tab="All Jobs" key="jobs">
              <div className='flex items-stretch space-x-2 justify-between h-auto w-full bg-white rounded-lg px-2'>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block">
                    <Form className='="hidden lg:flex"'>
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <input
                        className="block h-12 pl-9 pr-9 text-base text-gray-900 rounded-lg placeholder-gray-550 w-64 lg:w-96 focus:z-10 bg-[#F3F3F3] focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-2"
                        placeholder="Search for jobs"
                        type="search"
                      />
                      <button type="submit" className="text-white bg-purple-1000 rounded-md inset-y-0 absolute -right-0.5 p-2.5 mr-px items-center">Search</button>
                    </Form>
                  </div>
                </div>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block w-52">
                    <Form.Select className="hidden lg:flex rounded-md border-2 h-10 bg-[#f3f3f3]" 
                      onChange={(e) => {
                      setFilterParam(e.target.value);
                      }}
                    >
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <option value="All" className='text-semibold'>Sort by: </option>
                      <option value="date">Date</option>
                      <option value="time">Time</option>
                      <option value="name">Name</option>
                      <option value="user">User</option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg mt-4 px-2 py-2'>
                <div className="flex py-2 px-2">
                  <p role="heading" className="text-xl lg:text-2xl font-semibold text-gray-900 block">
                    Jobs you might like
                  </p>
                </div>

                <div className="flex flex-col items-stretch space-y-2 h-auto w-full">

                  <div className="item w-full border-t-2">
                    <div className='hover:bg-gray-100 my-3 px-2 py-2'>
                      <div className="flex items-stretch space-x-2 h-auto w-full">
                        <div className="item w-full pr-4">
                          <div className="flex flex-col items-stretch space-y-1 h-auto w-full">

                            <div className="item w-full">
                              <span className='text-xl font-semibold text-gray-900 leading-6 text-left'>Documentary</span>
                            </div>

                            <div className="item w-full">
                              <div className='flex items-center gap-3'>
                                <div className='flex items-center'>
                                  <span className='text-gray-550 mr-0.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z"/></svg>
                                  </span>
                                  <span className='text-sm font-semibold text-gray-250'>Posted:&nbsp;</span>
                                  <span className='text-sm font-semibold text-gray-250'>1 hour ago</span>
                                </div>
                                <div className='flex items-center'>
                                  <span className='text-gray-550 mr-0.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#828282" fill-rule="evenodd" d="M24.04 6c-4.517 0-8.633 1.492-11.068 2.711c-.22.11-.425.218-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768l2.62-3.829a15.503 15.503 0 0 0-1.69-.957C32.489 7.437 28.472 6 24.04 6Zm-6.443 4.616a24.579 24.579 0 0 1-2.901-.728C16.977 8.875 20.377 7.8 24.039 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081Zm15.96 5.064l-.245.124c-5.607 2.828-13.043 2.828-18.65 0l-.232-.118C6.008 24.927-.422 41.997 24.04 41.997c24.46 0 17.873-17.389 9.517-26.317ZM23 24a2 2 0 0 0 0 4v-4Zm2-2v-1h-2v1a4 4 0 0 0 0 8v4a2 2 0 0 1-1.886-1.333a1 1 0 1 0-1.886.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 1 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4.001 4.001 0 0 0 25 22Zm0 8v4a2 2 0 1 0 0-4Z" clip-rule="evenodd"/></svg>
                                  </span>
                                  <span className='text-sm font-semibold text-gray-250'>Budget:&nbsp;</span>
                                  <span className='text-sm font-semibold text-gray-250'>$100 - 250$</span>
                                </div>
                                <div className='flex items-center'>
                                  <span className='text-gray-550 mr-0.5'>
                                    <MdOutlineMic size={18} />
                                  </span>
                                  <span className='text-sm font-semibold text-gray-250'>Talent:&nbsp;</span>
                                  <span className='text-sm font-semibold text-gray-250'>Voice Over</span>
                                </div>
                              </div>
                            </div>

                            <div className="item w-full">
                              <div className='mt-2'>
                                <span className='text-gray-250 text-base font-medium leading-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ante sed praesent fermentum massa at odio cursus. Tempus non volutpat ut eu. Nunc molestie id posuere sapien ac eros varius sapien in. Lectus orci mi malesuada habitant aliquam quisque at. Suspendisse orci, integer sed sit purus ut aenean. Sit</span>
                              </div>
                            </div>
                            
                            <div className="item w-full">
                              <div className='flex flex-row flex-wrap gap-2 mt-2'>

                                <div className='bg-[#e0e0e0] px-2 py-0.5 rounded-full'>
                                  <span className='text-[#4F4F4F] font-medium leading-6'>Animation</span>
                                </div>
                                <div className='bg-[#e0e0e0] px-2 py-0.5 rounded-full'>
                                  <span className='text-[#4F4F4F] font-medium leading-6'>Kids (5 -10)</span>
                                </div>
                                <div className='bg-[#e0e0e0] px-2 py-0.5 rounded-full'>
                                  <span className='text-[#4F4F4F] font-medium leading-6'>Male</span>
                                </div>
                                <div className='bg-[#e0e0e0] px-2 py-0.5 rounded-full'>
                                  <span className='text-[#4F4F4F] font-medium leading-6'>German</span>
                                </div>

                              </div>
                            </div>

                            <div className="item w-full">
                              <div className='mt-3'>
                                <div className='flex items-center gap-3'>
                                  <div className='flex items-center'>
                                    <span className='w-8 h-8 mr-1'>
                                      <img src={profileImageSrc} alt='avatar' />
                                    </span>
                                    <span className='font-semibold text-base text-[#333333] leading-6'>Lawrence A.</span>
                                  </div>
                                  <div className='flex items-center'>
                                    <span className='mr-1 text-gray-550'><FaMapMarkerAlt/></span>
                                    <span className='font-medium text-sm text-gray-550 leading-6'>Nigeria</span>
                                  </div>
                                  <div>
                                    <span className='font-medium text-sm text-gray-550 leading-6'>
                                      Rating
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="item w-96 h-full">
                          <div className="flex flex-col items-stretch space-y-4 h-auto w-full my-5">

                            <div className="item w-full h-full">
                              <div className='flex items-center'>
                                <span className='text-gray-550 mr-1.5'>
                                  <BsChatSquareTextFill size={20}/>
                                </span>
                                <span className='text-sm font-semibold text-gray-550'>3 Response</span>
                              </div>
                            </div>

                            <div className="item w-full h-full">
                              <div className='flex items-center'>
                                <span className='text-gray-550 mr-1.5'>
                                  {/* <FaPercentage size={16} className='text-white'/> */}
                                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M8.83 7.05c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77c0-.99.79-1.78 1.78-1.78M15.22 17c-.98 0-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77S16.2 17 15.22 17m-6.72.03L7 15.53L15.53 7l1.5 1.5l-8.53 8.53Z"/></svg>
                                </span>
                                <span className='text-sm font-semibold text-gray-550'>60% Job match</span>
                              </div>
                            </div>

                            <div className="item w-full h-full">
                              <div className='flex items-center'>
                                <span className='text-gray-550 mr-1.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z"/></svg>
                                </span>
                                <span className='text-sm font-semibold text-gray-550'>Response Deadline: March 15, 2022</span>
                              </div>
                            </div>

                            <div className="item w-full h-full">
                              <div className='flex items-center'>
                                <span className='text-gray-550 mr-1.5'>
                                  <MdOutlineMic size={24}/>
                                </span>
                                <span className='text-sm font-semibold text-gray-550'>Audition</span>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="item w-full text-center mt-4">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </TabPane>
            <TabPane tab="Answered" key="answered">
              <div className='flex items-stretch space-x-2 justify-between h-auto w-full bg-white rounded-lg px-2'>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block">
                    <Form className='="hidden lg:flex"'>
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <input
                        className="block h-12 pl-9 pr-9 text-base text-gray-900 rounded-lg placeholder-gray-550 w-64 lg:w-96 focus:z-10 bg-[#F3F3F3] focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-2"
                        placeholder="Search for jobs"
                        type="search"
                      />
                      <button type="submit" className="text-white bg-purple-1000 rounded-md inset-y-0 absolute -right-0.5 p-2.5 mr-px items-center">Search</button>
                    </Form>
                  </div>
                </div>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block w-52">
                    <Form.Select className="hidden lg:flex rounded-md border-2 h-10 bg-[#f3f3f3]" 
                      onChange={(e) => {
                      setFilterParam(e.target.value);
                      }}
                    >
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <option value="All" className='text-semibold'>Sort by: </option>
                      <option value="date">Date</option>
                      <option value="time">Time</option>
                      <option value="name">Name</option>
                      <option value="user">User</option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg mt-4 px-2 py-2'>
                <div className="flex py-2 px-2">
                  <p role="heading" className="text-xl lg:text-2xl font-semibold text-gray-900 block">
                    All
                  </p>
                </div>

                <div className="flex flex-col items-stretch space-y-2 h-auto w-full">

                  <div className="item w-full border-t-2">
                    <div className='hover:bg-gray-100 my-3 px-4 py-3'>
                      <div className="flex items-stretch space-x-2 w-full gap-4">

                        <div className="item w-full pr-4">
                          <div className="flex flex-col items-stretch space-y-1 w-full">

                            <div className="item w-full">
                              <span className='text-xl font-semibold text-gray-900 leading-6 text-left'>Documentary</span>
                            </div>

                            <div className="item w-full">
                              <div className='flex items-center gap-3'>
                                <div className='flex items-center'>
                                  <span className='text-gray-550 mr-0.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z"/></svg>
                                  </span>
                                  <span className='text-sm font-semibold text-gray-250'>Posted:&nbsp;</span>
                                  <span className='text-sm font-semibold text-gray-250'>1 hour ago</span>
                                </div>
                                <div className='flex items-center'>
                                  <span className='text-gray-550 mr-0.5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="#828282" fill-rule="evenodd" d="M24.04 6c-4.517 0-8.633 1.492-11.068 2.711c-.22.11-.425.218-.616.322c-.378.206-.7.398-.956.567l2.77 4.078l1.304.519c5.096 2.571 11.93 2.571 17.027 0l1.48-.768l2.62-3.829a15.503 15.503 0 0 0-1.69-.957C32.489 7.437 28.472 6 24.04 6Zm-6.443 4.616a24.579 24.579 0 0 1-2.901-.728C16.977 8.875 20.377 7.8 24.039 7.8c2.537 0 4.936.516 6.92 1.17c-2.325.327-4.806.882-7.17 1.565c-1.86.538-4.034.48-6.192.081Zm15.96 5.064l-.245.124c-5.607 2.828-13.043 2.828-18.65 0l-.232-.118C6.008 24.927-.422 41.997 24.04 41.997c24.46 0 17.873-17.389 9.517-26.317ZM23 24a2 2 0 0 0 0 4v-4Zm2-2v-1h-2v1a4 4 0 0 0 0 8v4a2 2 0 0 1-1.886-1.333a1 1 0 1 0-1.886.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 1 0 0-8v-4c.87 0 1.611.555 1.887 1.333a1 1 0 1 0 1.885-.666A4.001 4.001 0 0 0 25 22Zm0 8v4a2 2 0 1 0 0-4Z" clip-rule="evenodd"/></svg>
                                  </span>
                                  <span className='text-sm font-semibold text-gray-250'>Budget:&nbsp;</span>
                                  <span className='text-sm font-semibold text-gray-250'>$100 - 250$</span>
                                </div>
                              </div>
                            </div>

                            <div className="item w-full">
                              <div className='mt-3'>
                                <div className='flex items-center gap-3'>
                                  <div className='flex items-center'>
                                    <span className='w-8 h-8 mr-1'>
                                      <img src={profileImageSrc} alt='avatar' />
                                    </span>
                                    <span className='font-semibold text-base text-[#333333] leading-6'>Lawrence A.</span>
                                  </div>
                                  <div className='flex items-center'>
                                    <span className='mr-1 text-gray-550'><FaMapMarkerAlt/></span>
                                    <span className='font-medium text-sm text-gray-550 leading-6'>Nigeria</span>
                                  </div>
                                  <div>
                                    <span className='font-medium text-sm text-gray-550 leading-6'>
                                      Rating
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="item w-96 flex items-center">
                            <div className="item w-full">
                              <button className='text-base bg-purple-200 px-3 py-2 font-semibold text-purple-1000 rounded-lg'>Voice Over</button>
                            </div>
                        </div>

                        <div className="item w-full flex items-center">
                            <div className="item w-full">
                              <div className='flex'>
                                <div className='block w-full'>
                                  <div className='flex items-center'>
                                    <span className='text-gray-550 mr-0.5'>
                                      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#828282" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2v8zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3z"/></svg>
                                    </span>
                                    <div><span className='text-sm font-semibold text-gray-250'>Project Deadline:&nbsp;</span>
                                    <span className='text-sm font-semibold text-gray-250'>March 15, 2022</span></div>
                                  </div>
                                  <div className='mt-2'>
                                    <button className='text-base bg-purple-1000 w-2/4 text-center py-3 font-semibold text-white rounded-lg'>Send Messages</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>

                        <div className="item w-44 flex items-center">
                            <div className="item w-full">
                              <span className='text-xl font-semibold text-gray-900 leading-6'>
                                <MdArrowForwardIos size={30}/>
                              </span>
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="item w-full text-center mt-4">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </TabPane>
            <TabPane tab="Awarded" key="awarded">
              <div className='flex items-stretch space-x-2 justify-between h-auto w-full bg-white rounded-lg px-2'>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block">
                    <Form className='="hidden lg:flex"'>
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <input
                        className="block h-12 pl-9 pr-9 text-base text-gray-900 rounded-lg placeholder-gray-550 w-64 lg:w-96 focus:z-10 bg-[#F3F3F3] focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-2"
                        placeholder="Search for jobs"
                        type="search"
                      />
                      <button type="submit" className="text-white bg-purple-1000 rounded-md inset-y-0 absolute -right-0.5 p-2.5 mr-px items-center">Search</button>
                    </Form>
                  </div>
                </div>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block w-52">
                    <Form.Select className="hidden lg:flex rounded-md border-2 h-10 bg-[#f3f3f3]" 
                      onChange={(e) => {
                      setFilterParam(e.target.value);
                      }}
                    >
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <option value="All" className='text-semibold'>Sort by: </option>
                      <option value="date">Date</option>
                      <option value="time">Time</option>
                      <option value="name">Name</option>
                      <option value="user">User</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Done" key="done">
              <div className='flex items-stretch space-x-2 justify-between h-auto w-full bg-white rounded-lg px-2'>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block">
                    <Form className='="hidden lg:flex"'>
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <input
                        className="block h-12 pl-9 pr-9 text-base text-gray-900 rounded-lg placeholder-gray-550 w-64 lg:w-96 focus:z-10 bg-[#F3F3F3] focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-2"
                        placeholder="Search for jobs"
                        type="search"
                      />
                      <button type="submit" className="text-white bg-purple-1000 rounded-md inset-y-0 absolute -right-0.5 p-2.5 mr-px items-center">Search</button>
                    </Form>
                  </div>
                </div>
                <div className="item flex items-center justify-center my-2">
                  <div className="relative mx-auto lg:block w-52">
                    <Form.Select className="hidden lg:flex rounded-md border-2 h-10 bg-[#f3f3f3]" 
                      onChange={(e) => {
                      setFilterParam(e.target.value);
                      }}
                    >
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <option value="All" className='text-semibold'>Sort by: </option>
                      <option value="date">Date</option>
                      <option value="time">Time</option>
                      <option value="name">Name</option>
                      <option value="user">User</option>
                    </Form.Select>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobBoard;
