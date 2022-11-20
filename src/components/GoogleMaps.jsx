import React,{useState} from 'react'

import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import { React_MAP_GOOGLEMAPS } from '../constants/GoogleApi';



 export default function GoogleMaps() {
    const { isLoaded}  = useLoadScript({
        googleMapsApiKey: React_MAP_GOOGLEMAPS,
    });

    if(!isLoaded) return <div>Loading ...</div>;

    return <Map />
}


function Map(){
    const [marker,setMarker]=useState(false);

    return <GoogleMap zoom={14} 
    center={{lat: 41.7096,lng: 44.7569}} 
    mapContainerClassName="map-container"
    options={{
        zoomControl: false,
        fullscreenControl: false
    }}
    >
        <Marker position={{lat: 41.7096,lng: 44.7569}}
        options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false
        }}
         onMouseOver={()=>{
            setMarker(true);
         }}
        />
        {marker && 
        <InfoWindow position={{lat: 41.7096,lng: 44.7569}} onCloseClick={()=>setMarker(false)}
        >
            <p>ვაკე</p>
        </InfoWindow>}

    </GoogleMap>
}



