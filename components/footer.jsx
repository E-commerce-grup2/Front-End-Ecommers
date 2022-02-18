import React from "react";
import Image from "next/image";
import imgFooter from "../img/Group 108.png";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="bg-black flex flex-col items-center lg:flex-row justify-between px-4 lg:py-2">
        <div className=" mt-2 lg:mt-0 lg:px-4">
          <Link href="/privacyPolicy">
            <a href="#" className="uppercase text-white hover:text-rose-600">
              Privacy Policy
            </a>
          </Link>
        </div>
        <div className="mt-2 lg:mt-0">
          <a href="" className=" text-white hover:text-rose-600 ">
            Contact Us
          </a>
          <div className=" flex justify-starts lg:justify-between lg:px-5 lg:py-1">
            <button className="px-4 py-1 lg:px-0 lg:py-0">
              <a href="">
                <BsWhatsapp className="fill-[white] hover:fill-rose-600" />
              </a>
            </button>
            <button>
              <a href="">
                <AiFillInstagram className="fill-[white] hover:fill-rose-600" />
              </a>
            </button>
          </div>
        </div>
        <div>
          <a href="#" className=" block w-[250px]">
            <Image className="" src={imgFooter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
