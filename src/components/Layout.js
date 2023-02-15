import React from 'react'


export default function Layout(props){
    const {children} = props
    return (
        <div className='flex flex-col min-h-screen relative  text-gray-800'>
            <main className='flex-1 flex flex-col'>
                {children}
            </main>
        </div>
    )
}