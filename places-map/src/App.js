import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to handle map clicks
function MapClickHandler({ onMapClick, isAddingLocations }) {
  useMapEvents({
    click: (e) => {
      if (isAddingLocations) {
        onMapClick(e.latlng);
      }
    },
  });
  return null;
}

// Location input modal component
function LocationModal({ isOpen, onClose, onSave, position }) {
  const [locationName, setLocationName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('lived');
  const [years, setYears] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationName.trim()) {
      onSave({
        id: uuidv4(),
        name: locationName,
        description,
        category,
        years,
        notes,
        position,
        timestamp: new Date().toISOString()
      });
      // Reset form
      setLocationName('');
      setDescription('');
      setCategory('lived');
      setYears('');
      setNotes('');
      onClose();
    }
  };

  if (!isOpen) return null;

//Form for user to add location details where they have been to
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add Location Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="locationName">Location Name *</label>
            <input
              type="text"
              id="locationName"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              placeholder="e.g., New York City, Paris, Home"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="lived">Place I've Lived</option>
              <option value="visited">Place I've Visited</option>
              <option value="want-to-visit">Want to Visit</option>
              <option value="favorite">Favorite Place</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g., My childhood home, Amazing vacation spot"
            />
          </div>

          <div className="form-group">
            <label htmlFor="years">Years/Time Period</label>
            <input
              type="text"
              id="years"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="e.g., 2010-2015, Summer 2023"
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Favorite restaurant, memorable experiences, etc."
              rows="3"
            />
          </div>

          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Location
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Location list component
function LocationList({ locations, isVisible, onToggleVisibility }) {
  if (!isVisible) {
    return (
      <div className="location-list-toggle">
        <button onClick={onToggleVisibility} className="btn-secondary">
          Show Locations ({locations.length})
        </button>
      </div>
    );
  }

  return (
    <div className="location-list">
      <div className="location-list-header">
        <h3>Your Places ({locations.length})</h3>
        <button onClick={onToggleVisibility} className="btn-secondary btn-small">
          Hide List
        </button>
      </div>
      <div className="location-items">
        {locations.map((location) => (
          <div key={location.id} className="location-item">
            <div className="location-header">
              <h4>{location.name}</h4>
              <span className={`category-badge ${location.category}`}>
                {location.category.replace('-', ' ')}
              </span>
            </div>
            {location.description && <p className="location-description">{location.description}</p>}
            {location.years && <p className="location-years">{location.years}</p>}
            {location.notes && <p className="location-notes">{location.notes}</p>}
            <p className="location-coords">
               {location.position.lat.toFixed(4)}, {location.position.lng.toFixed(4)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [locations, setLocations] = useState([]);
  const [isAddingLocations, setIsAddingLocations] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showLocationList, setShowLocationList] = useState(true);
  const mapRef = useRef();

  // Handle map click
  const handleMapClick = (latlng) => {
    setSelectedPosition(latlng);
    setShowModal(true);
  };

  // Save new location
  const handleSaveLocation = (locationData) => {
    setLocations(prev => [...prev, locationData]);
  };

  // Handle Done button
  const handleDone = () => {
    setIsAddingLocations(false);
    setShowLocationList(false);
  };

  // Handle Reset button
  const handleReset = () => {
    setLocations([]);
    setIsAddingLocations(true);
    setShowLocationList(true);
    setShowModal(false);
  };

  // Toggle location list visibility
  const toggleLocationList = () => {
    setShowLocationList(!showLocationList);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1> My World Explorer!</h1>
        <div className="controls">
          {isAddingLocations ? (
            <>
              <p className="instruction">Click on the map to add a location</p>
              <button onClick={handleDone} className="btn-primary">
                Done Adding Locations
              </button>
            </>
          ) : (
            <p className="instruction">Click on markers to see location details</p>
          )}
          <button onClick={handleReset} className="btn-secondary">
            Reset Map
          </button>
        </div>
      </header>

      <div className="main-content">
        <div className="map-container">
          <MapContainer
            center={[39.8283, -98.5795]} // Center of USA
            zoom={4}
            style={{ height: '100%', width: '100%' }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClickHandler 
              onMapClick={handleMapClick} 
              isAddingLocations={isAddingLocations}
            />
            {locations.map((location) => (
              <Marker key={location.id} position={location.position}>
                <Popup>
                  <div className="popup-content">
                    <h4>{location.name}</h4>
                    <div className={`category-badge ${location.category}`}>
                      {location.category.replace('-', ' ')}
                    </div>
                    {location.description && <p><strong>Description:</strong> {location.description}</p>}
                    {location.years && <p><strong>Years:</strong> {location.years}</p>}
                    {location.notes && <p><strong>Notes:</strong> {location.notes}</p>}
                    <p className="coordinates">
                      <strong>Coordinates:</strong> {location.position.lat.toFixed(4)}, {location.position.lng.toFixed(4)}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {isAddingLocations && (
          <LocationList 
            locations={locations}
            isVisible={showLocationList}
            onToggleVisibility={toggleLocationList}
          />
        )}
      </div>

      <LocationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveLocation}
        position={selectedPosition}
      />
    </div>
  );
}

export default App;
