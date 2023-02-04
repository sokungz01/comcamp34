import React from 'react'
import Logo from '../../assets/large-logo.png'
import Button from '../Button';


const LandingSection: React.FC = () =>  {

    return (
       <div className="h-screen flex flex-col align-center justify-center font-teko tracking-wider bg-base-white">
            <img className='mt-10 w-1/3 mx-auto' src={Logo}/>
            <p className='mx-auto font-normal lg:font-medium lg:text-5xl text-red2'>Open 15 February - 5 March 2023</p>
            <a href="#" className="inline-block mx-auto lg:text-3xl lg:font-normal px-8 py-1 leading-none text-base-white
             bg-red2 lg:border-2 lg:border-red2 mt-4 lg:mt-8 lg:mb-16 rounded-xl">Register</a>
       </div>
    );
}

export default LandingSection