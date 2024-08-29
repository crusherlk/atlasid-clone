/* eslint-disable react/prop-types */
function Header({ maptype, setMaptype, setSelectedData }) {
  return (
    <>
      <div className="flex justify-between items-center h-12 bg-blue-950 px-4">
        <div></div>
        <h1 className="text-white text-2xl font-semibold">Leaflet App Test</h1>
        <select
          id="map-type"
          className="w-[150px]"
          value={maptype}
          onChange={(e) => {
            setMaptype(e.target.value);
            setSelectedData(undefined);
          }}
        >
          <option value="LGA">LGA</option>
          <option value="SAL">SAL</option>
          <option value="POA">POA</option>
        </select>
      </div>
    </>
  );
}

export default Header;
