import React, { useState } from 'react';
import NavxSearch from '../components/navxsearch';
import Footer from '../components/footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function JobBoard () {

  return (
    <div>
      <NavxSearch />
      <div className="flex w-full">
        <div className="flex pl-8 lg:pl-16 w-full pt-6 lg:pt-10 mt-5 mb-10">
          <p role="heading" className="text-3xl font-semibold text-gray-800 pb-6 block">
            Jobs
          </p>
        </div>      
      </div>
      <Tabs
          defaultActiveKey="jobs"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="jobs" title="All Jobs">
          Those pretty wrongs that liberty commits, When I am sometime absent from thy heart, Thy beauty, and thy years full well befits, For still temptation follows where thou art. Gentle thou art, and therefore to be won, Beauteous thou art, All Jobs
          </Tab>
          <Tab eventKey="answered" title="Answered">
          Those pretty wrongs that liberty commits, When I am sometime absent from thy heart, Thy beauty, and thy years full well befits, For still temptation follows where thou art. Gentle thou art, and therefore to be won, Beauteous thou art, Answered
          </Tab>
          <Tab eventKey="awarded" title="Awarded">
          Those pretty wrongs that liberty commits, When I am sometime absent from thy heart, Thy beauty, and thy years full well befits, For still temptation follows where thou art. Gentle thou art, and therefore to be won, Beauteous thou art, Awarded
          </Tab>
          <Tab eventKey="done" title="Done">
          Those pretty wrongs that liberty commits, When I am sometime absent from thy heart, Thy beauty, and thy years full well befits, For still temptation follows where thou art. Gentle thou art, and therefore to be won, Beauteous thou art, Done
          </Tab>
        </Tabs>  
      <Footer />
    </div>
  );
}

export default JobBoard;
