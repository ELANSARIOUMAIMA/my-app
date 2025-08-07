import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { Upload } from "lucide-react";

const MyProfile = () => {
  const [userData,setUserData] = useState({
    name:"EL ANSARI Oumaima",
    image:assets.profile_pic,
    email:"elansarioumaima2027@gmail.com",
    phone:"+212 6 ** ** ** **",
    address:{
      line1:"Hay Moulay Rachid",
      line2:"Moulay Ali Cherif, Morocco"
    },
    gender:"Female",
    dob:"2004-09-10"

  })
  const[isEdit,setIsEdit] = useState(false)
  const [backupData, setBackupData] = useState(null)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm '>
      {
        isEdit
        ?
        <>
        <img src={userData.image} alt="" className="w-36 rounded" />
        <label
              htmlFor="upload-image"
              className=" border border-start text-gray-800 hover:bg-end hover:border-none hover:text-white font-medium px-6 py-2 rounded-full transition duration-200 shadow-md w-1/3 flex items-center gap-2  cursor-pointer  text-sm"
        >
        <Upload  className="w-4 h-4 "/>New Image
        </label>

        <input
        id="upload-image"
         type="file"
         accept='image/*' 
         className="hidden"
         
         onChange={e=>{const file =e.target.files[0];
          if(file){
            const imageUrl = URL.createObjectURL(file);
            setUserData(prev=>({...prev,image:imageUrl}));
         }}} />
        </>
        :<img src= {userData.image} alt="" className="w-36 rounded" />
      }
      
      {
        isEdit
        ? <input type="text" value={userData.name} onChange={e=>setUserData(prev => ({...prev,name:e.target.value}))} className="bg-gray-50 text-3xl font-medium  max-w-60 mt-4" />
        : <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div className="">
        <p className="text-neutral-500 underline mt-3">CONATCT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p  className='text-blue-500'>{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {
          isEdit
          ? <input type="text"value={userData.phone} onChange={e=>setUserData(prev => ({...prev,phone:e.target.value}))} className="bg-gray-100 max-w-52  " />
          : <p className="text-blue-400">{userData.phone}</p>
          }
          <p className="font-medium">Address:</p>
          {
          isEdit
          ? <p className="">
            <input type="text"value={userData.address.line1} onChange={e=>setUserData(prev => ({...prev.address,line1:e.target.value}))} className="bg-gary-50" />
           
            <input type="text"value={userData.address.line2} onChange={e=>setUserData(prev => ({...prev.address,line2:e.target.value}))} className="bg-gray-50" />
            </p>
          : <p className="text-gray-500">
            <p className="">{userData.address.line1}</p>
          
            <p className="">{userData.address.line2}</p>
            
          </p>
          }
        </div>
      </div>

      <div className="">
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {
            isEdit
            ? <select name="" id="" className="max-w-20 bg-gray-100"value={userData.gender} onChange={e=>setUserData(prev => ({...prev,gender:e.target.value}))}>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
            : <p className="text-gray-400">{userData.gender}</p>
      }
          <p className="font-medium">Brithday:</p>
          {
            isEdit
            ? <input type="date"value={userData.dob} onChange={e=>setUserData(prev => ({...prev,dob:e.target.value}))} className="max-w-28 bg-gray-100" />
            : <p className="text-gray-400">{userData.dob}</p>
      }
        </div>
      </div>
      <div className="mt-10   flex ">
        {
          isEdit
          ?<>
          <button onClick={()=>setIsEdit(false)}   className="border border-start text-gray-800 hover:bg-green-500 hover:border-none hover:text-white font-medium px-6 py-2 rounded-full transition duration-200 shadow-md mr-4">Save information</button>
          <br className="" />
           <button onClick={()=>{
            {
            setUserData(backupData)  // Restore previous state
            setIsEdit(false)
}
           }}  className=" border border-start text-gray-800 hover:bg-end hover:border-none hover:text-white font-medium px-6 py-2 rounded-full transition duration-200 shadow-md">Cancel</button>
           </>
          :<button onClick={()=>{
            setBackupData(userData) // Save current state before editing
            setIsEdit(true)

          }}  className="border border-start text-gray-800 hover:bg-blue-500 hover:border-none hover:text-white font-medium px-6 py-2 rounded-full transition duration-200 shadow-md ">Edit</button>
        }
      </div>
      
      
      
      
      
      

    </div>
  )
}

export default MyProfile