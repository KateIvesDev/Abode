import React, {useContext, useState, useEffect, useRef} from 'react'
import {auth, db} from '../firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import {doc, getDoc} from 'firebase/firestore'

const AuthContentx = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const userInfo = useRef()

    function signup(email, password, auth){
        createUserWithEmailAndPassword(auth, email, password)
        return
    }
    function login(email, password, auth){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout(){
        return signOut(auth)
    }
}