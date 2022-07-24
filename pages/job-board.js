import React, { useState } from 'react';
import NavxSearch from '../components/navxsearch';
import Footer from '../components/footer';
import { Tabs } from 'antd';
import { AiOutlineSearch } from 'react-icons/ai';
import { Form } from 'react-bootstrap';

function JobBoard () {

  const { TabPane } = Tabs;

  const onChange = (key) => {
    console.log(key);
  };

  const [filterParam, setFilterParam] = useState(["All"]);
  
  return (
    <div>
      <NavxSearch />
      <div className='px-8 lg:px-24 bg-purple-50 pb-20 font-inter'>
        <div className="flex pt-20">
          <div className="flex">
            <p role="heading" className="text-3xl lg:text-4xl font-semibold text-gray-900 block">
              Jobs
            </p>
          </div>      
        </div>
        <div className='font-inter'>
          <Tabs defaultActiveKey="jobs" onChange={onChange} className=''>
            <TabPane tab="All Jobs" key="jobs">
              <div className='flex items-stretch space-x-2 h-auto w-full bg-white rounded-lg'>
                <div className="item flex items-center justify-center ml-2 my-2">
                  <div className="relative mx-auto lg:block">
                    <Form className='="hidden lg:flex"'>
                      <span className='absolute inset-y-1.5 left-0 p-2 ml-px items-center text-gray-550 hover:text-gray-600'><AiOutlineSearch size={20}/></span>
                      <input
                        className="block h-12 pl-9 pr-9 text-base text-gray-900 rounded-lg placeholder-gray-550 w-64 lg:w-96 focus:z-10 bg-[#F3F3F3] focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-2"
                        placeholder="Search for jobs"
                        type="search"
                      />
                      <button type="submit" className="text-white bg-purple-1000 rounded-lg inset-y-0 absolute -right-0.5 p-2.5 mr-px items-center">Search</button>
                      {/* <button type="submit" className="text-gray-550 hover:text-gray-600 inset-y-0 absolute right-0 p-2.5 mr-px items-center"><AiOutlineSearch size={20}/></button> */}
                    </Form>
                  </div>
                </div>
                <div className="item flex items-center justify-center ml-4 my-2">
                  <div className="relative mx-auto lg:block">
                    <Form.Select className="hidden lg:flex rounded-lg h-10 bg-[#f3f3f3]" 
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
                      <button type="submit" className="text-white bg-purple-1000 rounded-lg inset-y-0 absolute right-0 p-2.5 mr-px items-center">Search</button>
                    </Form.Select>
                  </div>
                </div>
                {/* <Form.Select
                  onChange={(e) => {
                  setFilterParam(e.target.value);
                  }}
                  className="ml-24 rounded-lg pl-2 w-1/12 pr-4 h-10 bg-[#f3f3f3]">
                  <option value="All">Sort by: </option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                </Form.Select> */}
              </div>
            </TabPane>
            <TabPane tab="Answered" key="answered">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Awarded" key="awarded">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Done" key="done">
              Content of Tab Pane 4
            </TabPane>
          </Tabs>
          <div className='bg-white rounded-lg mt-4 px-2 py-2'>
            <div className="flex py-2 px-2">
              <p role="heading" className="text-xl lg:text-2xl font-semibold text-gray-900 block">
                Jobs you might like
              </p>
            </div>
            <div className="flex flex-col items-stretch space-y-2 h-auto w-full">
              <div className="item w-full border-y-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  1
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  2
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  3
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  4
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  5
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  6
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  7
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  8
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  9
                </div>
              </div>
              <div className="item w-full border-b-2">
                <div className='hover:bg-gray-100 my-3 h-52 px-2 py-2'>
                  10
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

export default JobBoard;
