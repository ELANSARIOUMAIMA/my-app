import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      
      <div className="text-center text-2xl pt-10 text-middle">
        <p className="">About <span className="text-start font-medium">US</span></p>
      </div>

      <div className=" my-10 flex flex-col md:flex-row gap-12  ">

        {/*left side*/}
        <img src={assets.about_image} alt="" className="w-full md:max-w-[360px]" />

        {/*right side*/}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>Welcome to BioType, your personalized wellness companion designed to guide you toward a healthier lifestyle. At BioType, we believe that every individual is unique — and so is their health journey. By understanding your blood type, we connect you with the right coaches in fitness, nutrition, and mental well-being to offer tailored guidance and support.</p>
          <p>BioType is dedicated to redefining wellness through smart, personalized coaching. Whether you're starting a new fitness plan, seeking better eating habits, or improving your mental resilience, our expert coaches are here to empower you every step of the way. With BioType, your health becomes truly personal.</p>
          <b className="text-start ">Our vision</b>
          <p>At BioType, our vision is to revolutionize the way people experience wellness by delivering fully personalized support. We believe that your blood type holds unique insights into your health needs—so we connect you with expert coaches in fitness, nutrition, and psychology who understand those needs. Our mission is to simplify access to the right guidance, at the right time, empowering you to take control of your physical and mental well-being in a way that truly fits your biology.</p>
        </div>
      </div>
      <div className="text-xl  my-4 ">
        <p className="text-middle">WHY <span className="text-start font-semibold">CHOOSE US </span></p>
      </div>

        <div className=" border border-start flex flex-col md:flex-row mb-20 ">
            <div className=' border border-start  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-end hover:text-white transition-all  duration-300 text-gray-600  cursor-pointer'>
                <b className="text-mid">EFFICIENCY:</b>
                <p className=""> Our platform connects you instantly with the right coach — whether for fitness, nutrition, or mental well-being — based on your blood type. No more endless searching; get exactly what your body needs, fast and efficiently.</p>
            </div>

            <div className='border border-start  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-end hover:text-white transition-all  duration-300 text-gray-600  cursor-pointer'>
                <b className="">CONVENIENCE:</b>
                <p className="">Access expert guidance anytime, anywhere. Whether you're at home, at work, or on the go, our app offers you seamless scheduling and easy communication with your personalized coaches.</p>
            </div>

            <div className='border border-start  px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-end hover:text-white transition-all  duration-300 text-gray-600  cursor-pointer'>
                <b className="">PERSONALIZATION:</b>
                <p className="">Every user is unique. That's why we tailor our coaching services to your specific blood type, ensuring health advice and wellness programs that truly match your biology and lifestyle.</p>
            </div>

        </div>
        
      </div>

    
  )
}

export default About