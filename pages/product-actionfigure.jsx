import Head from "next/head";
import Image from "next/image";
import bgimage from "../img/actionfigure.png";
import styles from "../styles/product.module.css";
import Card from "../components/productCard";
import productImage from "../img/product2.jpg";
import Counter from "../components/counter";
import ReactLoading from "react-loading";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";
import axios from "axios";

export default function product1(props) {
  const items = props.products.data;

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
            {/* card product */}
            {items ? (
              items.map((el, i) => (
                <div
                  class="max-w-sm w-full lg:max-w-full lg:flex ml-[-2px] mt-[5px] mb-[8px] mr-[5px]"
                  key={i}
                >
                  <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-t border-gray-400 lg:border-l rounded lg:border-t lg:border-gray-400 bg-[#FCFCFC] rounded-b lg:rounded-b-none lg:rounded-r-none p-4 flex flex-col justify-between leading-normal shadow-lg hover:shadow-inherit">
                    <div class="max-w-[225px] max-h-[125px] mt-[-5px] flex items-justify flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden hover:shadow-inner active:bg-slate-50 cursor-pointer ">
                      <img
                        src={el.Img}
                        onClick={() => window.open("http://localhost:3000/id")}
                      />
                      {/* <Image
                        class=""
                        src={productImage}
                        onClick={() => window.open("http://localhost:3000/id")}
                      /> */}
                    </div>
                  </div>
                  <div class="max-w-[245px] w-full max-h-[145px] border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-[#F3F0F0] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal shadow-lg hover:shadow-inherit ">
                    <div class="mb-8 mt-[-5px]">
                      <div class="mb-2 text-gray-900 font-bold text-base">
                        {el.Name}
                      </div>
                      <p class="text-green-700 text-sm mb-2">
                        <NumberFormat
                          value={el.Price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp"}
                          decimalSeparator={"."}
                        />
                      </p>
                    </div>
                    <div class="p-2 flex item-center mt-[-42px]">
                      <Counter />
                    </div>
                    <div class="flex justify-end">
                      <div className="pb-1">
                        <button
                          className="mt-[4px] mr-[-8px] text-center px-1 py-1 rounded-xl my-6 block mx-auto text-xs bg-[#FF9900] hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500"
                          onClick={() =>
                            window.open(
                              "http://localhost:3000/checkout",
                              "_blank"
                            )
                          }
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-black/25  h-screen relative">
                <ReactLoading
                  className="mx-auto absolute inset-0 top-36"
                  type="cylon"
                  color="#FA1D58"
                  height={300}
                  width={300}
                />
              </div>
            )}
            {/* End card product */}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get("http://18.136.193.63:8081/products");
  const products = await res.data;
  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
