import { MapContainer, TileLayer, useMapEvents, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import lgas from "./assets/South Aus - LGA - optimizedv2.json";
import popuData24 from "./assets/populationLGA2021.json";
import DataTable from "./components/dataTable";
import { useState } from "react";
import Header from "./components/header";

function App() {
  const data = [...popuData24];
  const [selectedLGA, setSelectedLGA] = useState();

  const onEachSelection = (f, layer) => {
    const lgaData = f.properties;
    // console.log(lgaData);
    // layer.bindPopup(fName);

    layer.on({
      click: () => {
        // event.target.setStyle({
        //   color: "green",
        // });
        // console.log(name);
        getSelectionInfo(lgaData);
      },
    });
  };

  const getSelectionInfo = (lgaData) => {
    const result = data.find(
      (item) => item.LGA_CODE_2021 === "LGA" + lgaData.LGA_CODE24
    );
    // console.log(result);
    setSelectedLGA({ tableData: result, lgaName: lgaData.LGA_NAME24 });
  };

  return (
    <div>
      <Header />
      <div className="mapContainer relative">
        <MapContainer
          center={[-34.929, 138.601]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON
            style={{
              fillColor: "red",
              fillOpacity: 0.05,
              weight: 2,
            }}
            data={lgas}
            onEachFeature={onEachSelection}
          />
          {/* <DetectClick /> */}
        </MapContainer>
        {selectedLGA && (
          <div className="absolute bottom-5 right-0 z-[999] p-5 bg-white">
            <DataTable lgaInfo={selectedLGA} />
            <button
              className="absolute top-1 right-4"
              onClick={() => setSelectedLGA(undefined)}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

function DetectClick() {
  useMapEvents({
    click: (e) => {
      console.log(e);
    },
  });
}
