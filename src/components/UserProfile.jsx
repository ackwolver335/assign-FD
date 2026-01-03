import React,{ useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CircleUser } from 'lucide-react'
import Alert from '../components/Alert';
import alertContext from '../context/alert/alertContext';

export default function UserProfile() {

    // for navigating to different pages
    let navigate = useNavigate();

    const { showAlert } = useContext(alertContext);

    // fetching starting point from the env
    const host = import.meta.env.VITE_API_URL;

    // creating an object for setting user's details
    const [userDetails,setUserDetails] = useState({
        fullName: '',
        username: '',
        email: ''
    })

    // method for fetching user's details
    const getUserKeys = async () => {
        const response = await fetch(`${host}/api/auth/getuser`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json();

        if(json.success){
            showAlert(true,'Success',"User's Data Fetched Successfully !");
            const user = json.user;
            setUserDetails({ fullName: user.fullName, username: user.username, email: user.email })
        } else showAlert(true,'Danger',Array.isArray(json.result) &&  json.result.length > 0 ? json.result[0].msg : json.message);
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
        } else {
            getUserKeys();
        }
        // eslint-disable-next-line
    },[]);

  return (
    <div className="py-8 sm:py-12 pt-16 sm:pt-26 lg:pt-36 xl:pt-40 px-8 sm:px-26 bg-transparent">
      
        {/* Initial User Profile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
            <CircleUser className="w-40 h-40 p-5 rounded-full text-white bg-navBG" />
            <div className="flex flex-col justify-between items-center md:items-start gap-1 lg:gap-2">
                <h1 className="text-center text-2xl lg:text-3xl font-poppins font-bold text-navBG"> {userDetails.fullName} </h1>
                <h4 className="text-center font-poppins font-semibold text-sm md:text-base lg:text-lg text-navBG/80"> @{userDetails.username} </h4>
                <p className="text-center font-gg font-semibold text-secondary ">
                    {userDetails.email}
                </p>
            </div>
        </div>

    </div>
  )
}
