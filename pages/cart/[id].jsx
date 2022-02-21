import React from 'react'



function CartDetail() {
    return (
        <>
            <section className='max-w-full h-auto flex bg-slate-50'>
                <div className='my-10 tablet:max-w-full laptop:w-3/4'>
                    <div className='container max-w-lg mx-auto mt-5 tablet:mx-10 laptop:max-w-2xl'>
                        <h1 className='text-lg font-semibold'>Shopping Cart Detail</h1>
                        {/* Card Item Cart */}
                        <ul className='max-w-lg laptop:max-w-5xl py-5'>
                            <li className='bg-slate-100 border border-slate-200 shadow-md mt-1 rounded-lg relative px-10'>
                                <div className='flex items-center px-5 ' >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className='text-sm font-medium p-2 inline-flex'>16 February 2022</p>
                                </div>
                                {/* Text Title */}
                                <div className='flex  py-3 px-5'>
                                    <img src='https://i.pinimg.com/736x/88/92/b1/8892b155d79f5b5501267345d9cbdb5e.jpg' className='w-20 rounded-md shadow-sm'></img>
                                    <div className='ml-4'>
                                        <h3 className='text-lg text-nowrap'>Usopp New World</h3>
                                        <span className='text-slate-500 text-sm'>1 item x Rp500.000</span>
                                        <p className=' text-base font-semibold mt-8'>SubTotal: Rp500000</p>
                                    </div>
                                    {/* Select Qty & Button Remove */}
                                    <div className='ml-20'>
                                        <div class="inline-block relative w-14">
                                            <select class="select-cart hover:border-gray-400 px-3 py-2 focus:outline-none focus:shadow-outline">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                        <div className='mt-8'>
                                            <button className='inline-block rounded-full text-slate-400 w-12 h-12'><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto hover:text-rose-500 hover:shadow-lg active:text-rose-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Card Grand Total */}
                <div className='w-0 relative tablet:w-64 tablet:gap-4 laptop:w-1/2'>
                    <div className='container fixed bg-white border border-slate-300 rounded-lg drop-shadow-xl laptop:max-w-sm laptop:my-24 laptop:mx-14 laptop:h-auto '>
                        <div className='px-10 py-5'>
                            <h2 className='text-xl font-semibold antialiased text-slate-700 text-center'>Detail Price</h2>
                            <div className='flex justify-between p-1'>
                                <p className='text-sm text-slate-400 mt-3'>Total Qty: </p>
                                <p className='text-sm text-slate-400 mt-3'>1 items </p>
                            </div>
                            <div className='flex justify-between p-1'>
                                <p className='text-sm text-slate-400'>Shipping Fee: </p>
                                <p className='text-sm text-slate-400'>Rp. 50.000 </p>
                            </div>
                            <div className='flex justify-between p-5 '>
                                <p className='text-lg text-slate-800 font-bold'>Total Price: </p>
                                <p className='text-lg text-slate-800 font-bold'>Rp. 550.000 </p>
                            </div>
                        </div>
                        <div className='absolute translate-x-24 top-48'>
                            <button className='bg-green-500 px-7 py-3 rounded-md text-white font-normal block mx-auto hover:bg-green-600 hover:-translate-y-1 hover:scale-110 duration-100 active:bg-green-700'>Proced Paymend</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartDetail