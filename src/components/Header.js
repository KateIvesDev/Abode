import React, {useState} from 'react'
import Menu from './Menu'

export default function Header(){

    const [openMenu, setOpenMenu] = useState(false)
    
    return(
        <>
            {openMenu && <Menu setOpenMenu={setOpenMenu} />}
            <div className='w-full left-0 flex items-center justify-between p-4 shadow-md'>
            <h1 className='font-bold text-xl sm:text-2xl select-none'>abode</h1>
            <h2>Account Settings <i onClick={()=> setOpenMenu(true)} className="fa-solid fa-user cursor-pointer"></i></h2>
           
            </div>
        </>
       
    )
}