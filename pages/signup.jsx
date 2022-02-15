import React, { useState } from 'react'
import Link from 'next/link'
import bg1 from '../img/bg1.jpg'
import Image from 'next/image'


function signup() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, password, name);
    return (
        <>
            <div className='flex flex-row relative'>
                <div className='container fixed tablet:max-w-screen-md drop-shadow-2xl'>
                    <Image src={bg1} alt='bg-signup'></Image>
                </div>
                <div className='continer absolute top-28 right-28 bg-white drop-shadow-xl rounded-xl tablet:my-auto tablet:right-36'>
                    <h2 className='text-center pt-5 text-2xl text-primary'>Sign Up</h2>
                    <form action="">
                        <div className='mt-5 mx-12'>
                            <label htmlFor="name" className='block'>
                                <span className='block text-md font-medium text-slate-700'>Your Name</span>
                                <input type="text" id='name' className='form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ' placeholder='Your name...' autoComplete='off' onChange={(e) => { setName(e.target.value) }} />
                            </label>
                        </div>
                        <div className='mt-5 mx-12'>
                            <label htmlFor="email" className='block'>
                                <span className='block text-md font-medium text-slate-700'>Email</span>
                                <input type="email" id='email' className='form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ' placeholder='example@mail.com' autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                        </div>
                        <div className='mt-3 mx-12'>
                            <label htmlFor="password" className='block'>
                                <span className='block text-md font-medium text-slate-700'>Password</span>
                                <input type="password" id='password' className='form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                            </label>
                        </div>
                        <div className='mt-3'>
                            <div className='text-right italic mr-14'>
                                <small>have account?<span className='text-primary font-semibold'><Link href="/signin"> Log In </Link></span></small>
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

export default signup