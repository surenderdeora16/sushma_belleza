'use client';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';

// Set the default marker icon
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Updated TARGET_LOCATION for Sushma Elements with detailed information
const TARGET_LOCATION = {
  lat: 30.7065, // Latitude of Sushma Elements
  lng: 76.7499, // Longitude of Sushma Elements
  name: "Sushma Belleza",
};

const Maps = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState([]);
  const [routeInfo, setRouteInfo] = useState({ distance: 0, duration: 0 });

  useEffect(() => {
    // Set the default icon
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          alert('Failed to retrieve your location.');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  }, []);

  // Function to fetch directions using OSRM API
  const fetchDirections = async () => {
    if (!userLocation) return;

    try {
      const response = await axios.get(
        `https://router.project-osrm.org/route/v1/driving/${userLocation.lng},${userLocation.lat};${TARGET_LOCATION.lng},${TARGET_LOCATION.lat}?overview=full&geometries=geojson`
      );

      if (response.data.routes.length > 0) {
        const route = response.data.routes[0].geometry.coordinates;
        const { distance, duration } = response.data.routes[0];

        setDirections(route);
        setRouteInfo({
          distance: (distance / 1000).toFixed(2),
          duration: formatDuration(duration),
        });
      } else {
        console.error('No routes found');
      }
    } catch (error) {
      console.error('Error fetching directions:', error);
    }
  };

  useEffect(() => {
    fetchDirections();
  }, [userLocation]);

  const FitToBounds = () => {
    const map = useMap();

    useEffect(() => {
      if (userLocation) {
        const bounds = L.latLngBounds([userLocation, TARGET_LOCATION]);
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    }, [map, userLocation]);

    return null;
  };

  const formatDuration = (durationInSeconds) => {
    const totalMinutes = Math.floor(durationInSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    if (totalMinutes < 60) {
      return `${totalMinutes} minutes`;
    } else if (hours < 24) {
      return `${hours} hours ${minutes} minutes`;
    } else {
      return `${days} days ${remainingHours} hours ${minutes} minutes`;
    }
  };

  return (
    <MapContainer center={TARGET_LOCATION} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Esri, DeLorme, NAVTEQ'
      />

      {userLocation && (
        <>
          <Marker position={userLocation}>
            <Popup>You are here!</Popup>
          </Marker>
          <Marker position={TARGET_LOCATION}>
            <Popup>
              <strong>{TARGET_LOCATION.name}</strong><br />
              Distance: {routeInfo.distance} km<br />
              Duration: {routeInfo.duration}
            </Popup>
          </Marker>

          {directions.length > 0 && (
            <Polyline
              positions={directions.map((coord) => [coord[1], coord[0]])}
              color="blue"
              weight={5}
            />
          )}

          <FitToBounds />
        </>
      )}
    </MapContainer>
  );
};

export default Maps;
