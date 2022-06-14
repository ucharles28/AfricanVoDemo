import { IoIosFlag, IoIosArrowDown } from 'react-icons/io';
import { FaFacebookSquare, FaGooglePlusG, FaTwitter } from 'react-icons/fa'
import { Navbar } from 'react-bootstrap';
import Link from "next/link";
import { useState } from "react";
import { ImFacebook2, ImTwitter} from 'react-icons/im'

function Footer() {
  const [mode, setMode] = useState("auto");
    return (
              <div className="pt-12 footer-wrapper bg-purple-1000 text-white">
                  <footer id="footer" className="relative z-50 fixed bottom-0 w-full">
                      <div className="pt-2">
                          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                              <div className="lg:flex">
                                  <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                      <div className="w-full lg:w-1/2 px-6">
                                          <ul>
                                              <li>
                                                    <a className="text-base font-semibold lg:text-base leading-none text-white">Products</a>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Voices</a>
                                                  </Link>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Translators</a>
                                                  </Link>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Join AVO as a voice talent</a>
                                                  </Link>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Join AVO as a translator</a>
                                                  </Link>
                                              </li>
                                              <li className="mt-6">
                                                  <a href="javascript:void(0)" className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">
                                                  Post a VO Project
                                                  </a>
                                              </li>
                                              <li className="mt-6">
                                                  <a href="javascript:void(0)" className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">
                                                  Membership Options
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="w-full lg:w-1/2 px-6">
                                          <ul>
                                              <li>
                                                    <a className="text-base font-semibold lg:text-base leading-none text-white">Resources</a>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Help center</a>
                                                  </Link>
                                              </li>
      
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">FAQ</a>
                                                  </Link>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Rates</a>
                                                  </Link>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="w-full lg:w-1/2 flex">
                                      <div className="w-full lg:w-1/2 px-6">
                                          <ul>
                                              <li>
                                                    <a className="text-base font-semibold lg:text-base leading-none text-white">Company</a>
                                              </li>
                                              <li className="mt-6">
                                                  <a href="javascript:void(0)" className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">
                                                  About Us
                                                  </a>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Contact Us</a>
                                                  </Link>
                                              </li>
                                              <li className="mt-6">
                                                  <Link href="javascript:void(0)">
                                                      <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-white">Careers</a>
                                                  </Link>
                                              </li>
                                          </ul>
                                      </div>
                                      <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                                          <div className="flex items-center mb-6">
                                              <a href="javascript:void(0)">
                                                  <div className="hover:text-twitter">
                                                      <ImFacebook2 size={24} />
                                                  </div>
                                              </a>
                                              <a href="javascript:void(0)">
                                                  <div className="pl-4 hover:text-twitter">
                                                      <ImTwitter size={24} />
                                                  </div>
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="py-16 flex flex-col justify-center items-center">
                          <Link href="/">
                              <a>
                                  <img src="https://i.ibb.co/fqKFnPj/logo.png" alt="africanvo" width={110} padding-top={10} layout='responsive' />
                              </a>
                          </Link>
                          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">2022. All Rights Reserved.</p>
                      </div>
                  </footer>
              </div>
//             <footer class="bg-gray-50">
//   <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
//     <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
//       <div>
//       <img src="https://i.ibb.co/fqKFnPj/logo.png" alt="africanvo" width={110} padding-top={10} layout='responsive' />

//         <div class="flex mt-8 space-x-6 text-gray-500">
//           <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
//             <span class="sr-only"> Instagram </span>

//             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//               <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
//             </svg>
//           </a>

//           <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
//             <span class="sr-only"> Twitter </span>

//             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//               <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//             </svg>
//           </a>
//         </div>
//       </div>

//       <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
//         <div>
//           <p class="font-medium">
//             Company
//           </p>

//           <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//             <a class="hover:opacity-75" href=""> About </a>
//             <a class="hover:opacity-75" href=""> Meet the Team </a>
//             <a class="hover:opacity-75" href=""> History </a>
//             <a class="hover:opacity-75" href=""> Careers </a>
//           </nav>
//         </div>

//         <div>
//           <p class="font-medium">
//             Services
//           </p>

//           <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//             <a class="hover:opacity-75" href=""> 1on1 Coaching </a>
//             <a class="hover:opacity-75" href=""> Company Review </a>
//             <a class="hover:opacity-75" href=""> Accounts Review </a>
//             <a class="hover:opacity-75" href=""> HR Consulting </a>
//             <a class="hover:opacity-75" href=""> SEO Optimisation </a>
//           </nav>
//         </div>

//         <div>
//           <p class="font-medium">
//             Helpful Links
//           </p>

//           <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//             <a class="hover:opacity-75" href=""> Contact </a>
//             <a class="hover:opacity-75" href=""> FAQs </a>
//             <a class="hover:opacity-75" href=""> Live Chat </a>
//           </nav>
//         </div>

//         <div>
//           <p class="font-medium">
//             Legal
//           </p>

//           <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//             <a class="hover:opacity-75" href=""> Privacy Policy </a>
//             <a class="hover:opacity-75" href=""> Terms & Conditions </a>
//             <a class="hover:opacity-75" href=""> Returns Policy </a>
//             <a class="hover:opacity-75" href=""> Accessibility </a>
//           </nav>
//         </div>
//       </div>
//     </div>

//     <p class="mt-8 text-xs text-gray-500">
//       &copy; 2022 Company Name
//     </p>
//   </div>
// </footer>
      
    )
}
export default Footer