"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";

const Map = () => {
  const marker = icon({
    iconUrl: "/airport-location.svg",
    iconSize: [48, 48],
  });

  return (
    <div
      id="map"
      className="flex w-full h-full mt-[68px] sm:mt-[108px] pb-12 sm:pb-20"
    >
      <MapContainer className="w-full z-0 flex-grow" center={[45, 0]} zoom={2}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.109444, 16.880278]} icon={marker}>
          <Popup className="">
            <h1 className="font-bold">EPWR</h1>
            <p className="">Welcome to Wroclaw</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
