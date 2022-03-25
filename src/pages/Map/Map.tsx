import React, { useEffect, useState } from "react";
import "./Map.css";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


const MapComponent = () => {
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)
    useEffect(() => {
        initMap();
    });
      
    const initMap = async () => {
        if ("geolocation" in navigator) 
        {
            await navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            })
        }
        mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg';
        console.log(latitude, longitude);
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 13
        });

        map.flyTo({
            center: [ 2.4506318, 48.8453839,]
        });

        const geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: map,
        });

        map.addControl(geocoder, 'top-left');

        map.on('load', () => {
          
        // Listen for the `geocoder.input` event that is triggered when a user
        // makes a selection
        geocoder.on('result', (event) => {
            console.log(event)
        //   const styleSpecBox = document.getElementById('json-response');
        //   styleSpecBox.innerHTML = `${syntaxHighlight(
        //     JSON.stringify(event.result, null, 2)
        //   )}`;
        });
      });
    
    }

    return (
        <div className="MapContainer">
            <div id="map"></div>
        </div>
    )
}

export default MapComponent