import React from 'react'
import Image from 'next/image'

const MediumCard = ({img, title}) => {
    return (
        <div className="cursor-pointer">
            <div className="relative h-60 w-60 rounded-md overflow-hidden">
                <Image src={img} layout="fill" objectFit="cover" className="transform transition duration-200 hover:scale-110"/>
            </div>
            <p className="text-xl mt-2">{title}</p>
        </div>
    )
}

export default MediumCard
