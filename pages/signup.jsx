import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bg1 from "../img/bg1.jpg";
import NotifErr from "../components/error";
import NotifSucc from "../components/success";
import axios from "axios";
import { useRouter } from "next/router";

function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // Toggle Sign Up
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      const data = { name, email, password };
      axios
        .post("http://18.136.193.63:8081/users/register", data)
        .then(({ data }) => {
          if (data) {
            setName("");
            setEmail("");
            setPassword("");
            setTimeout(() => {
              setSuccess("");
              router.push("/signin");
            }, 2000);
            setSuccess(data.message);
          }
        })
        .catch((err) => {
          setError(err.response.data.message);
          setTimeout(() => {
            setError("");
          }, 3000);
        });
    }
  }

  // Function Validation
  const formValidation = () => {
    const error = {};
    let isValid = true;

    if (name.trim().length < 0) {
      error.nameShort = "Name cannot empty";
      isValid = false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error.mailtag = "Invalid Email";
      isValid = false;
    }
    if (password.length < 8) {
      error.passleng = "Password must be at least 8 chars long";
      isValid = false;
    }
    setError(error);
    return isValid;
  };

  return (
    <>
      <div className="flex flex-row relative">
        <div className="container  tablet:max-w-screen-md tablet:drop-shadow-2xl mb-[-20px]">
          <Image src={bg1} alt="bg-signup"></Image>
        </div>
        <div className="absolute w-80 h-auto right-5 z-30">
          {success && <NotifSucc succs={success} />}
          {Object.keys(error).map((key) => {
            return <NotifErr errors={error[key]} />;
          })}
        </div>
        <div className="absolute top-24 mx-14 bg-white drop-shadow-xl rounded-xl tablet:my-auto tablet:right-36">
          <h2 className="text-center pt-5 text-2xl text-primary">Sign Up</h2>
          <form>
            <div className="form-control mt-5 mx-12">
              <label className="block">
                <span className="block text-md font-medium text-slate-700">
                  Your Name
                </span>
                <input
                  type="text"
                  className="form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
                  placeholder="Your name..."
                  autoComplete="off"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </label>
            </div>
            <div className="form-control mt-5 mx-12">
              <label className="block">
                <span className="block text-md font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  className="form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
                  placeholder="example@mail.com"
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </label>
            </div>
            <div className="form-control mt-3 mx-12">
              <label className="block">
                <span className="block text-md font-medium text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  className="form-input placehold px-4 py-3 w-72 rounded-full shaddow-sm border border-slate-200"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
              </label>
            </div>
            <div className="mt-3">
              <div className="text-right italic mr-14">
                <small>
                  have account?
                  <span className="text-primary font-semibold">
                    <Link href="/signin"> Log In </Link>
                  </span>
                </small>
              </div>
              <div className="pb-1">
                <button
                  className="text-center px-7 py-2 rounded-xl my-6 block mx-auto text-white text-lg bg-primary hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500"
                  onClick={handleSubmit}
                >
                  {" "}
                  Sign Up{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default signup;
