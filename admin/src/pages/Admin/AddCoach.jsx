import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets_admin/assets'
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const AddCoach = () => {

  const [selectedBloodTypes, setSelectedBloodTypes] = useState([]);
  const bloodTypes = ['A+', 'A−', 'B+', 'B−', 'AB+', 'AB−', 'O+', 'O−'];

  const toggleBloodType = (value) => {
    setSelectedBloodTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
  };
  const [coImg, setCoImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('Nutrition')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')



  const { backendUrl, aToken } = useContext(AdminContext)
  const onSubmitHandler = async (event) => {
    event.preventDefault()//the form it will not deload the web page
    try {
      if (!coImg) {
        return toast.error('Image Not Selected')
      }
      const formData = new FormData()
      formData.append('image', coImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('category', speciality)
      formData.append('degree', degree)
      formData.append('type', JSON.stringify(selectedBloodTypes));
      formData.append('experience', experience)
      formData.append('about', about)
      formData.append('fees', Number(fees))
      formData.append('address', JSON.stringify({
        line1: address1,
        line2: address2
      }))

      // console log formdata
      formData.forEach((value, key) => {
        console.log(`${key}:${value}`);

      })
      const { data } = await axios.post(backendUrl + '/api/admin/add-coach', formData, { headers: { aToken } })
      if(data.success){
        toast.success(data.message)

        setCoImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
        setSelectedBloodTypes([])
      
      }else{
        toast.error(data.message)
      }



    } catch (error) {
      toast.error(error.message)
      console.log(error)

    }



  }



  return (
    <form onSubmit={onSubmitHandler} action="" className=" m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Coach</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="coach-img" className="">
            <img src={coImg ? URL.createObjectURL(coImg) : assets.upload_area} alt="" className="w-16 cursor-pointer bg-gray-100 rounded-full" />
          </label>
          <input onChange={(e) => setCoImg(e.target.files[0])} type="file" id="coach-img" hidden className="" />
          <p className="">Upload coach <br className="" /> picture</p>
        </div>

        <div className="flex flex-col lg:flex-row  items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4 ">

            <div className="flex flex-1  flex-col gap-1">
              <p className="  ">Coach name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required className="border rounded px-3 py-2" />
            </div>

            <div className="flex flex-1  flex-col gap-1">
              <p className="">Coach Email</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="border rounded px-3 py-2" />
            </div>

            <div className="flex flex-1  flex-col gap-1">
              <p className="">Coach Password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="border rounded px-3 py-2" />
            </div>

            <div className="flex flex-1  flex-col gap-1">
              <p className="">Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} name="" id="" className="border rounded px-3 py-2">
                <option value="1 Year" className="">1 Year</option>
                <option value="2 Year" className="">2 Year</option>
                <option value="3 Year" className="">3 Year</option>
                <option value="4 Year" className="">4 Year</option>
                <option value="5 Year" className="">5 Year</option>
                <option value="6 Year" className="">6 Year</option>
                <option value="7 Year" className="">7 Year</option>
                <option value="8 Year" className="">8 Year</option>
                <option value="9 Year" className="">9 Year</option>
                <option value="10 Year" className="">10 Year</option>

              </select>

            </div>

            <div className="flex flex-1  flex-col gap-1">
              <p className="">Fees</p>
              <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Fees" required className="border rounded px-3 py-2" />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-1  flex-col gap-1">
              <p className="">Speciality</p>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} name="" id="" className="border rounded px-3 py-2">
                <option value="Nutrition" className="">Nutrition</option>
                <option value="Fitness" className="">Fitness</option>
                <option value="Psychology" className="">Psychology</option>
              </select>
            </div>

            <div className="">
              <p className="mb-1">Blood Types</p>
              <div className=" flex  gap-4 border rounded px-3 py-2 overflow-x-scroll whitespace-nowrap max-w-full ">
                {bloodTypes.map((type) => (
                  <label key={type} className="inline-flex  items-center gap-2 text-gray-600">
                    <input type="checkbox" value={type} checked={selectedBloodTypes.includes(type)} onChange={() => toggleBloodType(type)} className="accent-primary " />{type}
                  </label>))}
              </div>
            </div>

            <div className="flex flex-1  flex-col gap-1">
              <p className="">Education</p>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="Education" required className="border rounded px-3 py-2" />
            </div>

            <div className="flex flex-1  flex-col gap-1">
              <p className="">Address</p>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="address 1" required className="border rounded px-3 py-2" />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="address 2" required className="border rounded px-3 py-2" />
            </div>

          </div>
        </div>

        <div className="">
          <p className="mt-4 mb-2">About Coach</p>
          <textarea onChange={(e) => setAbout(e.target.value)} value={about} placeholder="Write about coach" rows={6} required className="w-full px-4 pt-2 border rounded" />
        </div>
        <button type="submit" className='bg-primary px-10 py-3 mt-4 text-white  rounded-full'>Add Coach</button>


      </div>
    </form>
  )
}

export default AddCoach