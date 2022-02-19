import Head from "next/head";
import Image from "next/image";
import bgimage from "../img/etc.png";
import styles from "../styles/product.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  
import productCard from "../components/productCard"


function product1() {
    return (
    <div>
      <div className="grid grid-cols-1">
        <div class="ml-[185px] mt-[20px]">
          <p className=" mb-2 tracking-tight leading-[69px] font-poppins font-bold text-[60px] uppercase">
              <p>Accessory & other stuff</p>
          </p>
        </div>
      </div> 
      <div className="grid grid-cols-2">
        <div class="grid grid-rows-1">
            <div class="ml-[-50px] mt-[10px]">
                <Image src={bgimage} />
            </div>
        </div>
        <div class="grid grid-rows-1 ">
            <div>
                INI ISI PRODUK
                <productCard />
            </div>
        </div>
      </div>
    </div>
    );
  }
export default product1