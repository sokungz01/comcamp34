import ConditionsSection from '@/components/homePage/ConditionsSection';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import React,{useEffect} from "react";
import FAQSection from '@/components/homePage/FAQSection';
export const FrontPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <>
           <div className="flex h-screen flex-col">
                <div className="m-auto text-center">
                    <p className="mb-3 text-xl">Welcome to Landing Page</p>
                    <Link to="/registration" className="bg-blue-500 rounded-full px-3 py-2 text-white">
                        <button>Registration</button>
                    </Link>
                </div>
                <ConditionsSection/> 
                <FAQSection/>
            </div>
        </>
    );
}