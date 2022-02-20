import Head from "next/head";
import Image from "next/image";
import bgimage from "../img/actionfigure.png";
import styles from "../styles/product.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  
import Card from "../components/productCard"


function product1() {
    return (
    <div>
      <div className="grid grid-cols-1">
        <div class="flex-auto text-right justify-left mt-[20px] mr-[185px]">
          <p className="mb-2 tracking-tight leading-[69px] font-poppins font-bold text-[50px] uppercase">
              Action Figure Selection
          </p>
        </div>
      </div> 
      <div className="grid grid-cols-2">
        <div class="grid grid-rows-1">
            <div class="ml-[-50px] mt-[10px] mr-[5px]">
                <Image src={bgimage} />
            </div>
        </div>
        <div class="grid grid-rows-1 mt-[10px]">
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
      </div>
    </div>
    );
  }
export default product1