import React,{ useState } from "react";
import { SquareCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    // variable regarding navigation
    const navigate = useNavigate();

    // setting user for getting logged in or logged out
    const [user, setUser] = useState(() => {
        return Boolean(localStorage.getItem('token'));
    });

    // method for getting menus
    const toggleMenu = () => document.querySelector('.menuList').classList.toggle('-translate-y-50');

    const logOut = () => {
        localStorage.removeItem('token');
        setUser(false);
        navigate('/');
    }

    return (
        <div className="bg-navBG z-30 fixed top-0 right-0 left-0 flex flex-row justify-between py-2 px-3 sm:px-4 md:px-5 lg:py-3 xl:py-4">
            
            {/* initial block for Home Navigation */}
            <div className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer" onClick={() => navigate('/')}>
                <SquareCheck className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 text-white" />
                <h3 className="font-poppins font-semibold sm:text-lg text-white md:text-lg xl:text-xl"> TaskMaster </h3>
            </div>

            {/* Icons regarding Hover Menu */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-menu-button-wide-fill text-white w-5 sm:w-6 cursor-pointer md:hidden ease-in duration-200 active:scale-90" viewBox="0 0 16 16" onClick={toggleMenu}>
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
            </svg>

            {/* list regarding Navigation */}
            <div className="menuList flex flex-col absolute md:relative top-14 sm:top-16 sm:py-3 sm:px-4 shadow-md lg:shadow-lg md:shadow-none left-6 md:top-0 md:left-0 md:right-0 md:flex-row text-mainCR bg-white p-2 px-3 ease-in duration-200 rounded-sm sm:rounded-md -translate-y-50 md:translate-0 md:rounded-none md:text-white list-none items-center font-poppins font-semibold text-sm sm:text-base gap-1 sm:gap-2 md:gap-4 lg:gap-5 md:bg-transparent md:p-0">
                <li onClick={(e) => { e.preventDefault(); navigate('/'); document.querySelector('#features').scrollIntoView({ behavior: "smooth" }) }} className="cursor-pointer active:scale-90 ease-in duration-100"> Features </li>
                <li onClick={() => { navigate('/signup') }} className={`${user ? 'hidden' : ''} cursor-pointer md:border md:border-white/60 md:rounded-md lg:rounded-lg md:px-2 lg:px-3 md:py-1 active:scale-90 ease-in duration-100`}> Sign Up </li>
                <li onClick={() => { navigate('/login') }} className={`${user ? 'hidden' : ''} cursor-pointer md:border md:border-white/60 md:rounded-md lg:rounded-lg md:px-2 lg:px-3 md:py-1 active:scale-90 ease-in duration-100`}> Log In </li>
                <li onClick={() => { logOut(); navigate('/') }} className={`${user ? '' : 'hidden'} cursor-pointer md:border md:border-white/60 md:rounded-md lg:rounded-lg md:px-2 lg:px-3 md:py-1 active:scale-90 ease-in duration-100`}> Log Out </li>
            </div>

        </div>
    );
}
