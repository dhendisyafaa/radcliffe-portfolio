import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className="container mt-36 mb-16 pb-10 shadow-2xl rounded-md">
            <div className="header text-center max-w-2xl mx-auto mb-8">
                <p className="uppercase text-potter font-bold text-2xl">Contact</p>
                <p className="mt-2 text-lg">Hubungi Saya!</p>
                <p className="text-gray-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi
                    perferendis quidem commodi? Repellat, facere molestiae quas voluptates nesciunt est.</p>
            </div>

            <div className="w-full lg:w-2/3 lg:mx-auto">
                <form action="" className="flex flex-col gap-y-5">
                    <div className="px-3">
                        <label for="nama" className="text-potter text-bold">Nama</label>
                        <input type="text" id="nama"
                            className="w-full p-2 bg-zinc-800 focus:bg-transparent rounded-md focus:outline-none focus:ring-grytext-potter focus:ring-2 shadow-lg" />
                    </div>

                    <div className="px-3">
                        <label for="email" className="text-potter text-bold">Email</label>
                        <input type="email" id="email"
                            className="w-full p-2 bg-zinc-800 focus:bg-transparent rounded-md focus:outline-none focus:ring-grytext-potter focus:ring-2 shadow-lg" />
                    </div>

                    <div className="px-3">
                        <label for="pesan" className="text-potter text-bold">Pesan</label>
                        <textarea type="text" id="pesan"
                            className="w-full p-1 bg-zinc-800 focus:bg-transparent rounded-md focus:outline-none focus:ring-grytext-potter focus:ring-2 shadow-lg"></textarea>
                    </div>

                    <div className="px-3">
                        <button type="submit" id="kirim"
                            className="bg-potter hpotter border-2 border-transparent text-sm lg:text-md px-2 py-1 rounded-lg hover:bg-transparent">Kirim</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Contact