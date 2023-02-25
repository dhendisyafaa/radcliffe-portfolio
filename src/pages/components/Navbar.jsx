import Link from 'next/link'
import React from 'react'

const Navbar = (props) => {
    return (
        <div className="sticky top-0 z-50">
            <div className="">
                <nav className="flex justify-between items-center px-10 py-3 bg-zinc-800 shadow-lg rounded-b-lg text-white">
                    <div className="branding" id="branding">
                        <Link href="/test" className="text-potter font-semibold text-xl">dhnradcliffe</Link>
                    </div>

                    <div className="change-color flex gap-x-1 cursor-pointer" id="btnchange">
                        <div className="w-5 h-5 border rounded-full"></div>
                        <div className="w-5 h-5 border rounded-full"></div>
                        <div className="w-5 h-5 border rounded-full"></div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar