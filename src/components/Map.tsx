import React from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  //   useMap,
} from "react-leaflet";
import L from "leaflet";

import "../leaflet.css";

class LatLng {
  lat: number;
  lng: number;
  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

const positionStart = new LatLng(55.953251, -3.188267);
const positionGoldenWok = new LatLng(55.953251, -3.188267);

const goldenWokIcon = new L.Icon({
  iconUrl: "icons/marker-icon.png",
  iconSize: [30, 40], // Size of the icon
  iconAnchor: [20, 20], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const Map: React.FC = () => {
  const LocationFinderDummy = () => {
    useMapEvents({
      click(e) {
        console.log(e.latlng);
      },
    });
    return null;
  };

  return (
    <div id="map" className="section">
      <h2>Location</h2>
      <MapContainer center={positionStart} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionGoldenWok} icon={goldenWokIcon}>
          <Popup>We are here!</Popup>
        </Marker>
        <LocationFinderDummy />
      </MapContainer>
    </div>
  );
};

export default Map;

////
