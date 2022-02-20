import Head from "next/head";
import Image from "next/image";
import bgimage from "../img/rem 1.png";
import bgimage2 from "../img/ganyu 1.png";
import styles from "../styles/product.module.css";
import Card from "../components/productCard";
import axios from 'axios'
import { useRouter } from 'next/router';


function product() {
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
            <Card />
            <Card />
            <Card />
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

export default product