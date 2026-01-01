import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Intro() {

    // a constant regarding page navigations
    const navigate = useNavigate();

  return (
    <div className="py-8 sm:py-12 lg:py-16 xl:py-20 pt-16 sm:pt-26 lg:pt-32 xl:pt-40 px-8 sm:px-26 bg-transparent flex flex-col gap-3 sm:gap-5 items-center">
        <h1 className="text-white font-poppins text-xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold"> Organize your Life with Ease </h1>
        <p className="text-sm text-center text-white font-gg lg:text-base xl:text-lg">
            A powerful task management tool to keep you productive and focused on what matters most.
        </p>
        <button onClick={() => { navigate('/usertask') }} className="text-mainCR text-sm lg:text-lg font-poppins font-semibold xl:font-bold active:scale-90 active:text-white ease-in duration-100 text-center px-2 py-1 sm:px-3 lg:px-4 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg bg-sideBG"> Get Started </button>
    </div>
  )
}
