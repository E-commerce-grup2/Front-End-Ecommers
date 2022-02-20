import React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReactLoading from "react-loading";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index";
import Link from "next/link";
import swal from "sweetalert";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

const baseUrl = "http://18.136.193.63:8081/products";
function adminPage(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataStore = useSelector((data) => data.adminData.listAllProduct);

  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  // console.log("cek data store", dataStore);

  useEffect(() => {
    dispatch(allStore.getAllProduct());
    // console.log("cek data store update", dataStore);
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const cancelButtonRef = useRef(null);

  const openModalDelete = (id) => {
    setIdProduct(id);
    setOpen(true);
  };

  const doDelete = () => {
    axios
      .delete(`${baseUrl}/${idProduct}`, {
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
      .then((response) => {
        swal("Siip!", "Kamu berhasil delete produk", "success");
        dispatch(allStore.getAllProduct());
        setOpen(false);
      })
      .catch((error) => console.log("error"));
  };

  return (
    <div>
      {/* modal delete */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Yakin Hapus Produk Ini ?
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          produk ini akan terhapus permanen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => doDelete()}
                  >
                    Hapus
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Batal
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* end modal delete */}
      {/* product page here */}
      <div className="mt-10 mx-20 mb-10 grid gap-14 md:grid-cols-1 items-start">
        <div className="container shadow-lg rounded-xl px-8 pt-3 bg-gray-200">
          <h1 className="text-xl font-bold py-4 flex justify-center">
            Admin Page{" "}
          </h1>

          <div className=" bg-white border rounded-xl border-gray-200 mb-10 ">
            <div className="flex justify-end px-5 py-5">
              <Link href="/admin/createproduct">
                <button
                  type="button"
                  className=" px-6 pt-2.5 py-2  bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                >
                  Add Product
                </button>
              </Link>
            </div>
            <h1 className="font-semibold flex justify-center">
              {" "}
              Get All Product Section
            </h1>
            <div className="mt-7 w-4/5 mx-auto flex flex-wrap justify-center py-3">
              {/* card product */}
              {dataStore ? (
                dataStore.map((el, i) => (
                  <div className="flex justify-center mt-5 mx-3" key={i}>
                    <div className="rounded-lg shadow-lg bg-white w-52 hover:shadow-inherit active:bg-slate-50 cursor-pointer mb-10">
                      <img className="rounded-t-lg" src={el.Img} alt="" />
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
                          <Link href={`/admin/editproduct/${el.ID}`}>
                            <button
                              type="button"
                              className=" px-4 pt-2.5 py-2  bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                            >
                              Edit
                            </button>
                          </Link>
                          <button
                            type="button"
                            onClick={() => openModalDelete(el.ID)}
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
