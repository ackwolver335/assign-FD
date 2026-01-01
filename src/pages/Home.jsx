import React, { useEffect } from "react";

// required components
import Intro from "../components/Intro";
import Features from '../components/Features'
import GetStarted from "../components/GetStarted";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    useEffect(() => {
        document.title = "Task Manage - Home";
        document.body.style.background = "#0f172a";
    }, []);

    return (
        <>
            <Navbar />
            <Intro />
            <Features />
            <GetStarted />
            <Footer />
        </>
    );
}
