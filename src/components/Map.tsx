'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

export default function Map() {
  const position = [-3.0274694, -39.6503127]
  return (
    <MapContainer
      center={[-3.0274694, -39.6503127]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-screen w-screen"
      
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
