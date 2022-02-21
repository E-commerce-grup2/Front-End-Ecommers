import React, { useEffect } from 'react'
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import allStore from '../store/actions';
import { useDispatch } from 'react-redux'
// import { useRouter } from 'next/router';


function Layout({ children }) {

    const dispatch = useDispatch()
    // const router = useRouter()
    // const path = router.pathname


    useEffect(() => {
        dispatch(allStore.fetchDetailProducts())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout