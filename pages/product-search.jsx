import Head from "next/head";
import Image from "next/image";
import bgimage from "../img/rem 1.png";
import bgimage2 from "../img/ganyu 1.png";
import productImage from "../img/product1.jpg";
import styles from "../styles/product.module.css";
import Card from "../components/productCard";
import Counter from "../components/counter"
import ReactLoading from 'react-loading';
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router';
import axios from 'axios'

export default function product(props) {
    
    const router = useRouter()
    const items = props.products.data

return (
    <section>
    <div className="grid grid-cols-3">
        <div className="grid grid-rows-1">
        </div>
        <div className="grid grid-rows-1">
            <div class="my-10">
                <div class="mb-3 xl:w-150">
                <div class="input-group relative flex flex-inherit items-stretch w-full mb-4">
                    <input
                    type="search"
                    class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Product Name"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                    />
                    <button
                    class="btn px-5 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500"
                    type="button"
                    id="button-addon2"
                    onClick={() => window.open("http://localhost:3000/product-search", "_blank")}>  
                    <p className="px-2">search</p>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        class="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
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
        <div className="grid grid-rows-1">
        </div>
    </div> 
    <div className="grid grid-cols-3">
        <div className="grid grid-rows-1">
            <div className="mt-[-90px]">
                <Image className="bg1" src={bgimage} />
            </div>
        </div>
        <div className="grid grid-rows-3 mt-[10px]">
             {/* card product */}
             {items ? items.map((el, i) => (
              <div class="max-w-sm w-full lg:max-w-full lg:flex ml-[-2px] mt-[5px] mb-[8px] mr-[5px]">
              <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-t border-gray-400 lg:border-l rounded lg:border-t lg:border-gray-400 bg-[#FCFCFC] rounded-b lg:rounded-b-none lg:rounded-r-none p-4 flex flex-col justify-between leading-normal shadow-lg hover:shadow-inherit">
                <div class="max-w-[225px] max-h-[125px] mt-[-5px] flex items-justify flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden hover:shadow-inner active:bg-slate-50 cursor-pointer ">
                  <Image class="" src={productImage}  onClick={() => window.open("http://localhost:3000/id")} />
                </div>
              </div>  
              <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-[#F3F0F0] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg hover:shadow-inherit ">
              <div class="mb-8 mt-[-5px]">
                <div class="mb-2 text-gray-900 font-bold text-base">
                    {el.Name}
                </div>
                <p class="text-green-700 text-sm mb-2">
                    <NumberFormat value={el.Price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} decimalSeparator={'.'} />
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
            )) : (<div className='bg-black/25  h-screen relative'>
              <ReactLoading className='mx-auto absolute inset-0 top-36' type='cylon' color='#FA1D58' height={300} width={300} />
            </div>)}
            {/* End card product */}
        </div>
        <div className="grid grid-rows-1">
            <div className="mt-[-90px]" >
                <Image className="bg2" src={bgimage2} />
            </div>
        </div>
    </div>
    </section>
    );
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
