import React, {
    useEffect,
    useState
} from "react";
import "./Map.css";
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import {
    getPoints
} from "../../api";


const MapComponent = () => {
    const [latitude, setLatitude] = useState < number > (48.8513668)
    const [longitude, setLongitude] = useState < number > (2.4204521)


    useEffect(() => {
        initCoords();
        console.log(latitude, longitude)
        fetchApi()
    }, []);

    const initCoords = async () => {

        if ("geolocation" in navigator) {

            await navigator.geolocation.getCurrentPosition((position) => {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            })

            initMap();
        } else {
            // Check l'api si l'user a rentré son address
            setLatitude(48.86268807554882);
            setLongitude(2.353267940146808);
            initMap();
        }
    }

    const initMap = async () => {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0c6KaAhJfk9bWg';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [longitude, latitude],
            zoom: 13
        });
        const points = await fetchApi();

        points?.forEach((element: any) => {
            console.log(element.avatar)



            map.on('load', () => {
                // Add an image to use as a custom marker
                map.loadImage(
                    element.avatar,
                    (error, image: any) => {
                        if (error) throw error;
                        map.addImage(`custom-marker${element.id}`, image);
                        // Add a GeoJSON source with 2 points
                        map.addSource('points', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': [{
                                        // feature for Mapbox DC
                                        'type': 'Feature',
                                        'geometry': {
                                            'type': 'Point',
                                            'coordinates': [
                                                element.longitude, element.latitude
                                            ]
                                        },
                                        'properties': {
                                            'title': element.title
                                        }
                                    },
                                    {
                                        // feature for Mapbox SF
                                        'type': 'Feature',
                                        'geometry': {
                                            'type': 'Point',
                                            'coordinates': [-122.414, 37.776]
                                        },
                                        'properties': {
                                            'title': 'Mapbox SF'
                                        }
                                    }
                                ]
                            }
                        });

                        // Add a symbol layer
                        map.addLayer({
                            'id': 'points',
                            'type': 'symbol',
                            'source': 'points',
                            'layout': {
                                'icon-image': `custom-marker${element.id}`,
                                // get the title name from the source's "title" property
                                'text-field': ['get', 'title'],
                                'text-font': [
                                    'Open Sans Semibold',
                                    'Arial Unicode MS Bold'
                                ],
                                'text-offset': [0, 1.25],
                                'text-anchor': 'top'
                            }
                        });
                    }
                );
            });

        })

        // map.on('click', 'points', (e) => {
        //     new mapboxgl.Popup()
        //         .setLngLat(77)
        //         .setHTML("hello")
        //         .addTo(map);
        // });


    }

    const fetchApi = async () => {
        try {
            const points = await getPoints("+33768336700");

            return points
        } catch (error) {
            console.log(error)
        }
    }
    return ( 
        <div className = "MapContainer" >
            <div id = "map"> </div> 
        </div>
    )
}

export default MapComponent