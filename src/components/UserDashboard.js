import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import DashboardContent from './DashboardContent'
import { useAuth } from '../context/AuthContext'


export default function UserDashboard(){

  const { logout } = useAuth()

    return(
        <div className='flex flex-row flex-1'>
        
          <SideBar />
          <DashboardContent/>
         
     
        </div>
    )
}