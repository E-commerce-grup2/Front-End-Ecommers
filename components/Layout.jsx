import React, { useEffect } from 'react'
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


function Layout({ children }) {

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout