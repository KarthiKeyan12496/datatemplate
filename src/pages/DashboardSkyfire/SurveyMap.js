// components/SurveyMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// const createCustomIcon = (color) => {
//     return L.divIcon({
//       className: 'custom-icon',
//       html: `<div style="background-color:${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
//       iconSize: [20, 20],
//     });
//   };
  
//   // Example usage
//   const icons = {
//     EV: createCustomIcon('blue'),
//     Solar: createCustomIcon('green'),
//   };

// Function to create a custom icon
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-icon',
    html: `<div style="background-color:${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
    iconSize: [20, 20],
  });
};

// Example icons for different types of sites
const icons = {
  EV: createCustomIcon('blue'),
  Solar: createCustomIcon('green'),
};

// Sample data for surveyed sites
const surveyedSites = [
    { id: 1, name: 'Site 1 EV', lat: 40.730610, lng: -73.935242, type: 'EV' },  // New York City, USA
    { id: 2, name: 'Site 2 Solar', lat: 34.052235, lng: -118.243683, type: 'Solar' }, // Los Angeles, USA
    { id: 3, name: 'Site 3 Solar', lat: 41.878113, lng: -87.629799, type: 'Solar' },  // Chicago, USA
    { id: 4, name: 'Site 4 EV', lat: 37.774929, lng: -122.419418, type: 'EV' },   // San Francisco, USA
    { id: 5, name: 'Site 5 EV', lat: 47.606209, lng: -122.332069, type: 'EV' },   // Seattle, USA
    { id: 6, name: 'Site 6 Solar', lat: 51.507351, lng: -0.127758, type: 'Solar' },   // London, UK
    { id: 7, name: 'Site 7 EV', lat: 48.856613, lng: 2.352222, type: 'EV' },       // Paris, France
    { id: 8, name: 'Site 8 Solar', lat: 35.689487, lng: 139.691711, type: 'Solar' },   // Tokyo, Japan
    { id: 9, name: 'Site 9 EV', lat: -33.868820, lng: 151.209296, type: 'EV' },    // Sydney, Australia
    { id: 10, name: 'Site 10 Solar', lat: 55.755825, lng: 37.617298, type: 'Solar' },  // Moscow, Russia
  
    // Nearby locations
    { id: 11, name: 'Site 11 EV', lat: 40.740610, lng: -73.945242, type: 'EV' },  // Nearby New York City
    { id: 12, name: 'Site 12 Solar', lat: 34.062235, lng: -118.233683, type: 'Solar' }, // Nearby Los Angeles
    { id: 13, name: 'Site 13 Solar', lat: 41.868113, lng: -87.619799, type: 'Solar' },  // Nearby Chicago
    { id: 14, name: 'Site 14 EV', lat: 37.784929, lng: -122.429418, type: 'EV' },   // Nearby San Francisco
    { id: 15, name: 'Site 15 EV', lat: 47.616209, lng: -122.322069, type: 'EV' },   // Nearby Seattle
    { id: 16, name: 'Site 16 Solar', lat: 51.517351, lng: -0.137758, type: 'Solar' },   // Nearby London
    { id: 17, name: 'Site 17 EV', lat: 48.866613, lng: 2.362222, type: 'EV' },       // Nearby Paris
    { id: 18, name: 'Site 18 Solar', lat: 35.699487, lng: 139.681711, type: 'Solar' },   // Nearby Tokyo
    { id: 19, name: 'Site 19 EV', lat: -33.878820, lng: 151.219296, type: 'EV' },    // Nearby Sydney
    { id: 20, name: 'Site 20 Solar', lat: 55.765825, lng: 37.607298, type: 'Solar' },  // Nearby Moscow
  ];

const SurveyMap = () => {
  return (
    <MapContainer center={[40.730610, -73.935242]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {surveyedSites.map(site => (
        <Marker
          key={site.id}
          position={[site.lat, site.lng]}
          icon={icons[site.type]}
        >
          <Popup>{site.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SurveyMap;

