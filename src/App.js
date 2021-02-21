import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  return (
    <div
      id="mapid"
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
      }}
    >
      <MapContainer
        style={{ position: "absolute", height: "100%", width: "100%" }}
        center={[44.96, 34.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.95720745, 34.10031445]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
