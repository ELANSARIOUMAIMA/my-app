import React, { useState } from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Navbar = () => {
    const navigate = useNavigate();

    const {token,setToken}= useContext(AppContext)
    const [showMenu,setShowMenu]=useState(false);


    const logout=()=>{
        setToken(false)
        localStorage.removeItem('token')
    }
  
   

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-end ">
        <img  onClick={()=>navigate('/')}src={assets.logo} alt="" className="w-1/5 cursor-pointer" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className="py-1">HOME</li>
                <hr className="border-none outline-none h-0.5  m-auto w-3/5 hidden bg-secondary" />
            </NavLink>

            <NavLink to='/coachs'>
                <li className="py-1">ALL COACHS</li>
                <hr className="border-none outline-none h-0.5 m-auto w-3/5 hidden bg-secondary" />
            </NavLink>

            <NavLink to='/about'>
                <li className="py-1">ABOUT</li>
                <hr className="border-none outline-none h-0.5 m-auto w-3/5 hidden bg-secondary" />
            </NavLink>

            <NavLink to='/contact'>
                <li className="py-1">CONTACT</li>
                <hr className="border-none outline-none h-0.5  m-auto w-3/5 hidden bg-secondary" />
            </NavLink>
        </ul>
        <div className="flex item-center gap-4 cursor-pointer    relative">
            {token ? <div className="flex items-center gap-4 group ">
                
                <img src={assets.profile_pic} alt="" className="w-8 rounded-full" />
                <img src={assets.dropdown_icon} alt="" className="w-2.5" />
                
                <div className=" absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                    <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                        <p onClick={() => navigate('/my-profile')}className="hover:text-black cursor-pointer">My Profile</p>
                        <p onClick={() => navigate('/my-appointments')}className="hover:text-black cursor-pointer">My Appointments</p>
                        <p onClick={logout} className="hover:text-black cursor-pointer ">Logout</p>
                    </div>
                </div>
            </div>
                   :<button onClick={() => navigate('/login')} className="bg-end text-white px-8 py-3  rounded-full">creat account</button>
            }


            <img  src={assets.menu_icon} alt="" className="w-6 md:hidden"  onClick={()=>setShowMenu(true)}/>
            {/*------Mobile Menu-----*/}
            <div className={` md:hidden top-0 right-0 bottom-0 z-20 bg-white  overflow-hidden transition-all ${showMenu ?'fixed w-full' :'w-0 h-0'}`}>
                <div className="flex items-center justify-between px-5 py-6 ">
                    <img src={assets.logo} alt="" className="w-36" />
                    <img  onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" className="w-7 cursor-pointer" />
                </div>
                <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                    <NavLink  to='/' onClick= {()=>setShowMenu(false)}>        <p className="px-4 py-2 rounded-full inline-block">HOME</p>         </NavLink>
                    <NavLink  to='/coachs' onClick= {()=>setShowMenu(false)}>  <p className="px-4 py-2 rounded-full inline-block">ALL COACHES</p>  </NavLink>
                    <NavLink to='/about'  onClick= {()=>setShowMenu(false)}>   <p className="px-4 py-2 rounded-full inline-block">ABOUT</p>        </NavLink>
                    <NavLink  to='/contact' onClick= {()=>setShowMenu(false)}> <p className="px-4 py-2 rounded-full inline-block">CONTACT</p>      </NavLink>
                </ul>
            </div>
         
        
            
            
        </div>
    </div>
  )
}

export default Navbar