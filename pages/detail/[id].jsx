import React from 'react'
import NumberFormat from 'react-number-format';

function DetailProduct() {


    return (
        <>
            <section className='max-w-full flex my-10'>
                <div className='my-10 tablet:w-3/5'>
                    <div className='container max-w-lg mx-auto mt-5 tablet:mx-10 tablet:max-w-full'>
                        <div className='mx-10  flex'>
                            <img className='w-60 rounded-md' src="https://i.pinimg.com/736x/88/92/b1/8892b155d79f5b5501267345d9cbdb5e.jpg" alt="" />
                            <div className='my-10 px-8 select-none'>
                                <h3 className='text-base font-semibold py-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolorem!</h3>
                                <p className='text-xl font-extrabold'>
                                    <NumberFormat value={500000} displayType={'text'} thousandSeparator={true} prefix={'Rp'} decimalSeparator={'.'} />
                                </p>
                                <p className='text-gray-400 text-sm mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam magnam nihil quidem? Aliquid laudantium perspiciatis minus quod corporis tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores atque incidunt sapiente doloribus a neque, impedit sunt alias eos.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Card Grand Total */}
                <div className='relative tablet:w-64 laptop:w-auto'>
                    <div className='container fixed bg-white border border-slate-300 rounded-lg drop-shadow-xl laptop:max-w-sm laptop:my-24 laptop:mx-14 laptop:h-auto '>
                        <div className='px-10 py-5'>
                            <h2 className='text-xl font-semibold antialiased text-slate-700 text-center'>Cart</h2>
                            <div className='flex justify-start p-1 mt-3'>
                                <p className='text-sm text-slate-400 mt-3'>Qty </p>
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
                            </div>
                            {/* <div className='flex justify-between p-1'>
                                <p className='text-sm text-slate-400'>Shipping Fee: </p>
                                <p className='text-sm text-slate-400'>Rp. 50.000 </p>
                            </div> */}
                            <div className='flex justify-between p-2 '>
                                <p className='text-lg text-slate-800 font-medium'>SubTotal </p>
                                <p className='text-lg text-slate-800 font-bold'><NumberFormat value={500000} displayType={'text'} thousandSeparator={true} prefix={'Rp'} decimalSeparator={'.'} /></p>
                            </div>
                        </div>
                        <div className='absolute translate-x-2 top-48'>
                            <div className='flex'>
                                <button className='bg-green-500 px-7 py-3 rounded-md text-white font-semibold block mx-auto hover:bg-green-600 hover:-translate-y-1 hover:scale-110 duration-100 active:bg-green-700'>Proced Paymend</button>
                                <button className='bg-green-500 px-7 py-3 rounded-md text-white font-semibold block mx-auto hover:bg-green-600 hover:-translate-y-1 hover:scale-110 duration-100 active:bg-green-700'>Proced Paymend</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailProduct