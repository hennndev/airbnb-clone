import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';
import { XIcon } from '@heroicons/react/outline';

const Map = ({handleClose}) => {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
        width:"100%",
        height:"100%"
    });


    return (
        <div className="fixed w-full h-full top-0 bottom-0 left-0 right-0 z-50 bg-overlay grid place-items-center">
            <div className="absolute top-0 right-3">
                <XIcon className="h-8 text-red-300 cursor-pointer" onClick={handleClose}/>
            </div>
            <div className="min-w-[500px] h-full mt-20 xl:mt-0">
                <ReactMapGL
                    mapStyle="mapbox://styles/hendra23/ckw8j8z297lpk15o6he567q4o"
                    mapboxApiAccessToken={process.env.map_token}
                    {...viewport} 
                    onViewportChange={(viewport) => setViewport(viewport)}
                ></ReactMapGL>
            </div>
        </div>
    )
}

export default Map
