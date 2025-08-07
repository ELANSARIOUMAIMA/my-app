import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'


export const AdminContext=createContext()


const AdminContextProvider=(props)=>{

    const [aToken,setAToken]=useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const[coaches,setCoaches]=useState([])
    
    const getAllCoaches = async()=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/admin/all-coaches',{},{headers:{aToken}})
            if(data.success){
                setCoaches(data.coaches)
                console.log(data.coaches)

            }
            else{
                toast.error(data.message)
                
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }

    }

    const changeAvailability=async(coId)=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/admin/change-availability',{coId},{headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllCoaches()

            }
            else{
                toast.error(data.message)
                
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }
    const value={
        aToken,setAToken,
        backendUrl,coaches,
        getAllCoaches,
        changeAvailability

    }
    return( <AdminContext.Provider value={value}>
                {props.children}
            </AdminContext.Provider>
    )
}
export default AdminContextProvider
