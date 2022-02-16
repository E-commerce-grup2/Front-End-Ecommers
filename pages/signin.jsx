import React, { useState } from 'react'
import Link from 'next/link'
import LogoLogin from '../img/Logo-login.png'
import Image from 'next/image'

function signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, password);
    return (
        <>
            <div className='md:flex md:flex-row'>
                <div className='mt-32 mx-16 md:shrink-0 md:pl-32'>
                    <Image src={LogoLogin} alt='logo signin' width={300} height={300} ></Image>
                </div>
                <div className='continer max-w-sm h-auto mx-auto mt-32 bg-white drop-shadow-xl rounded-xl'>
                    <h2 className='text-center pt-5 text-2xl text-primary'>Sign In</h2>
                    <form action="">
                        <div className='mt-5 mx-12'>
                            <label htmlFor="email" className='block'>
                                <span className='block text-lg font-medium text-slate-700'>Email</span>
                                <input type="email" id='email' className='form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ' placeholder='example@mail.com' autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                        </div>
                        <div className='mt-3 mx-12'>
                            <label htmlFor="password" className='block'>
                                <span className='block text-lg font-medium text-slate-700'>Password</span>
                                <input type="password" id='password' className='form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                            </label>
                        </div>
                        <div className='mt-3'>
                            <div className='text-right italic mr-14'>
                                <small className='text-indigo-400'><Link href="/signup">Don't have account?</Link></small>
                            </div>
                            <div className='pb-1'>
                                <button className='text-center px-7 py-2 rounded-xl my-6 block mx-auto text-white text-lg bg-primary hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500' onClick={() => { }} >Log In </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signin