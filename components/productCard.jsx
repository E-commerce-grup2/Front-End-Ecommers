import Image from "next/image";
import productImage from "../img/product1.jpg"; 
import styles from "../styles/product.module.css";
import Counter from "./counter.jsx"
import React, { useState } from 'react'
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router';
import axios from 'axios'


export default function productCard(props) {

  const router = useRouter()
  const items = props.products

  return (
  <div class="max-w-sm w-full lg:max-w-full lg:flex ml-[-2px] mt-[5px] mb-[8px] mr-[5px]">
    <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-t border-gray-400 lg:border-l rounded lg:border-t lg:border-gray-400 bg-[#FCFCFC] rounded-b lg:rounded-b-none lg:rounded-r-none p-4 flex flex-col justify-between leading-normal shadow-lg hover:shadow-inherit">
      <div class="max-w-[225px] max-h-[125px] mt-[-5px] flex items-justify flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden hover:shadow-inner active:bg-slate-50 cursor-pointer ">
        <Image class="" src={productImage}  onClick={() => window.open("http://localhost:3000/id")} />
      </div>
    </div>  
    <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-[#F3F0F0] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg hover:shadow-inherit ">
    <div class="mb-8 mt-[-5px]">
      <div class="mb-2 text-gray-900 font-bold text-base">
        RG Gundam Unicorn
      </div>
      <p class="text-green-700 text-sm mb-2">
        <NumberFormat value={300000000} displayType={'text'} thousandSeparator={true} prefix={'Rp'} decimalSeparator={'.'} />
      </p>
      </div>
      <div class="p-2 flex item-center mt-[-42px]">
         <Counter />
      </div>
      <div class="flex justify-end">
        <div className='pb-1'>
          <button className='mt-[4px] mr-[-8px] text-center px-1 py-1 rounded-xl my-6 block mx-auto text-xs bg-[#FF9900] hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500' 
            onClick={() => window.open("http://localhost:3000/checkout", "_blank")} >
            Add to cart 
          </button>
        </div>  
      </div>
    </div>
  </div>
  );
};


export async function getStaticProps() {
  const res = await axios.get('http://18.136.193.63:8081/products')
  const products = await res.data
  return {
    props: {
      products
    }, // will be passed to the page component as props
  }
}

