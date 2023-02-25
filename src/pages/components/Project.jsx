import Link from 'next/link'
import React from 'react'
import project1 from '../../../public/photos/project/1.png'
import project2 from '../../../public/photos/project/2.png'
import project3 from '../../../public/photos/project/3.png'
import project4 from '../../../public/photos/project/4.png'
import project5 from '../../../public/photos/project/5.png'
import Image from 'next/image'

const Project = (props) => {
    return (
        <div className="container mt-36 mb-16 pb-10 shadow-2xl rounded-md" id="portfolio">
            <div className="header text-center max-w-2xl mx-auto mb-8">
                <p className="uppercase text-potter font-bold text-2xl">Portfolio</p>
                <p className="mt-2 text-lg">Projek Terbaru!</p>
                <p className="text-gray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi
                    perferendis quidem commodi? Repellat, facere molestiae quas voluptates nesciunt est.</p>
            </div>

            <div className="w-full flex flex-wrap justify-center gap-y-5">

                <Link href="#test"
                    className="rounded-xl lg:w-1/3 overflow-hidden shadow-2xl w-full mx-3 group hover:duration-1000 hover:blur-sm ">
                    <Image className="w-full group-hover:scale-110 group-hover:duration-1000" src={project1}
                        alt="project1" />
                    <div className="px-5 py-3 g">
                        <p className="text-potter text-lg">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium ducimus
                            aliquid excepturi corporis laborum reiciendis magnam dolor dolorem pariatur.</p>
                    </div>
                </Link>

                <Link href="#test"
                    className="rounded-xl lg:w-1/3 overflow-hidden shadow-2xl w-full mx-3 group hover:duration-1000 hover:blur-sm ">
                    <Image className="w-full group-hover:scale-110 group-hover:duration-1000" src={project2}
                        alt="project2" />
                    <div className="px-5 py-3 g">
                        <p className="text-potter text-lg">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium ducimus
                            aliquid excepturi corporis laborum reiciendis magnam dolor dolorem pariatur.</p>
                    </div>
                </Link>

                <Link href="#test"
                    className="rounded-xl lg:w-1/3 overflow-hidden shadow-2xl w-full mx-3 group hover:duration-1000 hover:blur-sm ">
                    <Image className="w-full group-hover:scale-110 group-hover:duration-1000" src={project3}
                        alt="project3" />
                    <div className="px-5 py-3 g">
                        <p className="text-potter text-lg">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium ducimus
                            aliquid excepturi corporis laborum reiciendis magnam dolor dolorem pariatur.</p>
                    </div>
                </Link>

                <Link href="#test"
                    className="rounded-xl lg:w-1/3 overflow-hidden shadow-2xl w-full mx-3 group hover:duration-1000 hover:blur-sm ">
                    <Image className="w-full group-hover:scale-110 group-hover:duration-1000" src={project4}
                        alt="project4" />
                    <div className="px-5 py-3 g">
                        <p className="text-potter text-lg">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium ducimus
                            aliquid excepturi corporis laborum reiciendis magnam dolor dolorem pariatur.</p>
                    </div>
                </Link>

                <Link href="#test"
                    className="rounded-xl lg:w-1/3 overflow-hidden shadow-2xl w-full mx-3 group hover:duration-1000 hover:blur-sm ">
                    <Image className="w-full group-hover:scale-110 group-hover:duration-1000" src={project5}
                        alt="project5" />
                    <div className="px-5 py-3 g">
                        <p className="text-potter text-lg">Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias praesentium ducimus
                            aliquid excepturi corporis laborum reiciendis magnam dolor dolorem pariatur.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project