import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
//import { useAuth } from '../context/AuthContext'

export default function DashboardContent(){


    return(
        <div className='w-full'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}