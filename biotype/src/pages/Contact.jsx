import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div className=''>

      <div className="text-center text-2xl pt-10 text-middle ">
        <p className="">CONTACT <span className="text-star font-semibold">US</span></p>
      </div>

      <div className=" my-10 flex flex-col  justify-center md:flex-row gap-10 mb-28 text-sm ">
        <img src={assets.contact_image} alt="" className="w-full md:max-w-[360px] " />

        <div className="flex flex-col justify-center  items-start gap-6">
          <p className=' text-lg text-middle font-semibold'>OUR OFFICE</p>
          <p className='text-gray-500 '>1234 Innovation Drive <br className="" />Suite 500, Silicon Valley, CA, USA</p>
          <p className='text-gray-500 '> Tel: (123) 456-7890 <br className="" />Email: contact@biotypeservice.com</p>
          <p className='text-lg text-middle font-semibold'>CAREERS AT BioType</p>
          <p className="text-gray-500">Join our passionate team and explore exciting career opportunities.</p>
          <button className=' border border-gray-800   px-8 py-4 text-sm text-black hover:bg-start hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
        
        
      </div>
      
      
      
    </div>
  )
}

export default Contact