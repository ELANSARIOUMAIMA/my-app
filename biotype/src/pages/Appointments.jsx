import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import {assets} from '../assets/assets_frontend/assets'
import RelatedCoaches from '../components/RelatedCoaches'


const Appointments = () => {

  const {coId}=useParams()
  const{coaches,currencySymbole}=useContext(AppContext)
  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const [coInfo,setCoInfo]=useState(null)
  const [coSlots,setCoSlots] = useState([])
  const [SlotIndex,setSlotIndex] = useState(0)
  const [SlotTime,setSlotTime] = useState('')


  const fetchCoInfo = async() => {
    const coInfo = coaches.find(coach=>coach._id === coId)
    setCoInfo(coInfo)
  }


  const getAvailableSlots = async()=>{
    setCoSlots([])
    // getting current date
    let today = new Date()

    for(let i=0 ;i<7;i++){
      // getting date with index
      let currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)


      // setting hours
      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1 :10 )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)

      }
      let timeSlots = []
      while(currentDate < endTime){
        let formattedTime =currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})

        // add slots to array
        timeSlots.push({
          datetime : new Date(currentDate),
          time : formattedTime
        })
        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes()+30)


      }
      setCoSlots(prev => ([...prev,timeSlots]))
    }

  }

  useEffect(()=>{
    fetchCoInfo()
  },[coaches,coId])

  useEffect(()=>{
    getAvailableSlots()
  },[coInfo])

  useEffect(()=>{
    console.log(coSlots)
  },[coSlots])




  return coInfo && (
    <div>
      {/*--------Coache Details -------*/}
      <div className="flex  flex-col sm:flex-row gap-4">
        <div className="">
          <img src={coInfo.image} alt="" className=" w-full h-64 object-cover  sm:max-w-72 rounded-lg " />
        </div>
        
        <div className="flex-1 border  border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/*--------Coach Info : name,degree,experience  -------*/}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {coInfo.name} 
            <img src={assets.verified_icon} alt="" className="w-5" />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p className="">{coInfo.degree}-{coInfo.category}- For {coInfo.type}</p>
            <button className=" py-0.5 px-2 border text-xs  rounded-full ">{coInfo.experience}</button>
          </div>
          {/*--------Coach :About  -------*/}
          <div className=" ">
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">About <img src={assets.info_icon} alt="" className="w-4" /></p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{coInfo.about}</p>

          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{currencySymbole}{coInfo.fees}</span>
          </p>
      </div>
      </div>
      {/*------------Meeting  slots----------*/}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p className="">Meeting times</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 ">
          {
            coSlots.length && coSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} 
                   key={index} 
                   className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${SlotIndex === index ? 'bg-end text-white':'text-gray-400 border  border-gray-400'} `}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>
            ))
          }
        </div>
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {coSlots.length && coSlots[SlotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} 
               key={index} 
               className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === SlotTime ? 'bg-end text-white':'text-gray-400 border  border-gray-400'}`}>
              {item.time.toLowerCase()}
            </p>

          ))}
        </div>
        <button className="my-6 px-14 py-3 border   bg-end rounded-full text-white text-sm font-light">Book an meeting</button>

      </div>
      {/* Listing Related Coaches */}
      <RelatedCoaches coId={coId} type={coInfo.type}/>
    </div>
  )
}

export default Appointments