import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map({ lat, lng }) {
    useEffect(() => {
        console.log("jancuk");

        const loader = new Loader({
            apiKey: "AIzaSyBBnjRY9EYgZyNV566bhhYP7OoHUSro4_0",
            version: "weekly",
        });
        
        loader.load().then(() => {
            const map = new google.maps.Map(document.getElementById('map'), {
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
