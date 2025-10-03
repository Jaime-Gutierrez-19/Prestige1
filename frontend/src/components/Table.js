const Table = ({ data }) => {
  return (
    <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
      <thead className="bg-gray-800 text-white">
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="px-4 py-2 text-left">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t">
            {Object.values(row).map((value, i) => (
              <td key={i} className="px-4 py-2">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
