import React, { useContext } from 'react'

import {  useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopCoachs = () => {
     const navigate = useNavigate();
     const {coaches} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center my-16 gap-4 text-gray-800  md:mx-10'>
        <h1 className=" text-3xl font-medium">Best Coaches  </h1>
        <p className="sm:w-1/2 text-center text-sm">Meet our top-rated coaches specialized in fitness, nutrition, and psychology </p>
        <div className=" w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {coaches.slice(0,8).map((item,index)=>(
                <div  onClick={()=>{navigate(`/appointments/${item._id}`);scrollTo(0,0)}} key={index} className=" border-2 border-start rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ">
                    <img src={item.image} alt="" className=" w-full h-64 object-cover rounded-lg " />
                    <div className="p-4 ">
                        <div className=" flex items-center gap-2 text-sm text-center text-green-500">
                            <p className="w-2 h-2 bg-green-500 rounded-full"></p><p className="">Available</p>
                        </div>
                        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                        <p className="text-gray-600 text-sm ">{item.category}</p>
                        
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/coachs');scrollTo(0,0)}} className='bg-start rounded-full px-16 py-4 mt-10  text-white font-semibold '>more</button>
    </div>
  )
}

export default TopCoachs