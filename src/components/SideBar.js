import React, { useEffect, useState } from 'react'

export default function SideBar(){


    return(
        <div className='bg-white text-gray-800 px-5 h-screen min-w-[300px] shadow-md'>
            <div className='flex flex-row py-4 justify-between text-xl'>
                <h1 className='font-bold'>
                <i className="fa-solid fa-house"></i> abode
                </h1>
                <i className="fa-solid fa-bars cursor-pointer"></i>
            </div>
            <nav>
                <ul className='flex flex-col gap-6 py-6'>
                    <li><i className="fa-solid fa-house"></i> Home Details</li>
                    <li><i className="fa-solid fa-door-open"></i> Rooms</li>
                    <li><i className="fa-solid fa-screwdriver-wrench"></i> Projects</li>
                    <li><i className="fa-solid fa-address-book"></i> Contacts</li>
                </ul>
            </nav>
          
        </div>
    )
}