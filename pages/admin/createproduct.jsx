import React from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import swal from "sweetalert";

const urlCreate = "http://18.136.193.63:8081/products";

function Createproduct() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState(1);
  const [productQty, setProductQty] = useState(0);
  const router = useRouter();
  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const doCreate = () => {
    const body = {
      name: productName,
      price: parseInt(productPrice),
      qty: parseInt(productQty),
      category_id: parseInt(productCategory),
      description: productDesc,
    };

    axios
      .post(`${urlCreate}`, body, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
      .then((response) => {
        swal("siip!", "produk kamu berhasil ditambahkan", "success");
        router.push("/admin");
      })
      .catch((error) => console.log("error"));
  };
  return (
    <div>
      <div className="mt-10 mx-20 mb-10 grid gap-14 md:grid-cols-1 items-start">
        <div className="container shadow-lg rounded-xl px-8 pt-3 bg-gray-200">
          <h1 className="text-xl font-bold py-4 flex justify-center">
            Admin Page - Create Product{" "}
          </h1>
          <div className="flex justify-center">
            <div className="  bg-white rounded-lg mb-10 w-[500px]">
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body py-4 px-5">
                  <div className="flex justify-center">
                    <div className="mb-3 w-96">
                      <div className="mb-3 xl:w-96">
                        <label
                          for="exampleText0"
                          className="form-label inline-block mt-2 mb-2 text-gray-700 font-semibold"
                        >
                          Product Name
                        </label>
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleText0"
                          placeholder="product name here"
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 xl:w-96">
                        <label
                          for="exampleText0"
                          className="form-label inline-block mb-2 text-gray-700 font-semibold"
                        >
                          Product Description
                        </label>
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleText0"
                          placeholder="Description here"
                          onChange={(e) => setProductDesc(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 xl:w-96">
                        <label
                          for="exampleText0"
                          className="form-label inline-block mb-2 text-gray-700 font-semibold"
                        >
                          Product Category
                        </label>
                        <select
                          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                          onChange={(e) => setProductCategory(e.target.value)}
                        >
                          <option value="1">Trading Card Game</option>
                          <option value="2">Model Kit</option>
                          <option value="3">Action Figures</option>
                          <option value="4">Accessories and Other Stuff</option>
                        </select>
                      </div>
                      <div className="mb-3 xl:w-96">
                        <label
                          for="exampleText0"
                          className="form-label inline-block mb-2 text-gray-700 font-semibold"
                        >
                          Product Quantity
                        </label>
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleText0"
                          placeholder="Description here"
                          onChange={(e) => setProductQty(e.target.value)}
                        />
                      </div>
                      <div className="mb-5 pb-5 xl:w-96">
                        <label
                          for="exampleText0"
                          className="form-label inline-block mb-2 text-gray-700 font-semibold"
                        >
                          Product Price
                        </label>
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleText0"
                          placeholder="Text input"
                          onChange={(e) => setProductPrice(e.target.value)}
                        />
                        <label
                          for="formFile"
                          className="form-label inline-block mt-5 mb-2 text-gray-700 font-semibold"
                        >
                          *Input Your Image Here
                        </label>
                        <input
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
                    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          type="file"
                          id="formFile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 justify-center">
                  <div>
                    <button
                      type="button"
                      onClick={() => doCreate()}
                      className=" px-6 pt-2.5 py-2 mb-10 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createproduct;
