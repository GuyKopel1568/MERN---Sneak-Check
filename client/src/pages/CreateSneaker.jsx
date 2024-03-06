import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function CreateSneaker() {
  const [sneakerName, setSneakerName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [sneakerType, setSneakerType] = useState('');
  const [sneakerCondition, setSneakerCondition] = useState('');
  const [shoeBox, setShoeBox] = useState('');
  const [sneakerCategory, setSneakerCategory] = useState('');
  const [sneakerSize, setSneakerSize] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSneakerNameChange = (e) => {
    setSneakerName(e.target.value);
  };

  const handleSneakerTypeChange = (e) => {
    setSneakerType(e.target.value);
    setSneakerSize('');
  };

  const handleSneakerCategory = (e) => {
    setSneakerCategory(e.target.value);
  };

  const handleSneakerCondition = (e) => {
    setSneakerCondition(e.target.value);
  };

  const handleShoeBoxChange = (e) => {
    setShoeBox(e.target.value);
  };

  const handleSneakerSize = (e) => {
    setSneakerSize(e.target.value);
  };

  const renderSizeOptions = () => {
    switch (sneakerType) {
      case 'man':
        return Array.from({ length: 11 }, (_, i) => 40 + i).map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ));
      case 'youth':
      case 'woman':
        return Array.from({ length: 11 }, (_, i) => 30 + i).map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ));
      case 'kids':
        return Array.from({ length: 16 }, (_, i) => 10 + i).map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ));
      default:
        return <option value="">Select</option>;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-10 ml-8 uppercase">
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
                  placeholder="Sneaker name:"
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  id="name"
                  maxLength="62"
                  value={sneakerName}
                  onChange={handleSneakerNameChange}
                  required
                />
                <p>Description:</p>
                <input
                  type="text"
                  placeholder="Description:"
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  id="description"
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
                <p>Sneaker Type:</p>
                <select
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  value={sneakerType}
                  onChange={handleSneakerTypeChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                  <option value="youth">Youth</option>
                  <option value="kids">Kids</option>
                </select>
                <p>Sneaker Category:</p>
                <select
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  value={sneakerCategory}
                  onChange={handleSneakerCategory}
                  required
                >
                  <option value="running">Running Shoes</option>
                  <option value="basketball">Basketball Shoes</option>
                  <option value="basketball">Football Shoes</option>
                  <option value="skate">Skate Shoes</option>
                  <option value="lifestyle">Lifestyle Shoes</option>
                  <option value="casual">Casual Shoes</option>
                  <option value="tennis">Tennis Shoes</option>
                  <option value="walking">Walking Shoes</option>
                </select>
                <p>Sneaker Condition:</p>
                <select
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  value={sneakerCondition}
                  onChange={handleSneakerCondition}
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <p>Sneaker Size:</p>
                <select
                  className="bg-[#404040] text-white rounded-3xl border p-3"
                  value={sneakerSize}
                  onChange={handleSneakerSize}
                  required
                >
                  {renderSizeOptions()}
                </select>

                <p>Are the shoes coming in a box or not?</p>
                <div className="radio-buttons flex gap-5 ">
                  <label className="radio-box ">
                    <input
                      type="radio"
                      name="shoeBox"
                      value="yes"
                      checked={shoeBox === 'yes'}
                      onChange={handleShoeBoxChange}
                    />
                    Yes
                  </label>
                  <label className="radio-box">
                    <input
                      type="radio"
                      name="shoeBox"
                      value="no"
                      checked={shoeBox === 'no'}
                      onChange={handleShoeBoxChange}
                    />
                    No
                  </label>
                </div>

                <div className="">
                  <div className="flex gap-2">
                    <input type="checkbox" id="sale" className="w-5" />
                    <span>Sale</span>
                    <input type="checkbox" id="trade" className="w-5" />
                    <span>Trade</span>
                    <input type="checkbox" id="delivery" className="w-5" />
                    <span>Home Delivery</span>
                  </div>
                </div>
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
          {latitude && longitude && (
            <Marker position={[latitude, longitude]}>
              <Popup>{address}</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default CreateSneaker;
