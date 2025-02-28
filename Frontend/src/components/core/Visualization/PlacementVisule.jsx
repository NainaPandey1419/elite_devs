import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacementData } from '../../../operations/getData';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import exportPDF from "./exportPDF";
import Branches from "./Branches";

export default function PlacementVisual() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPlacementData(dispatch);
  }, []);

  const placementData = useSelector((store) => store.fetchedData);

  if (placementData.length === 0) {
    return <div>Loading data...</div>;
  }

  const COLORS = [
    "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A569BD", "#F1948A", "#48C9B0"
  ];

  // Students Placed per Company (Bar Chart)
  const companyDistribution = placementData.reduce((acc, record) => {
    acc[record.companyName] = (acc[record.companyName] || 0) + 1;
    return acc;
  }, {});

  const companyData = Object.keys(companyDistribution).map((company) => ({
    name: company,
    students: companyDistribution[company],
  }));

  // Placement Distribution by Branch (Pie Chart)
  const branchDistribution = placementData.reduce((acc, record) => {
    acc[record.branch] = (acc[record.branch] || 0) + 1;
    return acc;
  }, {});

  const branchData = Object.keys(branchDistribution).map((branch) => ({
    name: branch,
    value: branchDistribution[branch],
  }));

  return (
    <div>
      <Branches />
      <div id="pdf-content" className="relative text-center p-5 font-sans">
        <button
          onClick={exportPDF}
          className="absolute top-2 right-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Export as PDF
        </button>
        <h1>Placement Data Insights</h1>

        {/* Pie Chart: Placement Distribution by Branch */}
        <h2>Placement Distribution by Branch</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={branchData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#ff7300"
              label={(entry) => `${entry.name} (${entry.value})`}
            >
              {branchData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value} students`, name]} />
          </PieChart>
        </ResponsiveContainer>

        {/* Bar Chart: Students Placed per Company */}
        <h2>Students Placed per Company</h2>
        <ResponsiveContainer width="90%" height={300}>
          <BarChart data={companyData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}
