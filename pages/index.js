import Menu from './components/Navbar'
import Footer from './components/Footer'
import Meta from './components/meta'
import { FaProjectDiagram } from 'react-icons/fa'
import { SiAirplayaudio } from 'react-icons/si'
import { BsPatchCheck } from 'react-icons/bs'

function Home() {
  return (
    <div>
      <Meta />
      <Menu />
      {/* hero starts */}
      <div className="bg-white overflow-y-hidden" style={{ minHeight: 600 }}>
        <div className="bg-white">
          <div className="container mx-auto flex flex-col items-center py-20 sm:py-24 mt-5">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-4 sm:mb-10">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-9 md:leading-10">
                African&#39;s largest 
                <span className="text-purple-1000"> voice over </span>
                marketplace.
              </h1>
              <p className="mt-2 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-base sm:text-lg">Beat the complexity of Africa and find professional Native speaking African voice talents and translators with ease. </p>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-purple-1000 transition duration-150 ease-in-out hover:bg-purple-600 lg:text-xl lg:font-bold  rounded-lg text-white px-4 sm:px-10 border border-purple py-2 sm:py-4 text-xs"><a href='./signup' className='hover:text-white'>Find Talent</a></button>
              <button className="hover:bg-purple-1000 ml-4 transition duration-150 ease-in-out lg:text-xl lg:font-bold rounded-lg text-purple-600 hover:text-white px-4 sm:px-10 border border-purple-600 py-2 sm:py-4 text-xs"><a href='./login' className='hover:text-white'>Login</a></button>
            </div>
          </div>
        </div>
      </div>
      {/* hero ends */}
      {/* cloud logo starts */}
      <section className="bg-gray-100 py-10 lg:py-[80px]">
        <div className="container">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                  <div className="flex flex-wrap justify-center items-center">
                    <a
                        href="javascript:void(0)"
                        className="
                        opacity-25
                        grayscale
                        w-[150px]
                        2xl:w-[180px]
                        py-5
                        flex
                        items-center
                        justify-center
                        mx-4
                        " >
                      <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg" alt="image" className="w-full h-10 bg-blend-lighten" />
                    </a>
                    <a href="javascript:void(0)" className="opacity-25 grayscale w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 ">
                      <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg" alt="image" className="w-full h-10" />
                    </a>
                    <a href="javascript:void(0)" className="opacity-25 grayscale w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 " >
                      <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg" alt="image" className="w-full h-10" />
                    </a>
                    <a href="javascript:void(0)" className=" opacity-25 grayscale w-[150px] 2xl:w-[180px] py-5 flex items-center justify-center mx-4 " >
                      <img src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg" alt="image" className="w-full h-10" />
                    </a>
                  </div>
              </div>
            </div>
        </div>
      </section>
      {/* cloud logo ends */}
      {/* How it works starts */}
      <section className="text-gray-900 body-font py-20 bg-purple-1000">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-2">How it works</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">We offer the best options to find the best voice actor for your projects:</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <FaProjectDiagram />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Post a voice over project</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">No charges, no tricks. Ever. We&#39;ll invite the voice actors that suit your requirements.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <SiAirplayaudio />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Get up to 50 auditions</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Request a custom audition, if you like. You&#39;ll get it within hours at no cost.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-purple-500 text-white flex-shrink-0">
                    <BsPatchCheck strokeWidth={0.5}/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Select a proposal and hire</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">Select the proposal you like and hire the voice over artist directly. No hassle&#59; no fuss.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* how it works ends */}
      {/* test starts */}
      <section className="text-gray-600 body-font bg-purple-50">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-bold title-font text-gray-900 mb-2 text-center">Real Stories from Real Customers</h1>
          <p className="text-base font-medium title-font text-gray-900 mb-12 text-center">Get inspired by these stories.</p>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white shadow-sm p-8 rounded">
                <img src="https://i.ibb.co/fknkbX0/hubspot.png" alt="HubSpot, Africanvo" className="w-28 h-8 ml-8 relative box-border object-cover bg-transparent"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gold mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">The freelance talent we work with are more productive than we ever thought possible.</p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Floyd Miles</span>
                    <span className="text-gray-500 text-sm">Vice President, HubSpot</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white shadow-sm p-8 rounded">
                  <img src="https://i.ibb.co/6r3fDvX/strapi.png" border="0" alt="Airbnb, Africanvo" className="w-28 h-8 ml-8 relative box-border object-cover bg-transparent"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gold mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Africanvo saved our time in our commercial promotion.</p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Kristin Watson</span>
                    <span className="text-gray-500 text-sm">Co-Founder, Strapi</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white shadow-sm p-8 rounded">
                <img src="https://i.ibb.co/k0tHwvG/airbnb.png" border="0" alt="Strapi, Africanvo" className="w-28 h-8 ml-8 relative box-border object-cover bg-transparent"
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gold mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">My relationship with Cara &#38; CompuVision keeps on growing. The projects get larger and more technical every year.</p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Jane Cooper</span>
                    <span className="text-gray-500 text-sm">CEO, Airbnb</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* test ends */}
      <Footer />
    </div>
  )
}

export default Home