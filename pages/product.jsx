import Head from "next/head";
import Image from "next/image";
import styles from "../styles/product.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";  


function product() {
    return (
      <div>
        <Navbar />
        <container>
        <div>
            Category Title
        </div>
        <div>
            ini badan page
        </div>
        </container>
        <Footer />
      </div>
    );
  }

export default product