import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomePage from "../components/homePage";
import Checkout from "./checkout";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Checkout />
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
}
