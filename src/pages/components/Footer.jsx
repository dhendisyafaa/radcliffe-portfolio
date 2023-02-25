import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="container mt-20 mb-5 pb-4 shadow-2xl rounded-md text-center">
            <p>
                <Link href="/test" className="text-gray-200 text-[13px]">
                    Copyright &copy; 2022
                    <span className="text-potter"> dhnradcliffe </span>
                    | All rights reserved.
                </Link>
            </p>
        </div>
    )
}

export default Footer