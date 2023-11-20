"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

type AddonMapProps = {
  title: string;
  icao?: string;
  category: string;
  lat: number;
  lng: number;
};
const AddonMap = ({ title, icao, category, lat, lng }: AddonMapProps) => {
  const airportMarker = icon({
    iconUrl: "/airport-location.svg",
    iconSize: [20, 20],
  });

  const sceneryMarker = icon({
    iconUrl: "/scenery-location.svg",
    iconSize: [20, 20],
  });

  return (
    <div id="map" className="flex w-full min-h-[280px] md:min-h-[380px] h-full">
      <MapContainer
        className="flex-grow w-full z-0 rounded-lg border-black-300"
        center={[lat, lng]}
        zoom={7}
      >
        <TileLayer
          className="map-tiles"
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright"> &copy; OpenStreetMap</a>'
          url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=86jHJztgtAyNO6UxDfquBGyQWVqjdO1VLtgNkrrgMFqnUgYRGawVj2q2X9q4PqOw"
        />
        <Marker
          icon={category == "airports" ? airportMarker : sceneryMarker}
          position={[lat, lng]}
        >
          <Popup>
            <h1>
              <span className="font-semibold">{icao} </span>
              {title}
            </h1>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AddonMap;
