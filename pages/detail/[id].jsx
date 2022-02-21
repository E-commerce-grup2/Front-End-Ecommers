import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
useRouter


function DetailProduct() {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [qty, setQty] = useState('')
    const [desc, setDesc] = useState('')
    const [many, setMany] = useState('')

    const getToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    const detailItems = useSelector(({ detailItem }) => detailItem)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {

        const findItem = detailItems.find(el => el.ID == +id)
        if (findItem) {
            setTitle(findItem.Name)
            setPrice(findItem.Price)
            setQty(findItem.Qty)
            setDesc(findItem.Description)
        }

    }, [detailItems])

    return (
        <>
            <section className='max-w-full flex my-10'>
                <div className='my-10 tablet:w-3/5'>
                    <div className='container max-w-lg mx-auto mt-5 tablet:mx-10 tablet:max-w-full'>
                        <div className='mx-10  flex'>
                            <img className='w-60 rounded-md' src="https://i.pinimg.com/736x/88/92/b1/8892b155d79f5b5501267345d9cbdb5e.jpg" alt="" />
                            <div className='my-10 px-8 select-none'>
                                <h3 className='text-base font-semibold py-3'>{title}</h3>
                                <p className='text-xl font-extrabold'>
                                    <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} decimalSeparator={'.'} />
                                </p>
                                <p className='text-gray-400 text-sm mt-4'>{desc}</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Card Grand Total */}
                <div className='relative tablet:w-64 laptop:w-auto'>
                    <div className='container fixed bg-white border border-slate-300 rounded-lg drop-shadow-xl laptop:max-w-xs laptop:my-24 laptop:mx-10 laptop:h-auto '>
                        <div className='px-5 py-4'>
                            <h2 className='text-xl font-semibold antialiased text-slate-700 text-center'>Cart</h2>
                            <div className='flex justify-between p-2 mt-3'>
                                <p className='text-md text-gray-600-800 mt-3'>Stock {qty} </p>
                                <div className="inline-block relative w-14">
                                    <select className="select-cart hover:border-gray-400 px-3 py-2 focus:outline-none focus:shadow-outline" value={many} onChange={(e) => setMany(e.target.value)}>
                                        {[...Array(qty).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='flex justify-between p-1'>
                                <p className='text-sm text-slate-400'>Shipping Fee: </p>
                                <p className='text-sm text-slate-400'>Rp. 50.000 </p>
                            </div> */}
                            <div className='flex justify-between p-2 '>
                                <p className='text-lg text-slate-400 font-medium'>SubTotal </p>
                                <p className='text-lg text-slate-800 font-bold'><NumberFormat value={500000} displayType={'text'} thousandSeparator={true} prefix={'Rp'} decimalSeparator={'.'} /></p>
                            </div>
                        </div>
                        <div className='absolute translate-x-1 top-44'>
                            <div className='flex bg-white px-2 py-5 rounded-md drop-shadow-md border border-slate-300'>

                                <button className='bg-yellow-500 px-4 py-3 mx-3 rounded-md text-white font-normal inline-flex hover:bg-yellow-600 active:bg-yellow-500'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg> Add Cart</button>
                                <button className='px-4 py-3 mx-3 text-green-500 rounded-md font-normal ring-1 ring-green-500 inline-flex hover:text-white hover:bg-green-600 active:bg-green-700'>Payment <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg></button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailProduct