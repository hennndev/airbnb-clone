import React from 'react'
import Image from 'next/image'

const LargeCard = ({img, title, description, buttonText}) => {
    return (
        <>
            <div className="relative h-96 min-w-[300px] rounded-2xl overflow-hidden">
                <Image src={img} layout="fill" objectFit="cover"/>
            </div>
            <div className="absolute top-1/4 left-5 sm:left-10 space-y-4 text-gray-900 w-60">
                <h1 className="text-4xl font-medium">{title}</h1>
                <p className="font-medium">{description}</p>
                <button className="bg-gray-900 px-3 py-2 rounded-md text-white text-sm transition duration-200 hover:scale-105 active:scale-95">{buttonText}</button>
            </div>
        </>
    )
}

export default LargeCard
