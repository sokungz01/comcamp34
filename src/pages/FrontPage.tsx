import ConditionsSection from "@/components/homePage/ConditionsSection";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "@/components/homePage/Navbar";
import LandingSection from "@/components/homePage/LandingSection";
import FAQSection from "@/components/homePage/FAQSection";
import TimelineSection from "@/components/homePage/TimelineSection";
import ContactSection from "@/components/homePage/ContactSection";
import LearningSection from "@/components/homePage/LearningSection";
import AboutSection from "@/components/homePage/AboutSection";
import SponsorSection from "@/components/homePage/SponsorSection";
import Footer from "@/components/homePage/Footer";
import { animateScroll as scroll } from "react-scroll";

export const FrontPage = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <>
         <div className='z-[999] absolute mx-auto left-0 right-0'>
            <Navbar />
         </div>
         <div className='flex h-screen flex-col'>
            <LandingSection />
            <AboutSection />
            <LearningSection />
            <ConditionsSection />
            <TimelineSection />
            <FAQSection />
            {/* <SponsorSection /> */}
            <ContactSection />
            <Footer />
            <div>
               <a
                  onClick={() => {
                     scroll.scrollToTop({ duration: 3000, smooth: "easeInOutQuad" });
                  }}
                  className='fixed bottom-16 right-8 cursor-pointer bg-base-white bg-opacity-40 rounded-full'
               >
                  <svg
                     width='100%'
                     height='100%'
                     viewBox='0 0 64 64'
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     stroke='#000000'
                     strokeWidth='2px'
                     className='lg:w-16 lg:h-16 w-12 h-12'
                  >
                     <polyline points='16 48 32 32 48 48' />
                     <polyline points='16 32 32 16 48 32' />
                  </svg>
               </a>
            </div>
         </div>
      </>
   );
};
