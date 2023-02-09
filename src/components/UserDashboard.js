import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'


export default function UserDashboard(){

  const { logout } = useAuth()

    
    return(

        <div>
          <h1>Dashboard</h1>
          <button onClick={() => logout()}>Logout</button>
        </div>
    )
}