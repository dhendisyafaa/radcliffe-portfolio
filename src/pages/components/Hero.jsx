import Link from 'next/link'
import React from 'react'
import avaDhen from '../../../public/photos/avadhen.png'
import Image from 'next/image'

const Hero = ({ colors }) => {
    return (
        <div id="home" className="flex flex-wrap justify-around mt-10 m-1 rounded-md shadow-2xl">
            <div className="flex flex-col justify-center text-center md:text-left">
                <p className="text-3xl md:text-4xl lg:text-5xl font-bold">Dhendi <span className="text-potter"
                    id="radcliffe">Radcliffe</span></p>
                <p className="text-sm md:text-lg lg:text-2xl mb-3">Fear of a name only increases fear of the thing itself
                </p>
                <button
                    className="hpotter mx-auto md:m-0 w-32 bg-potter border-2 border-transparent text-sm md:text-md lg:text-md px-3 py-1 rounded-lg">
                    <Link href="/test">Contact Me!</Link>
                </button>
            </div>

            <div className="relative Image-hero mt-10 ">
                <Image src={avaDhen} alt="Dhendi face cartoon" className="w-80 lg:w-full" />
                <span className="absolute bottom-0 -z-10">
                    <svg className="w-80 lg:w-full" height="400" width="400" viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="#C2410C"
                            d="M49.9,-16.5C59.3,13,58.1,45.6,42.8,56.2C27.4,66.7,-2,55,-23.4,38.1C-44.8,21.2,-58.1,-1,-52.9,-24.7C-47.6,-48.3,-23.8,-73.4,-1.8,-72.8C20.2,-72.3,40.4,-46,49.9,-16.5Z"
                            transform="translate(100 100) scale(1.1)" />
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default Hero