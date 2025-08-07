import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {backendUrl,token,setToken}=useContext(AppContext)
  const navigate=useNavigate()
  const [state,setState]=useState('Sign Up')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')

  const onSubmitHandler = async(event)=>{
    event.preventDefault()
    try {
      if(state==='Sign Up'){
        const {data}=await axios.post(backendUrl+'/api/user/register',{name,email,password})
        if (data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)

        }
      }
      else{
        const {data}=await axios.post(backendUrl+'/api/user/login',{email,password})
        if (data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)

        }
       

      }
    
      
    } catch (error) {
      toast.error(error.message)
      
    }

  }
  useEffect(()=>{
    if(token){
      navigate('/')

    }

  },[token])

  return (
    <form onSubmit={onSubmitHandler} action="" className=" min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-96 border rounded-xl text-zinc-600 text-sm shadow-lg ">
        <p className="text-2xl font-semibold">{state === 'Sign Up'? "Create Account":"Login"}</p>
        <p className="">Please {state === 'Sign Up'? "sign up":"log in"} to reserve your appointment</p>
        {state ==="Sign Up"&&

        <div className="w-full">
          <p className="">Full Name</p>
          <input type="text" onChange={(e)=>setName(e.target.value)}  value={name} required className="border border-zinc-300 w-full p-2 mt-1 rounded" />
        </div>

        }

        

        <div className="w-full">
          <p className="">Email</p>
          <input type="email"onChange={(e)=>setEmail(e.target.value)}  value={email} required className=" border border-zinc-300 w-full p-2 mt-1 rounded  " />
        </div>

        <div className="w-full">
          <p className="">Password</p>
          <input type="password"onChange={(e)=>setPassword(e.target.value)}  value={password} required className="border border-zinc-300 p-2 mt-1 w-full rounded " />
        </div>

        <button type='submit' className='w-full bg-end text-white rounded-md py-2 text-base'>{state === 'Sign Up'? "Create Account":"Login"}</button>
        {
          state ==="Sign Up"
          ? <p className="">Already have an account?<span onClick={()=>setState('Login')} className="text-end underline cursor-pointer">Login here</span> </p>
          : <p className="">Create an new account? <span  onClick={()=>setState('Sign Up')} className="text-end underline cursor-pointer">click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login