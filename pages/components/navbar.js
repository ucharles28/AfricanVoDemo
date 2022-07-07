// import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link';
// import {useRouter} from 'next/router'
// import logo from './public/logo.png'
import { useState } from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

function Menu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
        <div className="bg-white fixed w-full z-10 shadow-sm">
          <div className="px-4 pt-2 pb-2 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center pt-1 justify-between">
              <a
                href="/"
                className="inline-flex items-center"
              >
                <span className="ml-2 fixed text-xl font-bold tracking-wide text-gray-900 uppercase">
                  <img src="https://i.ibb.co/yshXSCj/africanvo.png" alt="africanvo" width={120} layout='responsive' />
                </span>
              </a>
              <ul class="flex items-center hidden space-x-8 lg:flex">
                <li>
                  <a
                    href="#"
                    class="font-medium tracking-wide hover:text-gray-900 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Post a Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="font-medium tracking-wide hover:text-gray-900 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Find Voices
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    class="font-medium tracking-wide hover:text-gray-900  text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Find Translators
                  </a>
                </li>
                <li>
                  <a
                    href="../signup"
                    class="font-medium tracking-wide hover:text-gray-900 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="../login"
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-lg bg-purple-1000 hover:bg-purple-500"
                  >
                    Login
                  </a>
                </li>
              </ul>
              <div className="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-gray-900" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full">
                    <div className="p-5 bg-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            <img src="https://i.ibb.co/yshXSCj/africanvo.png" alt="africanvo" width={120} layout='responsive' />
                            </span>
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg className="w-5 text-gray-900" viewBox="0 0 24 24">
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4">
                          <li>
                            <a
                              href="#"
                              className="font-medium tracking-wide hover:text-gray-900 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Post a Project
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="font-medium tracking-wide hover:text-gray-900 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Find Voices
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="font-medium tracking-wide hover:text-gray-900 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Find Translators
                            </a>
                          </li>
                          <li>
                            <a
                              href="../signup"
                              className="font-medium tracking-wide hover:text-gray-900 text-gray-900 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Sign Up
                            </a>
                          </li>
                          <li>
                            <a
                              href="../login"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded bg-purple-1000 hover:bg-purple-500"
                            >
                              Login
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    // <div className='navbar'>
    //   <Navbar 
    //     bg="white" 
    //     variant="light" 
    //     fixed="top"
    //     className='navborder'>
    //     <Container>
    //     <Navbar.Brand href="/">
    //       <img src="https://i.ibb.co/fqKFnPj/logo.png" alt="africanvo" width={120} padding-top={10} layout='responsive' />
    //     </Navbar.Brand>
    //     <Nav>
    //       <Nav.Link href="#" style={{color:'#111827'}} >Post a Project</Nav.Link>
    //       <Nav.Link href="#" style={{color:'#111827'}} >Find Voices</Nav.Link>
    //       <Nav.Link href="#" style={{color:'#111827'}} >Find Translators</Nav.Link>
    //       <Nav.Link href="/signup" style={{color:'#111827'}} >Sign up</Nav.Link>
    //       <Button href='/login'>Login</Button> 
    //     </Nav>
    //     </Container>
    //   </Navbar>
    // </div>
  )
}

export default Menu