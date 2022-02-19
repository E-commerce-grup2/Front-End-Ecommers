import React, { useState } from 'react'
import Image from "next/image";
import mainImg from "../img/Group 109.svg";
import ReactLoading from 'react-loading';
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router';
import axios from 'axios'


export default function Home(props) {


  const router = useRouter()
  const items = props.products.data


  return (
    <>
      <div className="grid grid-cols-2">
        <div className="grid px-[60px] self-center select-none">
          <p className="text-rose-600 font-semibold">
            Register to get Special Discount !
          </p>
          <p className="w-[500px] mb-2 tracking-tight leading-[60px] font-poppins font-bold text-[60px] uppercase">
            {" "}
            most valuable wibu toys in town
          </p>
          <p className="text-[32px] leading-[40px] font-[400] tracking-tight uppercase mb-8">
            limited model kit collection by gundamnit
          </p>
          <div className="flex justify-start">
            <div className="mb-3 xl:w-96">
              <div className="input-group relative flex flex-inherit items-stretch w-full mb-4">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Product Name"
                  aria-label="Search"
                  aria-describedby="button-addon2" disabled />
                <button
                  className="btn px-5 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2">
                  <p className="px-2">search</p>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[-7px]">
          <Image src={mainImg} />
        </div>
      </div>

      <section className="max-w-full">
        <div className="py-10">
          <div className="py-2">
            <h1 className="text-center text-2xl font-semibold">All Products</h1>
          </div>
          <div className="mt-7 w-4/5 mx-auto flex flex-wrap justify-center py-3">
            {/* card product */}
            {items ? items.map((el, i) => (
              <div className="flex justify-center mt-3 mx-3" key={i}>
                <div className="rounded-lg shadow-lg bg-white w-52 hover:shadow-inherit active:bg-slate-50 cursor-pointer">
                  <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" />
                  <div className="p-6">
                    <h5 className="text-gray-900 text-base font-medium mb-2 select-none">{el.Name}</h5>
                    <p className="text-slate-400 text-sm mb-4 text-justify select-none">{el.Description}</p>

                    <p className='text-base font-semibold antialiased select-none'>
                      <NumberFormat value={el.Price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} decimalSeparator={'.'} />
                    </p>
                  </div>
                </div>
              </div>
            )) : (<div className='bg-black/25  h-screen relative'>
              <ReactLoading className='mx-auto absolute inset-0 top-36' type='cylon' color='#FA1D58' height={300} width={300} />
            </div>)}
            {/* End card product */}
          </div>
        </div>
      </section>

    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get('http://18.136.193.63:8081/products')
  const products = await res.data
  return {
    props: {
      products
    }, // will be passed to the page component as props
  }
}
