import Head from "next/head";
import Image from "next/image";
import bgimage from "../img/modelkit.png";
import styles from "../styles/product.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  
import productCard from "../components/productCard"


function product2() {
    return (
    <div>
      <div className="grid grid-cols-1">
        <div class="ml-[185px] mt-[20px]">
          <p className=" mb-2 tracking-tight leading-[69px] font-poppins font-bold text-[60px] uppercase">
              Model Kit Selection
          </p>
        </div>
      </div> 
      <div className="grid grid-cols-2">
        <div class="grid grid-rows-1">
            <div class="ml-[-70px] mt-[-90px]">
                <Image src={bgimage} />
            </div>
        </div>
        <div class="grid grid-rows-1">
            <div>
                Ini isi produk
                <productCard />
            </div>
        </div>
      </div>
    </div>
    );
  }

export default product2