import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import imgLogo1 from "../img/st,small,507x507-pad,600x600,f8f8f8 1.png";
import imgLogo2 from "../img/Group 107.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  // function logout
  function Logout() {
    if (getToken) {
      localStorage.removeItem("token");
      router.push("/");
    }
  }

  return (
    <div>
      <div className="bg-white drop-shadow-lg">
        <div className="flex flex-col items-center lg:flex-row">
          <div className=" flex pt-3 px-5">
            <div className="w-30">
              <Image src={imgLogo1} />
            </div>
            <Image src={imgLogo2} />
          </div>
          <div className="flex items-center justify-between px-4 py-3 lg:py-0 border-b-2 lg:border-b-0">
            <div>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className=" focus:outline-none text-black block lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className={!isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={isOpen ? "block" : "hidden"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}
          >
            <div className="flex flex-col lg:flex-row mx-auto items-center">
              <p className="block px-4 py-2 lg:py-5 font-semibold text-black hover:text-rose-600">
                <Link href="/">Home</Link>
              </p>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full font-semibold px-4 py-2 lg:py-5 hover:text-rose-600 ">
                    Categories
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Action Figures
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Trading Card
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Model Kit Selection
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full text-left px-4 py-2 text-sm"
                              )}
                            >
                              Accessories and Other Stuff
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <p className="block px-4 py-2 lg:py-5 font-semibold text-black hover:text-rose-600">
                {" "}
                <Link href="/help">Help</Link>
              </p>
            </div>
            {getToken ? (
              <div className="flex flex-col lg:flex-row">
                <div className="block px-4 py-2 lg:py-5 space-x-1">
                  <button
                    className=" px-8 py-3 bg-rose-600 font-semibold  hover:bg-white text-white hover:text-rose-800 rounded-2xl transition duration-300"
                    onClick={Logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row items-center">
                <p className="block px-4 py-2 font-semibold lg:py-5 lg:px-10 text-black  hover:text-rose-600">
                  {" "}
                  <Link href="/signup">Create Account</Link>
                </p>
                <div className="block px-4 py-2 lg:py-5 space-x-1">
                  <button
                    className=" px-8 py-3 bg-rose-600 font-semibold text-white hover:text-rose-800 hover:bg-rose-100 hover:drop-shadow-md rounded-2xl transition duration-300"
                    onClick={() => {
                      router.push("/signin");
                    }}
                  >
                    Log In
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default navbar;
