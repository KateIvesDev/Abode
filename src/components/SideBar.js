import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Overview from '../pages/dashboard/Overview'

export default function SideBar(props){

    const [isMiniBar, setIsMiniBar] = useState(false)

    const isMiniClass = "bg-white hidden lg:block text-gray-800 px-5 min-w-[20px] shadow-md z-10"

    const isNotMiniClass = "bg-white hidden lg:block text-gray-800 px-5 min-w-[300px] shadow-md z-10"

    const isHiddenClass = "hidden"

    const sendPage = (e) => {
       
        const page = e.target.dataset.page
        console.log(page)
        props.pageCallback(page)
     
    }

    return(
        <div className={isMiniBar ? isMiniClass : isNotMiniClass}>
            <div className='flex flex-row py-4 justify-between text-xl'>
                <div onClick={() => setIsMiniBar(!isMiniBar)} className=''>
                    <i className="fa-solid fa-house text-blue-400"></i> 
                    <h1 className={isMiniBar ? isHiddenClass : 'inline-block font-bold text-blue-400 pl-2'}>abode
                    </h1>
                </div>
                <i className={isMiniBar ? isHiddenClass : "fa-solid fa-bars cursor-pointer"} 
                onClick={() => setIsMiniBar(!isMiniBar)}></i>
            </div>

            <nav>
                <ul className='flex flex-col gap-6 py-6 cursor-pointer'>
                    <li className='flex flex-row gap-2 w-full' onClick={sendPage} data-page='Overview'>
                            <i className="fa-solid fa-lightbulb p-1 w-10 -z-10"></i> 
                            <span className={isMiniBar ? isHiddenClass : "-z-10" }>Overview
                            </span>
                    </li>
                    <li onClick={sendPage} data-page='HomeDetails'
                        className='flex flex-row gap-2 w-full'>
                            <i className="fa-solid fa-house p-1 w-10 -z-10"></i>
                            <span className={isMiniBar ? isHiddenClass : " -z-10" }>Home Details</span>
                    </li>
                    <li onClick={sendPage} data-page='Rooms'
                    className='flex flex-row gap-2'>
                        <i className="fa-solid fa-door-open p-1 w-10 -z-10"></i>
                        <span className={isMiniBar ? isHiddenClass : " -z-10" }>Rooms</span>
                    </li>
                    <li onClick={sendPage} data-page='Projects'
                    className='flex flex-row gap-2'>
                        <i className="fa-solid fa-screwdriver-wrench  p-1 w-10 -z-10"></i> 
                        <span className={isMiniBar ? isHiddenClass : " -z-10" }>Projects</span>
                    </li>
                    <li onClick={sendPage} data-page='Contacts'
                    className='flex flex-row gap-2'>
                        <i className="fa-solid fa-address-book p-1 w-10 -z-10"></i> 
                        <span className={isMiniBar ? isHiddenClass : " -z-10" }>Contacts</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}