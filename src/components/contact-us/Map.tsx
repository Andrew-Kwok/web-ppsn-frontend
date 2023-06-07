import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

/// <reference types="@types/googlemaps" />

export default function Map({ lat, lng }: { lat: number; lng: number }) {
    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyBBnjRY9EYgZyNV566bhhYP7OoHUSro4_0",
            version: "weekly",
        });
        
        loader.load().then(() => {
            const element = document.getElementById('map');

            if (element === null) {
                console.error('Map element not found.');
                return;
            } 

            const map = new google.maps.Map(element, {
                center: { lat, lng },
                zoom: 8,        
            }); 

            new google.maps.Marker({
                position: { lat, lng },
                map,
            });
        });
    }, [lat, lng]);

    return (    
        <div id="map" style={{ height: "400px" }}> LOL </div>
    );
}
