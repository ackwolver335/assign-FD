import React from 'react'
import { SquareCheck } from 'lucide-react'

export default function Footer() {
  return (
    <div className="fixed z-30 bottom-0 left-0 right-0 bg-navBG flex flex-col justify-center items-center gap-2 sm:gap-3 py-5 sm:py-8 md:py-10">
      
        {/* initial block for Home Navigation */}
        <div className="flex flex-row gap-1 lg:gap-2 items-center">
            <SquareCheck className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 text-sideBG" />
            <h3 className="font-poppins font-semibold sm:text-lg text-sideBG md:text-lg xl:text-xl"> TaskMaster </h3>
        </div>

        <p className="font-gg text-white/70 text-sm lg:text-base"> Your Productivity Companion </p>

        <p className="font-gg text-white/60 text-sm"> © 2026 TaskMaster. All rights reserved. </p>

    </div>
  )
}
