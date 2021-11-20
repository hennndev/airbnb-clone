import React, { useState } from 'react'
import Image from 'next/image'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'
import { SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon } from '@heroicons/react/solid'

const Header = ({resultPlaceholder = ''}) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuests, setNumOfGuests] = useState(1)

    const router = useRouter()

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const handleSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchTerm,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests: numOfGuests
            }
        })
    }

    const handleGuests = (e) => {
        setNumOfGuests(e.target.value)
    }

    

    return (
        <header className="sticky bg-white top-0 z-50 shadow-md px-5 py-3 grid grid-cols-3">
            <div className="relative h-7 md:h-8 my-auto cursor-pointer" onClick={() => router.push('/')}>
                <Image 
                    src="https://links.papareact.com/qd3" 
                    layout="fill"
                    objectFit="contain" 
                    objectPosition="left"/>
            </div>

            <div className="flex items-center border-0 md:border-2 md:shadow-sm rounded-full py-2 px-3 -ml-4 -mr-7 md:ml-0 md:mr-0">
                <input 
                    type="text" 
                    placeholder={`${resultPlaceholder || 'Start your Search'}`} 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-grow-0 md:flex-grow w-full text-xs md:text-sm text-gray-400 mr-3 outline-none ml-3"/>
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
            
            {searchTerm && (
                <div className="col-span-3 flex mt-5 overflow-x-scroll lg:overflow-x-auto w-full">
                    <div className="mx-auto">
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#FD5B61"]}
                            onChange={handleSelect}
                        />
                        <div className="flex items-center border-b pb-2">
                            <h1 className="text-lg font-semibold flex-grow">Number of guests</h1>
                            <UsersIcon className="h-5"/>
                            <input 
                                type="number" 
                                className="w-12 pl-2 outline-none text-lg"
                                value={numOfGuests}
                                min={1}
                                onChange={handleGuests}/>
                        </div>
                        <div className="flex items-center justify-evenly py-2">
                            <button className="text-gray-500" 
                                onClick={() => setSearchTerm('')}>
                                    Cancel
                            </button>
                            <button className="text-red-400" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
