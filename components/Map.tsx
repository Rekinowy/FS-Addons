"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import Image from "next/image";
import Link from "next/link";

const Map = ({ data }: any) => {
  const airportMarker = icon({
    iconUrl: "/airport-location.svg",
    iconSize: [20, 20],
  });

  const sceneryMarker = icon({
    iconUrl: "/scenery-location.svg",
    iconSize: [20, 20],
  });

  return (
    <div
      id="map"
      className="flex w-full h-full mt-[68px] sm:mt-[108px] pb-12 sm:pb-20"
    >
      <MapContainer className="w-full z-0 flex-grow" center={[40, 0]} zoom={3}>
        <TileLayer
          className="map-tiles"
          attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright"> &copy; OpenStreetMap</a> contributors'
          url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=86jHJztgtAyNO6UxDfquBGyQWVqjdO1VLtgNkrrgMFqnUgYRGawVj2q2X9q4PqOw"
        />
        {data.map((item: any) => (
          <Marker
            key={item._id}
            icon={item.category == "airports" ? airportMarker : sceneryMarker}
            position={[item.coordinates.lat, item.coordinates.lng]}
          >
            <Popup>
              <div className="flex flex-col w-[260px]">
                <Image
                  src={item.image}
                  alt="cover"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <Link
                  href={"/addons/" + item.slug.current}
                  className="text-sm py-2"
                >
                  {item.category === "airports" ? (
                    <>
                      <span className="font-bold">{item.icao}</span>{" "}
                      {item.title}
                    </>
                  ) : (
                    item.title
                  )}
                </Link>
                <div className="flex justify-between">
                  <h2>{item.developer}</h2>
                  <h3 className="font-semibold">v{item.version}</h3>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
