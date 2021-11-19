import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray-200 px-12 sm:px-32 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-10 sm:space-y-0 gap-0 sm:gap-10">
            <div className="text-xs text-gray-800 space-y-4">
                <h5 className="font-bold">ABOUT</h5>
                <p className="cursor-pointer">How Airbnb works</p>
                <p className="cursor-pointer">Newsroom</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">Carrier</p>
                <p className="cursor-pointer">Airbnb luxe</p>
                <p className="cursor-pointer">Airbnb Plus</p>
            </div>
            <div className="text-xs text-gray-800 space-y-4">
                <h5 className="font-bold">COMMUNITY</h5>
                <p className="cursor-pointer">Accessibility</p>
                <p className="cursor-pointer">No Discrimination</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">Airbnb luxe</p>
                <p className="cursor-pointer">Airbnb Plus</p>
            </div>
            <div className="text-xs text-gray-800 space-y-4">
                <h5 className="font-bold">HOSTS</h5>
                <p className="cursor-pointer">How Airbnb works</p>
                <p className="cursor-pointer">Newsroom</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">Airbnb luxe</p>
                <p className="cursor-pointer">Airbnb Plus</p>
            </div>
            <div className="text-xs text-gray-800 space-y-4">
                <h5 className="font-bold">SUPPORT</h5>
                <p className="cursor-pointer">Helps Center</p>
                <p className="cursor-pointer">Cancelled Option</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">Airbnb luxe</p>
                <p className="cursor-pointer">Airbnb Plus</p>
            </div>
        </div>
    )
}

export default Footer
