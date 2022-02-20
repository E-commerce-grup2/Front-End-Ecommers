import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReactLoading from "react-loading";
import NumberFormat from "react-number-format";
import Link from "next/link";

function adminPage(props) {
  const router = useRouter();
  const items = props.products.data;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* product page here */}
      <div className="mt-10 mx-20 mb-10 grid gap-14 md:grid-cols-1 items-start">
        <div className="container shadow-lg rounded-xl px-8 pt-3 bg-gray-200">
          <h1 className="text-xl font-bold py-4 flex justify-center">
            Admin Page{" "}
          </h1>

          <div className=" bg-white border rounded-xl border-gray-200 mb-10 ">
            <div className="flex justify-end px-5 py-5">
              <button
                type="button"
                className=" px-6 pt-2.5 py-2  bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
              >
                Add Product
              </button>
            </div>
            <h1 className="font-semibold flex justify-center">
              {" "}
              Get All Product Section
            </h1>
            <div className="mt-7 w-4/5 mx-auto flex flex-wrap justify-center py-3">
              {/* card product */}
              {items ? (
                items.map((el, i) => (
                  <div className="flex justify-center mt-5 mx-3" key={i}>
                    <div className="rounded-lg shadow-lg bg-white w-52 hover:shadow-inherit active:bg-slate-50 cursor-pointer mb-10">
                      <img
                        className="rounded-t-lg"
                        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                        alt=""
                      />
                      <div className="p-6">
                        <h5 className="text-gray-900 text-base font-normal mb-2 select-none">
                          {el.Name}
                        </h5>
                        <p className="text-slate-400 text-sm mb-4 text-justify select-none truncate overflow-hidden">
                          {el.Description}
                        </p>
                        <p className="text-base font-semibold antialiased select-none">
                          <NumberFormat
                            value={el.Price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp"}
                            decimalSeparator={"."}
                          />
                        </p>
                        <div className="flex justify-between pt-5">
                          <Link href="/editproduct/[id]">
                            <button
                              type="button"
                              className=" px-4 pt-2.5 py-2  bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            type="button"
                            className=" px-4 pt-2.5 py-2  bg-rose-600 text-white font-medium text-xs leading-normal uppercase rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                          >
                            Delete
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminPage;

export async function getStaticProps() {
  const res = await axios.get("http://18.136.193.63:8081/products");
  const products = await res.data;
  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
