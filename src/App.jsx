import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import lgaMap from "./assets/geoJsonMaps/SA_LGA_GEOJSON.json";
import poaMap from "./assets/geoJsonMaps/SA_POA_GEOJSON.json";
import salMap from "./assets/geoJsonMaps/SA_SAL_GEOJSON.json";

import lgaPopuData21 from "./assets/dataBundles/populationLGA2021.json";
import salPopuData21 from "./assets/dataBundles/populationSAL2021.json";
import poaPopuData21 from "./assets/dataBundles/populationPOA2021.json";
import DataTable from "./components/dataTable";
import { useMemo, useState } from "react";
import Header from "./components/header";

function App() {
  const [maptype, setMaptype] = useState("LGA");
  const data = useMemo(() => {
    if (maptype === "LGA") {
      return [...lgaPopuData21];
    } else if (maptype === "SAL") {
      return [...salPopuData21];
    } else if (maptype === "POA") {
      return [...poaPopuData21];
    }
  }, [maptype]);
  const [selectedData, setSelectedData] = useState();

  const onEachLGASelection = (f, layer) => {
    const lgaData = f.properties;
    // console.log(lgaData);
    // layer.bindPopup(fName);

    layer.on({
      click: () => {
        // event.target.setStyle({
        //   color: "green",
        // });
        // console.log(name);
        getSelectionInfo("LGA", lgaData);
      },
    });
  };

  const onEachSALSelection = (f, layer) => {
    const salData = f.properties;

    layer.on({
      click: () => {
        getSelectionInfo("SAL", salData);
      },
    });
  };

  const onEachPOASelection = (f, layer) => {
    const poaData = f.properties;

    layer.on({
      click: () => {
        getSelectionInfo("POA", poaData);
      },
    });
  };

  const getSelectionInfo = (type, selectionData) => {
    if (type === "LGA") {
      const result = data.find(
        (item) => item.LGA_CODE_2021 === "LGA" + selectionData.LGA_CODE24
      );
      setSelectedData({ tableData: result, name: selectionData.LGA_NAME24 });
    } else if (type === "SAL") {
      const result = data.find(
        (item) => item.SAL_CODE_2021 === "SAL" + selectionData.SAL_CODE21
      );
      setSelectedData({ tableData: result, name: selectionData.SAL_NAME21 });
    } else if (type === "POA") {
      const result = data.find(
        (item) => item.POA_CODE_2021 === "POA" + selectionData.POA_CODE21
      );
      setSelectedData({ tableData: result, name: selectionData.POA_NAME21 });
    } else {
      setSelectedData(undefined);
    }
  };

  return (
    <div>
      <Header maptype={maptype} setMaptype={setMaptype} setSelectedData={setSelectedData} />
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
          {maptype === "LGA" && (
            <GeoJSON
              style={{
                fillColor: "red",
                fillOpacity: 0.05,
                weight: 2,
              }}
              data={lgaMap}
              onEachFeature={onEachLGASelection}
            />
          )}
          {maptype === "SAL" && (
            <GeoJSON
              style={{
                fillColor: "red",
                fillOpacity: 0.05,
                color: "green",
                weight: 2,
              }}
              data={salMap}
              onEachFeature={onEachSALSelection}
            />
          )}
          {maptype === "POA" && (
            <GeoJSON
              style={{
                fillColor: "red",
                fillOpacity: 0.05,
                color: "red",
                weight: 2,
              }}
              data={poaMap}
              onEachFeature={onEachPOASelection}
            />
          )}
          {/* <DetectClick /> */}
        </MapContainer>
        {selectedData && (
          <div className="absolute bottom-5 right-0 z-[999] p-5 bg-white">
            <DataTable data={selectedData} />
            <button
              className="absolute top-1 right-4"
              onClick={() => setSelectedData(undefined)}
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

// function DetectClick() {
//   useMapEvents({
//     click: (e) => {
//       console.log(e);
//     },
//   });
// }
