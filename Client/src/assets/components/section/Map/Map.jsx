import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker';

export default function Map({ markers, onMarkerRemove, onPopupOpen }) {
  const bounds = [[13.1, -90.4], [14.5, -87.5]];

  return (
    <div>
      <MapContainer 
        center={[16, -50]} 
        zoom={8.5} 
        style={{ height: "520px", width: "100%" }}
        maxBounds={bounds}
        maxBoundsViscosity={1}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker, idx) => 
          <Marker 
            key={marker.id} 
            position={[marker.lat, marker.lng]} 
            onPopupOpen={() => onPopupOpen(marker.id)}
          >
            <Popup>
              <span>Marcador {idx + 1}</span>
              <button onClick={() => onMarkerRemove(marker.id)}>Eliminar marcador</button>
            </Popup>
          </Marker>
        )}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
