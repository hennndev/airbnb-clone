import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import RoomCard from '../components/RoomCard'
import Map from '../components/Map'
import { LocationMarkerIcon } from '@heroicons/react/outline'


const Search = ({searchResult}) => {

    const [showMap, setShowMap] = useState(false)

    const router = useRouter()

    const { location, startDate, endDate, guests } = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    const locationFormat = location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()

    return (
        <div>
            <Header
                resultPlaceholder={`${locationFormat} | ${formattedStartDate} | ${formattedEndDate} | guests ${guests}`}/>

            <main className="pt-14 px-6">
                <section>
                    <p className="text-xs md:text-sm text-gray-600 leading-6">300+ Stays | <span className="bg-red-400 rounded-lg py-1 px-3 text-white">{formattedStartDate}</span> - <span className="bg-red-400 rounded-lg py-1 px-3 text-white">{formattedEndDate}</span> for {guests} number of guests</p>

                    <h1 className="text-3xl font-semibold my-6">Stays in {locationFormat}</h1>

                    <div className="flex space-x-3 mb-5 scrollbar-hide overflow-x-scroll">
                        <p className="button flex items-center" onClick={() => setShowMap(!showMap)}>
                            <LocationMarkerIcon className="h-4 mr-2"/>
                            Find Location
                        </p>
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResult.map(room => (
                            <RoomCard key={room.title} {...room}/>
                        ))}
                    </div>
                </section>
            </main>

            {showMap && (
                <section>
                    <Map handleClose={() => setShowMap(false)}/>
                </section>
            )}
                
            <Footer/>
        </div>
    )
}



export const getServerSideProps = async() => {
    const searchResult =  await fetch('https://links.papareact.com/isz').then(res => res.json())

    return {
        props: {
            searchResult
        }
    }
}

export default Search
