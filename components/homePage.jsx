import React from "react";
import Image from "next/image";
import mainImg from "../img/Group 109.svg";

function homePage() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div class="grid px-[60px] self-center">
          <p className="text-rose-600 font-semibold">
            Register to get Special Discount !
          </p>
          <p className=" w-[500px] mb-2 tracking-tight leading-[60px] font-poppins font-bold text-[60px] uppercase">
            {" "}
            most valuable wibu toys in town
          </p>
          <p className="text-[32px] leading-[40px] font-[400] tracking-tight uppercase mb-8">
            limited model kit collection by gundamnit
          </p>
          <div class="flex justify-start">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex flex-inherit items-stretch w-full mb-4">
                <input
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Product Name"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn px-5 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                >
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
        <div class="mb-[-7px]">
          <Image src={mainImg} />
        </div>
      </div>
    </div>
  );
}

export default homePage;
