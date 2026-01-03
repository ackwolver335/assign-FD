import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

// required pages
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import UserProfile from "../components/UserProfile";
import UserData from '../components/UserData'
import AddTasks from "../components/AddTasks";

export default function UserTasks() {
   
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Task Manage - Home";
        document.body.style.background = "#ffffff";

        const token = localStorage.getItem('token');
        if(token) navigate('/usertask');
        else navigate('/login')
    },[navigate]);

    return (
        <>
            <Alert />
            <Navbar />
            <UserProfile />
            <UserData />
            <AddTasks />
            <Footer />
        </>
    );
}
