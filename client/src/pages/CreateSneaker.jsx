// CreateSneaker.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function CreateSneaker() {
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="grid grid-cols-2 gap-10 ml-8">
      {/* Upload container */}
      <div className="ml-8">
        <div className="upload_container text-white" data-aos="zoom-in-up">
          <main className="p-3 max-w-4xl mx-auto">
            <h1 className="uppercase text-2xl p-2">
              Upload Sneaker for trade or sell!
            </h1>
            <form className="flex flex-col sm:flex-row">
              <div className="flex flex-col gap-1 flex-1">
                <p>Sneaker Name:</p>
                <input
                  type="text"
                  placeholder="Sneaker Name"
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  id="name"
                  maxLength="62"
                  minLength="10"
                  required
                />
                <p>Address:</p>
                <input
                  type="text"
                  placeholder="Sneaker's Owner Address"
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  id="address"
                  onChange={handleAddressChange}
                  value={address}
                  required
                />
              </div>
            </form>
          </main>
        </div>
      </div>

      {/* Leaflet Map */}
      <div className="map-container">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '400px', width: '400px' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {address && (
            <Marker position={[51.505, -0.09]}>
              <Popup>{address}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default CreateSneaker;
