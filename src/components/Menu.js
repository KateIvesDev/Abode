import React, { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Menu(props){

    const { logout } = useAuth()
    const { setOpenMenu } = props

    return (
        <div className='absolute bg-white right-0 mt-[65px] flex flex-col w-1/4 transition-all ease-in-out delay-300 drop-shadow-md'>
            <div className='flex justify-end p-4'>
                <i className='fa-solid fa-xmark text-xl sm:text-3xl cursor-pointer' onClick={() =>setOpenMenu(false)}></i>
            </div>
            <ul className='p-4 flex flex-col gap-3'>
                <li>Profile</li>
                <li>Settings</li>
                <li className='cursor-pointer' onClick={() => {
                    logout()
                    setOpenMenu(false)
                }}>Logout</li>
            </ul>
        </div>
    )
}