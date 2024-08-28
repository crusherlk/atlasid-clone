/* eslint-disable react/prop-types */
function DataTable({ lgaInfo }) {
  const { tableData, lgaName } = lgaInfo;

  return (
    <div className="bg-white w-[400px]">
      <table className="table-fixed w-full text-sm">
        <thead>
          <tr>
            <th className="w-[40%] text-start p-1">Age Groups</th>
            <th className="text-start p-1">Male</th>
            <th className="text-start p-1">Female</th>
            <th className="text-start p-1">Total</th>
          </tr>
        </thead>
        <tbody className="text-start">
          <tr className="">
            <td className="p-1">Age_0_4_yr</td>
            <td className="p-1">{tableData["Age_0_4_yr_M"]}</td>
            <td className="p-1">{tableData["Age_0_4_yr_F"]}</td>
            <td className="p-1">{tableData["Age_0_4_yr_P"]}</td>
          </tr>
          <tr>
            <td className="p-1">Age_5_14_yr</td>
            <td className="p-1">{tableData["Age_5_14_yr_M"]}</td>
            <td className="p-1">{tableData["Age_5_14_yr_F"]}</td>
            <td className="p-1">{tableData["Age_5_14_yr_P"]}</td>
          </tr>
          <tr>
            <td className="p-1">Age_15_19_yr</td>
            <td className="p-1">{tableData["Age_15_19_yr_M"]}</td>
            <td className="p-1">{tableData["Age_15_19_yr_F"]}</td>
            <td className="p-1">{tableData["Age_15_19_yr_P"]}</td>
          </tr>
          <tr>
            <td className="p-1">Age_20_24_yr</td>
            <td className="p-1">{tableData["Age_20_24_yr_M"]}</td>
            <td className="p-1">{tableData["Age_20_24_yr_F"]}</td>
            <td className="p-1">{tableData["Age_20_24_yr_P"]}</td>
          </tr>
          <tr>
            <td className="p-1">Age_25_34_yr</td>
            <td className="p-1">{tableData["Age_25_34_yr_M"]}</td>
            <td className="p-1">{tableData["Age_25_34_yr_F"]}</td>
            <td className="p-1">{tableData["Age_25_34_yr_P"]}</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-4">
        Population data recorded in{" "}
        <span className="underline italic">{lgaName}</span>, Australia
      </p>
    </div>
  );
}

export default DataTable;
