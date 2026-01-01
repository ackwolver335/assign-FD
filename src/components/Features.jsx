import React from 'react'
import { Star, CheckCircle, Home } from 'lucide-react'

export default function Features() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10 xl:gap-12 px-4 py-2 sm:py-6 lg:py-14 xl:py-20 md:px-12 lg:px-16 xl:px-24 bg-transparent" id="features">

        {/* feature's Heading */}
        <h1 className="text-white font-poppins font-semibold text-xl sm:text-3xl lg:text-4xl text-center"> Everything You Need to Stay Productive </h1>

        {/* different features */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 sm:gap-8 lg:gap-10">

            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-navBG px-6 sm:py-4 md:px-4 py-3 w-4/5 sm:w-3/5 rounded-md md:rounded-lg hover:scale-105 cursor-pointer ease-in duration-200">
                <Star className="w-10 h-10 p-2 bg-mainCR sm:w-12 sm:h-12 sm:p-3 rounded-full text-white" />
                <h3 className="text-base lg:text-lg font-poppins text-white font-semibold "> Priority Levels </h3>
                <p className="text-sm lg:text-base font-gg font-medium text-white text-center">
                    Organize tasks by priority: High, Medium, or Low to focus on what matters most.
                </p>
            </div>

            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-navBG px-6 sm:py-4 md:px-4 py-3 w-4/5 sm:w-3/5 rounded-md md:rounded-lg hover:scale-105 cursor-pointer ease-in duration-200">
                <CheckCircle className="w-10 h-10 p-2 bg-mainCR sm:w-12 sm:h-12 sm:p-3 rounded-full text-white" />
                <h3 className="text-base lg:text-lg font-poppins text-white font-semibold "> Track Progress </h3>
                <p className="text-sm lg:text-base font-gg font-medium text-white text-center">
                    Check off completed tasks and watch your productivity soar.
                </p>
            </div>

            <div className="flex flex-col items-center gap-2 sm:gap-3 bg-navBG px-6 sm:py-4 md:px-4 py-3 w-4/5 sm:w-3/5 rounded-md md:rounded-lg hover:scale-105 cursor-pointer ease-in duration-200">
                <Home className="w-10 h-10 p-2 bg-mainCR sm:w-12 sm:h-12 sm:p-3 rounded-full text-white" />
                <h3 className="text-base lg:text-lg font-poppins text-white font-semibold "> Stay Organized </h3>
                <p className="text-sm lg:text-base font-gg font-medium text-white text-center">
                    Keep all your tasks in one beautiful, easy-to-use interface.
                </p>
            </div>

        </div>

    </div>
  )
}
