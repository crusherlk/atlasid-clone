import { useState } from "react";

function Header() {
  const [maptype, setMaptype] = useState("lga");

  return (
    <>
      <div className="flex justify-between items-center h-12 bg-blue-950 px-4">
        <div></div>
        <h1 className="text-white text-2xl font-semibold">Leaflet App Test</h1>
        <select
          id="map-type"
          className="w-[150px]"
          value={maptype}
          onChange={(e) => setMaptype(e.target.value)}
        >
          <option value="lga">LGA</option>
          <option value="sal">SAL</option>
          <option value="poa">POA</option>
        </select>
      </div>
    </>
  );
}

export default Header;
