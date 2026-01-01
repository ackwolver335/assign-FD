import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function GetStarted() {

    // constant regarding page navigation
    const navigate = useNavigate();

  return (
     <div className="py-10 pb-24 md:pb-36 lg:pb-44 xl:pb-56 2xl:pb-64 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-8 sm:px-26 bg-transparent flex flex-col gap-3 sm:gap-5 items-center">
        <h1 className="text-white font-poppins text-xl sm:text-3xl text-center font-semibold"> Ready to Get Started? </h1>
        <p className="text-sm text-center text-white font-gg lg:text-base xl:text-lg">
            Join thousands of users who are staying productive with TaskMaster.
        </p>
        <button onClick={() => { navigate('/usertask') }} className="text-mainCR text-sm lg:text-base font-poppins font-semibold xl:font-bold active:scale-90 active:text-white ease-in duration-100 text-center px-2 py-1 sm:px-3 lg:px-4 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg bg-sideBG"> Get Started Free </button>
    </div>
  )
}
