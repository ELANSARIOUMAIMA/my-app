import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const CoachsList = () => {
  const {coaches,aToken,getAllCoaches,changeAvailability}=useContext(AdminContext)
  useEffect(()=>{
    if(aToken){
      getAllCoaches()

    }

  },[aToken])



  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className="text-lg font-medium">All Coaches</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6 ">
        {
          coaches.map((item,index)=>(
            <div className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group" key={index}>
              <img src={item.image} alt="" className="w-60 h-60 object-cover transition-all duration-500"  />
              <div className="p-4">
                <p className="text-neutral-900 text-lg font-medium">{item.name}</p>
                <p className="text-zinc-800 text-sm">{item.category}</p>
                <p className="text-zinc-700 text-sm">{item.type.join(', ')}</p>
                <div className="mt-2 flex items-center gap-1 text-sm">
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} className="" />
                  <p className="">Available</p>
                </div>

              </div>


            </div>
          ))
        }

      </div>
      
      
    </div>
  )
}

export default CoachsList