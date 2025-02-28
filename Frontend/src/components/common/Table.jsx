import React from 'react';

const JsonTable = ({ data }) => {
  // Handle empty or invalid data
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  // Extract column headers from the first object's keys
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-black border">
        <thead className="bg-black">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="py-2 px-4 border-b text-left font-medium text-gray-700">
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-black' : 'bg-black'}>
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border-b">
                  {renderCellContent(row[header])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to render different types of cell content
const renderCellContent = (content) => {
  if (content === null || content === undefined) {
    return '-';
  } else if (typeof content === 'object') {
    return JSON.stringify(content);
  } else if (typeof content === 'boolean') {
    return content ? 'Yes' : 'No';
  } else {
    return content;
  }
};

export default JsonTable;