import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Card Component
const Card = ({ title, content }) => {
  return (
    <div className="p-4 rounded-xl">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">{content}</div>
    </div>
  );
};

// CreateSneaker Component
function CreateSneaker() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePreviousCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };

  const handleSubmit = () => {
    // Implement submission logic here
  };

  const [sneakerName, setSneakerName] = useState('');
  const [description, setDescription] = useState('');
  const [sneakerType, setSneakerType] = useState('');
  const [sneakerCategory, setSneakerCategory] = useState('');
  const [sneakerCondition, setSneakerCondition] = useState('');
  const [sneakerSize, setSneakerSize] = useState('');
  const [shoeBox, setShoeBox] = useState('');
  const [address, setAddress] = useState('');

  const handleSneakerNameChange = (e) => {
    setSneakerName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSneakerTypeChange = (e) => {
    setSneakerType(e.target.value);
    setSneakerSize('');
  };

  const handleSneakerCategoryChange = (e) => {
    setSneakerCategory(e.target.value);
  };

  const handleSneakerConditionChange = (e) => {
    setSneakerCondition(e.target.value);
  };

  const handleSneakerSizeChange = (e) => {
    setSneakerSize(e.target.value);
  };

  const handleShoeBoxChange = (e) => {
    setShoeBox(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
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

  const handleSneakerConditionOptions = () => {
    return Array.from({ length: 10 }, (_, i) => i + 1).map((condition) => (
      <option key={condition} value={condition}>
        {condition}
      </option>
    ));
  };

  const cards = [
    {
      title: 'First Third',
      content: (
        <div className="">
          <p>Sneaker Name:</p>
          <input
            type="text"
            placeholder="Sneaker name:"
            className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
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
            className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
            id="description"
            maxLength="62"
            minLength="10"
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
      ),
    },
    {
      title: 'Second Third',
      content: (
        <div className="">
          <div className="flex flex-wrap gap-4">
            <div className="w-1/2">
              <p>Sneaker Type:</p>
              <select
                className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
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
            </div>
            <div className="w-1/2">
              <p>Sneaker Category:</p>
              <select
                className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
                value={sneakerCategory}
                onChange={handleSneakerCategoryChange}
                required
              >
                <option value="running">Running Shoes</option>
                <option value="basketball">Basketball Shoes</option>
                <option value="football">Football Shoes</option>
                <option value="skate">Skate Shoes</option>
                <option value="lifestyle">Lifestyle Shoes</option>
                <option value="casual">Casual Shoes</option>
                <option value="tennis">Tennis Shoes</option>
                <option value="walking">Walking Shoes</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-1/2">
              <p>Sneaker Condition:</p>
              <select
                className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
                value={sneakerCondition}
                onChange={handleSneakerConditionChange}
                required
              >
                {handleSneakerConditionOptions()}
              </select>
            </div>
            <div className="w-1/2">
              <p>Sneaker Size:</p>
              <select
                className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
                value={sneakerSize}
                onChange={handleSneakerSizeChange}
                required
              >
                {renderSizeOptions()}
              </select>
            </div>
          </div>
          <p>Are the shoes coming in a box or not?</p>
          <div className="radio-buttons flex gap-5 mb-4">
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
            </div>
            <div>
              <input type="checkbox" id="delivery" className="w-5" />
              <span>Home Delivery</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Third Third',
      content: (
        <div className="grid grid-cols-2 gap-10">
          <div className="w-full">
            {' '}
            {/* Adjusted width */}
            <p>Country:</p>
            <input
              type="text"
              placeholder="Sneaker's Owner Country"
              className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
              id="country"
              value={address}
              onChange={handleAddressChange}
              required
            />
            <p>City:</p>
            <input
              type="text"
              placeholder="Sneaker's Owner City"
              className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
              id="city"
              value={address}
              onChange={handleAddressChange}
              required
            />
            <p>Street:</p>
            <input
              type="text"
              placeholder="Sneaker's Owner Street"
              className="bg-[#404040] text-white rounded-3xl border p-3 mb-4"
              id="street"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>
          <div className="map-container mt-4">
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: '300px', width: '100%' }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {/* Marker */}
              <Marker position={[51.505, -0.09]}>
                <Popup>Example Popup</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-10 ml-8 uppercase">
      <div className="ml-8">
        <div className="upload_container text-white" data-aos="zoom-in-up">
          <main className="p-3 mx-auto">
            <h1 className="uppercase text-2xl p-2">
              Upload Sneaker for trade or sell!
            </h1>
            <form className="flex flex-col sm:flex-row">
              <div className="flex flex-col gap-1 flex-1">
                <div
                  style={{ display: currentCardIndex === 0 ? 'block' : 'none' }}
                  id="first_card"
                >
                  <Card
                    title={cards[currentCardIndex].title}
                    content={cards[currentCardIndex].content}
                  />
                </div>
                <div
                  style={{ display: currentCardIndex === 1 ? 'block' : 'none' }}
                  id="second_card"
                >
                  <Card
                    title={cards[currentCardIndex].title}
                    content={cards[currentCardIndex].content}
                  />
                </div>
                <div
                  style={{ display: currentCardIndex === 2 ? 'block' : 'none' }}
                  id="third_card"
                >
                  <Card
                    title={cards[currentCardIndex].title}
                    content={cards[currentCardIndex].content}
                  />
                </div>

                <div className="flex justify-end">
                  {currentCardIndex === 0 ? (
                    <button
                      className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                      onClick={handleNextCard}
                    >
                      Next
                    </button>
                  ) : currentCardIndex === cards.length - 1 ? (
                    <>
                      <button
                        className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={handlePreviousCard}
                      >
                        Previous
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={handlePreviousCard}
                      >
                        Previous
                      </button>
                      <button
                        className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-4"
                        onClick={handleNextCard}
                      >
                        Next
                      </button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateSneaker;
