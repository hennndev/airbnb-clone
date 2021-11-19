import React from 'react'
import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <header className="sticky bg-white top-0 z-50 shadow-md px-5 py-3 grid grid-cols-3">
            <div className="relative h-7 md:h-8 my-auto cursor-pointer">
                    <Image 
                        src="https://links.papareact.com/qd3" 
                        layout="fill"
                        objectFit="contain" 
                        objectPosition="left"/>
            </div>

            <div className="flex items-center border-0 md:border-2 md:shadow-sm rounded-full py-2 px-3 -ml-4 -mr-7 md:ml-0 md:mr-0">
                <input type="text" placeholder="Start your Search" className="flex-grow-0 md:flex-grow w-full text-sm mr-3 outline-none ml-3"/>
                <div className="bg-red-400 p-2 rounded-full hidden md:block">
                    <SearchIcon className="h-3 text-white cursor-pointer"/>
                </div>
            </div>

            <div className="flex items-center justify-end text-gray-500 space-x-2">
                <div className="flex items-center space-x-3 font-medium cursor-pointer">
                    <p className="hidden md:inline-flex">Become a host</p>
                    <GlobeAltIcon className="h-4 md:h-5"/>
                </div>
                <div className="flex border-2 rounded-full px-2 py-1 space-x-2 cursor-pointer">
                    <MenuIcon className="h-4 md:h-5"/>
                    <UserCircleIcon className="h-4 md:h-5"/>
                </div>
            </div>
        </header>
    )
}

export default Header
