import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import { useAuth } from '../context/AuthContext'


export default function UserDashboard(){

  const { logout } = useAuth()

  const [page, setPage] = useState('')

  const callback = (selected) => {
    setPage(selected)
  }
  
    return(
        <div className='flex flex-row'>
        
          <SideBar pageCallback={callback}/>
          <div className='w-full flex flex-col flex-wrap'>
            <Header/>
            <Content getPage={page}/>
            <Footer/>
          </div>
        </div>
         
        
    )
}