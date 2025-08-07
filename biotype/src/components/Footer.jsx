import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
            {/*---Left section---*/}
            <div className="">
                <img src={assets.logo} alt="" className=" mb-5 w-40 " />
                <p className="w-full md:w-2/3 text-gray-600 leading-6">A modern wellness app offering personalized coaching in fitness, nutrition, and mental health — tailored to your blood type.</p>

            </div>
            {/*---Center section---*/}
            <div className="">
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/*---Right section---*/}
            <div className="">
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-2 text-gray-600">
                    <li> (123) 456-7890</li>
                    <li>contact@biotypeservice.com</li>
                </ul>
            </div>
        </div>
        {/*---Copyright Text---*/}
        <div className="">
            <p className="p-5 text-sm text-center text-">Copyright2026@BioType-All Right Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer