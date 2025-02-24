import React, { useEffect, useRef } from 'react'
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
    const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([51.5, 0.0192269], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
      
    const marker = L.marker([51.4852, 0.0175]).addTo(map);

    // Optional: Add a popup to the marker
    marker.bindPopup("<b>Hello!</b><br>We are here.").openPopup();

    return () => {
      map.remove(); // Clean up on component unmount
    };
  }, []);

  return <div ref={mapRef} style={{ height: "100vh" }} />;
};

export default LeafletMap
