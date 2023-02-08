import React from 'react'

const SponsorSection :React.FC = () => {
    return(
        <div className='bg-base-black w-full'>
           
            <div className="overflow-hidden">
                <img className="hidden lg:block ml-[20vw] xl:w-[85%] mt-24 mb-14 h-auto overflow-x-hidden" src="assets/frontPage/bgSponsorSectionDesktop.png"/>
                <img className="block lg:hidden ml-[18vw] mt-24 -mb-20" src="assets/frontPage/bgSponsorSectionMobile.png"/>

            </div>
            
            
        </div>

    );
}

export default SponsorSection;