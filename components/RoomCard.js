import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const RoomCard = ({description, img, location, price, star, title, total}) => {
    return (
        <div className="py-5 shadow-md my-3 rounded-md flex flex-col space-y-3 sm:space-y-0 sm:flex-row cursor-pointer transform hover:-translate-y-3 transition duration-500 first:border-t-4 border-red-400 last:border-b-4 lg:hover:border-r-[3px] hover:animate-pulse hover:border-red-400">
            
            <div className="relative min-h-[200px] w-full sm:max-w-[250px] lg:max-w-[350px] rounded-2xl overflow-hidden">
                <Image src={img} layout="fill" objectFit="cover"/>
            </div>

            <div className="flex-grow px-5 text-gray-700">
                <div className="flex items-center justify-between">
                    <p className="text-gray-500 text-sm">{location}</p>
                    <HeartIcon className="h-7"/>
                </div>
                <h1 className="my-3 text-2xl font-semibold">{title}</h1>
                <p className="text-sm text-gray-500">{description}</p>
                
                <div className="mt-14">
                    <h2 className="text-right font-semibold text-2xl">{price}</h2>
                    <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center space-x-1">
                            <StarIcon className="h-5 text-red-400"/>
                            <p>{star}</p>
                        </div>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard
