import Head from "next/head";
import Image from "next/image";
import bgimage from "../img/tcg.png";
import styles from "../styles/product.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  
import Card from "../components/productCard"


function product3() {
    return (
    <div>
      <div className="grid grid-cols-1">
        <div class="flex-auto text-right mt-[20px] mr-[185px]">
          <p className=" mb-2 tracking-tight leading-[60px] font-poppins font-bold text-[50px] uppercase">
               Trading Card Game Selection
          </p>
        </div>
      </div> 
      <div className="grid grid-cols-2">
        <div class="grid grid-rows-1">
            <div class="ml-[-100px] mt-[-35px]">
                <Image src={bgimage} />
            </div>
        </div>
        <div class="grid grid-rows-1 mt-[10px]">
            <div>
              <Card />
              <Card />
              <Card />
            </div>
        </div>
      </div>
    </div>
    );
  }

export default product3