import React, { useState } from 'react'
import Link from 'next/link'
import LogoLogin from '../img/Logo-login.png'
import NotifErr from '../components/error'
import NotifSucc from '../components/success'
import ReactLoading from 'react-loading';
import Image from 'next/image'
import { useRouter } from 'next/router'
import axios from 'axios'

function signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    function handleSubmit(e) {
        e.preventDefault();
        const data = { email, password }
        setLoading(true)
        axios.post('http://18.136.193.63:8081/users/login', data)
            .then(({ data }) => {
                if (data) {
                    setEmail('')
                    setPassword('')
                    setTimeout(() => {
                        setSuccess('')
                        router.push('/')
                    }, 2000);
                    setSuccess(data.message)
                    localStorage.setItem('token', data.data.token)
                }
            })
            .catch((err) => {
                setError(err.response.data.message)
                setTimeout(() => {
                    setError('')
                }, 3000);
            })
            .finally(() => {
                setLoading(false)
            })

    }
    if (loading) {
        return (
            <div className='bg-black/25  h-screen relative'>
                <ReactLoading className='mx-auto absolute inset-0 top-36' type='cylon' color='#FA1D58' height={300} width={300} />
            </div>
        )
    }
    return (
        <>
            <div className='md:flex md:flex-row'>
                <div className='mt-28 mx-16 md:shrink-0 md:pl-32'>
                    <Image src={LogoLogin} alt='logo signin' width={300} height={300} ></Image>
                </div>
                {success && (
                    <NotifSucc succs={success} />
                )}
                <div className='continer max-w-sm h-auto mx-auto mt-28 bg-white drop-shadow-xl rounded-xl'>
                    <h2 className='text-center pt-5 text-2xl text-primary'>Sign In</h2>
                    {error && (
                        <NotifErr errors={error} />
                    )}
                    <form>
                        <div className='mt-5 mx-12'>
                            <label className='block'>
                                <span className='block text-lg font-medium text-slate-700'>Email</span>
                                <input type="email" className='form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ' placeholder='example@mail.com' autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                        </div>
                        <div className='mt-3 mx-12'>
                            <label className='block'>
                                <span className='block text-lg font-medium text-slate-700'>Password</span>
                                <input type="password" className='form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200' placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
                            </label>
                        </div>
                        <div className='mt-3'>
                            <div className='text-right italic mr-14'>
                                <small className='text-indigo-400'><Link href="/signup">Don't have account?</Link></small>
                            </div>
                            <div className='pb-1'>
                                <button className='text-center px-7 py-2 rounded-xl my-6 block mx-auto text-white text-lg bg-primary hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500' onClick={handleSubmit} >Log In </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default signin