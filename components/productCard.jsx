import Head from "next/head";
import Image from "next/image";
import productImage from "../img/product1.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  
import styles from "../styles/product.module.css";
import Counter from "./counter.jsx"


const productCard = () => {

  return (
  <div class="max-w-sm w-full lg:max-w-full lg:flex ml-[-2px] mt-[5px] mb-[8px] mr-[5px] ">
    <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-t border-gray-400 lg:border-l rounded lg:border-t lg:border-gray-400 bg-[#FCFCFC] rounded-b lg:rounded-b-none lg:rounded-r-none p-4 flex flex-col justify-between leading-normal">
      <div class="max-w-[225px] max-h-[125px] mt-[-5px] flex items-justify flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <Image src={productImage}   />
      </div>
    </div>  
    <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-[#F3F0F0] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8 mt-[-5px]">
      <div class="text-gray-900 font-bold text-base">Product name</div>
        <p class="text-green-700 text-sm mb-2">Rp. product price</p>
      </div>
      <div class="p-2 flex item-center mt-[-42px]">
         <Counter />
      </div>
      <div class="flex justify-end">
        <div className='pb-1'>
          <button className='mt-[4px] mr-[-8px] text-center px-1 py-1 rounded-xl my-6 block mx-auto text-xs bg-[#FF9900] hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500' 
            onClick={() => { }} >
            Add to cart 
          </button>
        </div>  
      </div>
    </div>
  </div>
  );
};

export default productCard