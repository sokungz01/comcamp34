import { useState } from "react";
import logo from "/assets/nav-logo.png";
import { Link, useLocation } from "react-router-dom";
import { Link as NavLink } from "react-scroll";

const Navbar = () => {
   const [hamburger, setHamburger] = useState(false);
   const location = useLocation();
   return (
      <nav
         className={`z-[10000] fixed w-full flex items-center flex-wrap bg-base-white p-3 font-teko tracking-wider drop-shadow-xl ${
            hamburger ? "justify-between" : "justify-end"
         }`}
      >
         {location.pathname === "/faq" ? (
            <>
               <div
                  className={`m-auto items-center text-base-black justify-center`}
               >
                  <Link to='/'>
                     <img className='lg:w-16 w-14' src={logo} />
                  </Link>
               </div>
            </>
         ) : (
            <>
               <div
                  className={`hidden lg:flex items-center flex-shrink-0 text-base-black mr-[60px]`}
               >
                  <Link to='/'>
                     <img className='lg:w-16 w-14' src={logo} />
                  </Link>
               </div>{" "}
               <div className='block lg:hidden'>
                  <button
                     onClick={() => setHamburger(!hamburger)}
                     className='flex items-center px-3 py-2 rounded text-red2 hover:border-white'
                  >
                     <svg
                        className={`fill-current h-5 w-5 ${hamburger ? "hidden" : ""}`}
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                     </svg>
                     <svg
                        className={`fill-current h-5 w-5 ${hamburger ? "" : "hidden"}`}
                        xmlns='http://www.w3.org/2000/svg'
                        height='329pt'
                        viewBox='0 0 329.26933 329'
                        width='329pt'
                     >
                        <path d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0' />
                     </svg>
                  </button>
               </div>
               <div
                  className={` w-full text-center flex-grow lg:flex lg:items-center lg:w-auto lg:font-normal ${
                     hamburger ? "block" : "hidden"
                  }`}
               >
                  <div className='lg:text-xl lg:flex lg:flex-grow lg:justify-center '>
                     <NavLink onClick={() => setHamburger(!hamburger)}
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={0}
                        duration={1500}
                        className='block mt-4 lg:inline-block lg:mt-0 text-base-black hover:text-gray-500 lg:mr-4 cursor-pointer'
                     >
                        About
                     </NavLink>
                     <NavLink onClick={() => setHamburger(!hamburger)}
                        activeClass='active'
                        to='learning'
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={0}
                        duration={2000}
                        className='block mt-4 lg:inline-block lg:mt-0 text-base-black hover:text-gray-500 lg:mr-4 cursor-pointer'
                     >
                        Learning
                     </NavLink>
                     <NavLink onClick={() => setHamburger(!hamburger)}
                        activeClass='active'
                        to='conditions'
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={0}
                        duration={2500}
                        className='block mt-4 lg:inline-block lg:mt-0 text-base-black hover:text-gray-500 lg:mr-4 cursor-pointer'
                     >
                        Conditions
                     </NavLink>
                     <NavLink onClick={() => setHamburger(!hamburger)}
                        activeClass='active'
                        to='timeline'
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={0}
                        duration={3000}
                        className='block mt-4 lg:inline-block lg:mt-0 text-base-black hover:text-gray-500 lg:mr-4 cursor-pointer'
                     >
                        Timeline
                     </NavLink>
                     <NavLink onClick={() => setHamburger(!hamburger)}
                        activeClass='active'
                        to='faq'
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={0}
                        duration={3500}
                        className='block mt-4 lg:inline-block lg:mt-0 text-base-black hover:text-gray-500 lg:mr-4 cursor-pointer'
                     >
                        FAQ
                     </NavLink>
                     <NavLink onClick={() => setHamburger(!hamburger)}
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth='easeInOutQuad'
                        offset={0}
                        duration={4000}
                        className='block mt-4 lg:inline-block lg:mt-0 text-base-black hover:text-gray-500 lg:mr-4 cursor-pointer'
                     >
                        Contact
                     </NavLink>
                  </div>
                  <div>
                     <Link
                        to='/registration'
                        className={`inline-block lg:text-xl lg:font-normal px-8 py-1 leading-none text-red2 hover:bg-red2 lg:border-2 lg:border-red2 hover:border-transparent hover:text-base-white bg-base-white mt-4 lg:mt-0 rounded-xl `}
                     >
                        Register
                     </Link>
                  </div>
               </div>
            </>
         )}
      </nav>
   );
};

export default Navbar;
