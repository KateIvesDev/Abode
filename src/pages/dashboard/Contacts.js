import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import data from '../../data/contacts'

export default function Contacts(){

    const contactData = data[0].contacts
    
    let contactCards = contactData.map(contact => {
       return (
        <div key={contact.id} className='bg-white w-[300px] rounded-3xl shadow p-6'>
            <h3 className='text-center font-bold'>{contact.firstName} {contact.lastName}</h3>
            <h4 className='text-center font-bold'>{contact.company}</h4>
            <div className='h-0 border-b my-4'></div>
            <span className='block uppercase text-gray-500 text-sm my-2'>Phone Number</span>
            <h5><i className="fa-solid fa-phone text-xs"></i> {contact.phone}</h5>
            <span className='block uppercase text-gray-500 text-sm my-2'>Email</span>
            <h5><i className="fa-solid fa-envelope text-xs"></i> {contact.email}</h5>
            <div className='h-0 border-b my-4'></div>
            <div className='flex flex-row justify-end gap-4'>
                <span>View notes</span>
                <i className="fa-solid fa-pen"></i>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>)
    })

    return(
        <div className='h-screen'>
            <div className='flex flex-row justify-between'>
                <h2 className='font-bold text-xl'>Contacts</h2>
                <Button name="Create contact"></Button>
            </div>
            <div className='flex flex-row flex-wrap gap-2'>
                <div className='flex flex-col'>
                    <label htmlFor='firstName' className='text-xs'>First Name</label>
                    <input type='text' name="firstName" placeholder="First Name" className='rounded-3xl p-2'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='lastName' className='text-xs'>Last Name</label>
                    <input type='text' name="lastName" placeholder="Last Name" className='rounded-3xl p-2'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='company' className='text-xs'>Company</label>
                    <input type='text' name="company" placeholder="Company" className='rounded-3xl p-2'/>

                </div>
                <div className='flex flex-col'>
                    <label htmlFor='tel' className='text-xs'>Phone</label>
                    <input type='tel' name="tel" placeholder="Telephone" className='rounded-3xl p-2'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email' className='text-xs'>Email</label>
                    <input type='email' name="email" placeholder="Email" className='rounded-3xl p-2'/>
                </div>
            </div>

            <div className='flex flex-row flex-wrap p-2 gap-4 w-full my-4 justify-center'>
               {contactData ? contactCards : "No Contacts yet."}
            </div>
        </div>
        
        
        
    )
}