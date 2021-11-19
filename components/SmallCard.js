import React from 'react'
import Image from 'next/image'

const SmallCard = ({img, location, distance}) => {
    return (
        <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 rounded-md transition duration-200 transfrom hover:scale-105">
            <div className="relative h-14 w-14">
                <Image src={img} layout="fill" objectFit="contain" className="rounded-md"/>
            </div>
            <div className="text-sm whitespace-nowrap">
                <p>{location}</p>
                <p>{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard
