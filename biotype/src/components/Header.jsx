import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap  justify-between bg-red_gradient  rounded-lg px-6 md:px-4 lg:px-8 ">
        {/*-----left Side----- */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-5 m-auto md:py-[5vw] md:mb-[-15px]">
            <p className="text-3xl md:text-4xl  lg:text-5xl text-white font-semibold leading-tight  md:leading-tight lg:leading-tight">Welcome to BioType <br className="" />
            Your personalized food & health assistant
            </p>

            <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                <img  className="w-28 "src={assets.group_profiles} alt="" />
                <p className="">Simply browse through our amazing list of coaches, take care of your health, <br className="hidden  sm:block" />schedule your appointments in just a few clicks.</p>
            </div>
            <div className=" flex flex-col md:flex-row items-center gap-4">
              <img src={assets.icon} alt="blood" className="w-1/5  animate-bounce" />
              <a href="#type"className=" flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ">
                 Book your coach now
                 <img src={assets.arrow_icon} alt="arrow" className="w-3 animate-pulse" />
              </a>

            </div>   
</div>
        {/*-----right Side----- */}
        <div className="md:w-1/2 relative" >
            <img src={assets.header_img} alt="" className="w-full md:absolute bottom-0 h-auto rouded-lg" />
        </div>
    </div>
  )
}

export default Header