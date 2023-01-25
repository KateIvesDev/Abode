import React, {useState} from 'react'

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    function submitHandler(){
        if (!email || !password){
            setError('Please enter email and password.')
            return
        }
    }

    return(
        <div className='flex-1 flex flex-col text-xs sm:text-sm justify-center items-center gap-2 sm:gap-4'>
        <h1 className='font-extrabold text-2xl sm:text-4xl select-none'>LOGIN</h1>
        {error && <div className='w-full max-w-[40ch] border border-solid border-rose-400 text-rose-400 py-2 text-center'>{error}</div>}
        <input type='text' className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <input type='password' className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-400 border-b-2 border-solid border-white focus:border-cyan-300' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <button className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 hover:bg-white hover:text-slate-900' onClick={submitHandler}>
            Submit
        </button>
        
        </div>
    )
}