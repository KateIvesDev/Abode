import React, { useEffect, useState } from 'react'
import Overview from '../components/Overview'
import Contacts from '../components/Contacts'
import Rooms from '../components/Rooms'
import Projects from '../components/Projects'
import HomeDetails from '../components/HomeDetails'

export default function Content(props){

    let page = props.getPage

    let PageContent;

    switch(page){
        case 'Contacts':
            PageContent = <Contacts/>
            break;
        case 'Overview':
            PageContent = <Overview/>
            break;
        case 'Rooms':
            PageContent = <Rooms/>
            break;
        case 'Projects':
            PageContent = <Projects/>
            break;
        case 'HomeDetails':
            PageContent = <HomeDetails/>
    }
    
    
    return(
        <div className='p-4 w-full bg-slate-100 h-screen'>
           {page === "" ? <Overview/> : PageContent}
        </div>
    )
}