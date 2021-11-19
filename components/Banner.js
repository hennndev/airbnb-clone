import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://links.papareact.com/0fm" objectFit="cover" layout="fill"/>


            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button 
                    className="text-sm sm:text-base py-2 bg-white shadow-md px-10 sm:py-3 text-purple-500 rounded-full mt-3 font-medium w-max hover:shadow-lg active:scale-90 transition duration-150">
                        I'm flexible
                </button>
            </div>
        </div>
    )
}

export default Banner
