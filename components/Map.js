import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { XIcon } from '@heroicons/react/outline';
import { getCenter } from 'geolib';


const Map = ({handleClose, searchResult}) => {

    const [showPopup, setShowPopup] = useState(null)
    
    const center = getCenter(searchResult.map(({long, lat}) => ({
        longitude: long,
        latitude: lat,
    })))
   //mengambil pusat dari sebuah lokasi, misal hari search purbalingga maka akan mereturn pusat kota /kab purbalingga. Tapi data dummy ini hanya mereturn kota london

    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
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
                >
                    {searchResult.map(result => (
                        <div key={result.title}>
                            <Marker
                                longitude={result.long}
                                latitude={result.lat}
                                offsetLeft={-20}
                                offsetTop={-10}
                            >
                                <p className="animate-bounce cursor-pointer text-xl" onClick={() => setShowPopup(result)}>📌</p>
                            </Marker>
                        </div>
                    ))}
                    {showPopup && <Popup
                        latitude={showPopup.lat}
                        longitude={showPopup.long}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => setShowPopup(null)}
                        anchor="bottom" > 
                        <p>{showPopup.title}</p>    
                    </Popup>}
                </ReactMapGL>
            </div>
        </div>
    )
}

export default Map
