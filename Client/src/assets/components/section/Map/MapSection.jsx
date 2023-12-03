import React, { useState } from 'react';
import Map from './Map';
import HelpButton from './HelpButton';
import 'isomorphic-fetch';

import 'leaflet/dist/leaflet.css';

export default function MapSection() {
  const [markers, setMarkers] = useState([]);

  const sendTelegramMessage = (lat, lng) => {

    const chatIds = ['6886273903'];

    chatIds.forEach((chatId) => {
      fetch(`https://api.telegram.org/bot6807455374:AAHSiir0bzerGTjmEZ71JHoBO3hFMnkTKWQ/sendMessage?chat_id=${chatId}&text=¡Emergencia en la ubicación ${lat}, ${lng}! Necesito ayuda urgente.`)
        .then((response) => {
          if (response.ok) {
            console.log('Mensaje enviado con éxito');
          } else {
            console.error('Error al enviar el mensaje');
          }
        })
        .catch((error) => {
          console.error('Error al enviar el mensaje:', error);
        });
    });
  };

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const newMarker = { id: Date.now(), lat: position.coords.latitude, lng: position.coords.longitude };
      setMarkers([...markers, newMarker]);

      // Llama a la función sendTelegramMessage con las coordenadas lat y lng
      sendTelegramMessage(position.coords.latitude, position.coords.longitude);
    });
    
  };

  const handleRemove = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este marcador?")) {
      setMarkers(markers.filter((marker) => marker.id !== id));
      alert("Marcador eliminado");
    }
  };

  const handlePopupOpen = (id) => {
    console.log(`El popup del marcador ${id} se ha abierto`);
  };

  return (
    <>
      <div id="map-description">
        <h1 id="map-title">MAPA DE AYUDA</h1>
        <div className="main-container">
          <div id="map-container">
            <Map markers={markers} onMarkerRemove={handleRemove} onPopupOpen={handlePopupOpen} />
          </div>
          <div className="main-paragraph">
            <div>
              <p>
                Tu seguridad es nuestra prioridad, si necesitas ayuda urgente presiona el botón de{' '}
                <span className="highlighted-text">AYUDA</span> y mandaremos un mensaje a tus contactos más cercanos.
              </p>
            </div>
            <div>
              <HelpButton onClick={handleClick} />
            </div>
            <p>
              Las áreas sombreadas representan zonas donde han ocurrido casos de violencia{' '}
              <span className="highlighted-text">¡Ten cuidado al transitar por esas zonas!</span>. Los colores intensos representan
              que hay más casos en esas zonas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}